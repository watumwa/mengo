"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ClipboardCopy, ShieldCheck } from "lucide-react";
import { Shell } from "../../components";
import "./premium-application.css";

type Fields = {
  organisation: string;
  organisation_type: string;
  district: string;
  sector: string;
  contact_name: string;
  email: string;
  phone: string;
  message: string;
};
type RequiredField = Exclude<keyof Fields, "message">;
type Errors = Partial<Record<RequiredField, string>>;

const initial: Fields = {
  organisation: "",
  organisation_type: "",
  district: "",
  sector: "",
  contact_name: "",
  email: "",
  phone: "",
  message: "",
};

const requiredFields: RequiredField[] = [
  "organisation",
  "organisation_type",
  "district",
  "sector",
  "contact_name",
  "email",
  "phone",
];

const maxLengths: Record<keyof Fields, number> = {
  organisation: 200,
  organisation_type: 80,
  district: 100,
  sector: 120,
  contact_name: 150,
  email: 254,
  phone: 40,
  message: 3000,
};

const fieldLabels: Record<RequiredField, string> = {
  organisation: "Organisation / business name",
  organisation_type: "Organisation type",
  district: "District",
  sector: "Business sector",
  contact_name: "Contact person's full name",
  email: "Email address",
  phone: "Telephone number",
};

function fieldError(field: RequiredField, raw: string): string {
  const value = raw.trim();
  if (!value) return "Please enter " + fieldLabels[field].toLowerCase() + ".";
  if (value.length > maxLengths[field]) return "This entry is too long.";
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter a valid email address, for example name@example.com.";
  }
  if (field === "phone") {
    const digits = value.replace(/\D/g, "");
    if (!/^\+?[0-9\s()-]+$/.test(value) || digits.length < 7 || digits.length > 15) {
      return "Enter a valid phone number, including the country code if applicable.";
    }
  }
  return "";
}

type FieldProps = {
  name: RequiredField;
  value: string;
  error?: string;
  onChange: (name: RequiredField, value: string) => void;
  onBlur: (name: RequiredField) => void;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
  list?: string;
  hint?: string;
  full?: boolean;
};

function FormField({
  name, value, error, onChange, onBlur, type = "text",
  placeholder, autoComplete, list, hint, full,
}: FieldProps) {
  const id = "mc-join-" + name;
  const describedBy = [
    hint ? id + "-hint" : "",
    error ? id + "-error" : "",
  ].filter(Boolean).join(" ") || undefined;

  return (
    <div className={"mc-join-field" + (full ? " mc-join-field--wide" : "")}>
      <label htmlFor={id}>
        {fieldLabels[name]} <span className="mc-join-required" aria-hidden="true">*</span>
      </label>
      {hint && <p className="mc-join-hint" id={id + "-hint"}>{hint}</p>}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLengths[name]}
        autoComplete={autoComplete}
        list={list}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        onBlur={() => onBlur(name)}
        onChange={(event) => onChange(name, event.target.value)}
      />
      {error && <p className="mc-join-field-error" id={id + "-error"}>{error}</p>}
    </div>
  );
}

export default function MembershipApply() {
  const [data, setData] = useState<Fields>(initial);
  const [touched, setTouched] = useState<Partial<Record<RequiredField, boolean>>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [reference, setReference] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const submittingRef = useRef(false);
  const confirmationHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (reference) confirmationHeadingRef.current?.focus();
  }, [reference]);

  function update(name: RequiredField, value: string) {
    setData((current) => ({ ...current, [name]: value }));
    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: fieldError(name, value) }));
    }
  }

  function blur(name: RequiredField) {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: fieldError(name, data[name]) }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || reference) return;

    const nextErrors: Errors = {};
    for (const field of requiredFields) {
      const message = fieldError(field, data[field]);
      if (message) nextErrors[field] = message;
    }
    setTouched(Object.fromEntries(requiredFields.map((field) => [field, true])) as Record<RequiredField, boolean>);
    setErrors(nextErrors);
    setConsentError(!consent);
    setSubmitError("");

    const firstInvalid = requiredFields.find((field) => nextErrors[field]);
    if (firstInvalid || !consent) {
      document.getElementById(firstInvalid ? "mc-join-" + firstInvalid : "mc-join-consent")?.focus();
      return;
    }

    submittingRef.current = true;
    setSending(true);

    const payload: Fields = {
      organisation: data.organisation.trim(),
      organisation_type: data.organisation_type.trim(),
      district: data.district.trim(),
      sector: data.sector.trim(),
      contact_name: data.contact_name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      message: data.message.trim(),
    };

    try {
      const response = await fetch("/api/membership/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const remoteErrors: Errors = {};
        for (const field of requiredFields) {
          const detail = result[field];
          if (typeof detail === "string") remoteErrors[field] = detail;
          else if (Array.isArray(detail) && typeof detail[0] === "string") remoteErrors[field] = detail[0];
        }
        if (Object.keys(remoteErrors).length) {
          setErrors((current) => ({ ...current, ...remoteErrors }));
          setSubmitError("Please correct the highlighted fields and submit again.");
          const first = requiredFields.find((field) => remoteErrors[field]);
          if (first) document.getElementById("mc-join-" + first)?.focus();
        } else {
          setSubmitError(typeof result.detail === "string"
            ? result.detail
            : "The application could not be submitted. Please check your details and try again.");
        }
        return;
      }

      if (typeof result.reference !== "string" || !result.reference.trim()) {
        setSubmitError("The server did not return a confirmation reference. Please contact the Chamber before resubmitting.");
        return;
      }

      setReference(result.reference.trim());
    } catch {
      setSubmitError("The application service is temporarily unavailable. Please try again later.");
    } finally {
      submittingRef.current = false;
      setSending(false);
    }
  }

  async function copyReference() {
    if (!reference) return;
    setCopyError("");
    setCopied(false);
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
    } catch {
      setCopyError("Copying is unavailable in this browser. Please select the reference and copy it manually.");
    }
  }

  return (
    <Shell>
      <main className="mc-join">
        <div className="mc-join-heading">
          <div className="bp-shell mc-join-wrap">
            <nav className="mc-join-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <Link href="/membership">Membership</Link><span aria-hidden="true">/</span>
              <span aria-current="page">Apply</span>
            </nav>
            <p className="mc-join-eyebrow">Mengo Chamber of Commerce Limited</p>
            <h1>Apply for membership</h1>
            <p className="mc-join-lead">
              Provide your organisation and contact details for administrative review.
              This application does not require a payment or guarantee approval.
            </p>
          </div>
        </div>

        <div className="bp-shell mc-join-wrap mc-join-layout">
          {reference ? (
            <section className="mc-join-confirmation" aria-labelledby="mc-join-confirmation-title" role="status">
              <div className="mc-join-confirmation-mark"><CheckCircle2 size={29} aria-hidden="true" /></div>
              <p className="mc-join-eyebrow">Submission confirmation</p>
              <h2 id="mc-join-confirmation-title" tabIndex={-1} ref={confirmationHeadingRef}>Application received</h2>
              <p>Your application has been submitted to the Chamber for review. Please keep the reference below; you will need it together with your application email to track progress.</p>
              <div className="mc-join-reference">
                <div>
                  <span>Application reference</span>
                  <strong>{reference}</strong>
                </div>
                <button type="button" onClick={copyReference}>
                  {copied ? <Check size={17} aria-hidden="true" /> : <ClipboardCopy size={17} aria-hidden="true" />}
                  {copied ? "Copied" : "Copy reference"}
                </button>
              </div>
              <p className="mc-join-copy-feedback" aria-live="polite">{copyError || (copied ? "Reference copied to clipboard." : "")}</p>
              <div className="mc-join-confirmation-next">
                <h3>What happens next?</h3>
                <p>The Chamber will review the submitted details. This confirmation is not proof of approved membership. Any eligibility requirements, fees and subsequent steps must be confirmed by the Chamber.</p>
              </div>
              <div className="mc-join-confirmation-actions">
                <Link href="/membership/status" className="mc-join-primary-action">
                  Track application status <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/membership" className="mc-join-secondary-action">Return to membership</Link>
              </div>
            </section>
          ) : (
            <>
              <form className="mc-join-form" onSubmit={submit} noValidate aria-label="Membership application">
                <div className="mc-join-form-heading">
                  <p>Membership application</p>
                  <h2>Organisation information</h2>
                  <span>Fields marked <strong>*</strong> are required.</span>
                </div>

                <section className="mc-join-section" aria-labelledby="mc-join-section-organisation">
                  <div className="mc-join-section-heading">
                    <span aria-hidden="true">01</span>
                    <div>
                      <h3 id="mc-join-section-organisation">Organisation details</h3>
                      <p>Tell us about the business or institution applying.</p>
                    </div>
                  </div>
                  <div className="mc-join-fields">
                    <FormField name="organisation" value={data.organisation} error={errors.organisation} onChange={update} onBlur={blur} full placeholder="Business or institution name" autoComplete="organization" />
                    <FormField name="organisation_type" value={data.organisation_type} error={errors.organisation_type} onChange={update} onBlur={blur} placeholder="Select or type your organisation type" list="mc-join-organisation-types" />
                    <FormField name="district" value={data.district} error={errors.district} onChange={update} onBlur={blur} placeholder="District of operation" list="mc-join-districts" />
                    <FormField name="sector" value={data.sector} error={errors.sector} onChange={update} onBlur={blur} full placeholder="Select or type your sector" list="mc-join-sectors" />
                  </div>
                </section>

                <section className="mc-join-section" aria-labelledby="mc-join-section-contact">
                  <div className="mc-join-section-heading">
                    <span aria-hidden="true">02</span>
                    <div>
                      <h3 id="mc-join-section-contact">Contact information</h3>
                      <p>Who should the Chamber contact about this application?</p>
                    </div>
                  </div>
                  <div className="mc-join-fields">
                    <FormField name="contact_name" value={data.contact_name} error={errors.contact_name} onChange={update} onBlur={blur} full placeholder="Contact person's full name" autoComplete="name" />
                    <FormField name="email" value={data.email} error={errors.email} onChange={update} onBlur={blur} type="email" placeholder="name@example.com" autoComplete="email" />
                    <FormField name="phone" value={data.phone} error={errors.phone} onChange={update} onBlur={blur} type="tel" placeholder="+256 ..." autoComplete="tel" hint="Include a country code when applicable." />
                  </div>
                </section>

                <section className="mc-join-section mc-join-section--final" aria-labelledby="mc-join-section-declaration">
                  <div className="mc-join-section-heading">
                    <span aria-hidden="true">03</span>
                    <div>
                      <h3 id="mc-join-section-declaration">Additional details &amp; declaration</h3>
                      <p>Anything relevant to help review your application?</p>
                    </div>
                  </div>
                  <div className="mc-join-field">
                    <label htmlFor="mc-join-message">Additional information <span className="mc-join-optional">(optional)</span></label>
                    <p className="mc-join-hint" id="mc-join-message-hint">Do not include confidential or sensitive information.</p>
                    <textarea
                      id="mc-join-message"
                      name="message"
                      rows={4}
                      maxLength={maxLengths.message}
                      aria-describedby="mc-join-message-hint"
                      placeholder="Tell us anything else the Chamber should know."
                      value={data.message}
                      onChange={(event) => setData((current) => ({ ...current, message: event.target.value }))}
                    />
                    <p className="mc-join-character-count">{data.message.length} / {maxLengths.message} characters</p>
                  </div>
                  <div className={"mc-join-consent" + (consentError ? " mc-join-consent--error" : "")}>
                    <input
                      type="checkbox"
                      id="mc-join-consent"
                      checked={consent}
                      required
                      aria-invalid={consentError}
                      aria-describedby={consentError ? "mc-join-consent-error" : "mc-join-consent-note"}
                      onChange={(event) => {
                        setConsent(event.target.checked);
                        if (event.target.checked) setConsentError(false);
                      }}
                    />
                    <div>
                      <label htmlFor="mc-join-consent">
                        I confirm that the information provided is accurate and agree to its use for reviewing this application.
                      </label>
                      {consentError && <p id="mc-join-consent-error" className="mc-join-field-error">Please confirm before submitting.</p>}
                      <p className="mc-join-consent-note" id="mc-join-consent-note">
                        Review the <Link href="/privacy">website privacy information</Link> before submitting.
                      </p>
                    </div>
                  </div>
                </section>

                {submitError && <p className="mc-join-submit-error" role="alert">{submitError}</p>}
                <div className="mc-join-submit-row">
                  <button type="submit" className="mc-join-submit" disabled={sending} aria-busy={sending}>
                    {sending ? "Submitting application..." : "Submit application"}
                    {!sending && <ArrowRight size={18} aria-hidden="true" />}
                  </button>
                  <p>This is an application for review, not an approved membership registration.</p>
                </div>
                <datalist id="mc-join-organisation-types">
                  {["Sole proprietorship", "Limited company", "Partnership", "Cooperative", "SACCO", "Non-profit organisation", "Association", "Other"].map((option) => <option value={option} key={option} />)}
                </datalist>
                <datalist id="mc-join-districts">
                  {["Kampala", "Wakiso", "Mukono", "Masaka", "Mpigi", "Mityana", "Mubende", "Luwero", "Kayunga", "Buikwe", "Rakai", "Kyotera", "Sembabule", "Gomba", "Kalangala", "Buvuma", "Other"].map((option) => <option value={option} key={option} />)}
                </datalist>
                <datalist id="mc-join-sectors">
                  {["Agriculture and agribusiness", "Retail and wholesale trade", "Manufacturing", "Technology and ICT", "Construction and real estate", "Finance and professional services", "Transport and logistics", "Tourism and hospitality", "Education and training", "Health services", "Other"].map((option) => <option value={option} key={option} />)}
                </datalist>
              </form>

              <aside className="mc-join-aside" aria-label="Application guidance">
                <div className="mc-join-guide">
                  <div className="mc-join-guide-icon"><ShieldCheck size={21} aria-hidden="true" /></div>
                  <h2>Before you apply</h2>
                  <p>Submit accurate business and contact details for the Chamber's administrative review.</p>
                  <div className="mc-join-guide-line" />
                  <h3>How it works</h3>
                  <ol>
                    <li><span>1</span><p>Complete your organisation and contact information.</p></li>
                    <li><span>2</span><p>Submit the form and keep your reference number.</p></li>
                    <li><span>3</span><p>Use your reference and email to check your application status.</p></li>
                  </ol>
                  <div className="mc-join-guide-line" />
                  <div className="mc-join-no-payment">
                    <strong>No payment required</strong>
                    <p>Categories, eligibility and any fees will be confirmed by the Chamber. Do not make a payment based on this form.</p>
                  </div>
                  <Link href="/membership/status" className="mc-join-status-link">
                    Already applied? Check your status <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            </>
          )}
        </div>
      </main>
    </Shell>
  );
}
