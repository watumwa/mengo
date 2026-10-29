import type { Metadata } from "next";
import "./globals.css";
import "./phase2.css";
import "./design-upgrade.css";
import "./experience.css";
import "./member-login.css";
import "./buganda-theme.css";
import "./mobile-navigation.css";
import "./mengo-editorial.css";
import "./design-tokens.css";
import "./portal-preview.css";
import "./editorial-pages.css";
import "./workspace-preview.css";
import "./ecosystem.css";
import "./directory-premium.css";
import "./mega-navigation.css";
import "./membership-wizard.css";
import "./strategy-hub.css";
import "./concept-pages.css";
import "./learning-experiences.css";
import "./home-shortcuts.css";
import "./workflow-preview.css";
import "./commerce-redesign.css";
import "./interactive-commerce.css";
import "./premium-experience.css";
import "./home-redesign.css";
import "./blueprint.css";
import "./blueprint-home.css";
import "./blueprint-home-override.css";
import "./blueprint-editorial.css";
import "./blueprint-legacy.css";
import "./business-directory-modern.css";
import "./client-photo-stories.css";
export const metadata: Metadata = {
  title: "Mengo Chamber of Commerce | Connecting Commerce. Building Prosperity.",
  description: "Connecting commercial centres, traders, enterprises and market opportunities in Buganda and beyond.",
  icons: {
    icon: [{ url: "/images/buganda-kingdom-crest-mark.png", type: "image/png" }],
    shortcut: "/images/buganda-kingdom-crest-mark.png",
    apple: [{ url: "/images/buganda-kingdom-crest-mark.png", type: "image/png" }],
  },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
