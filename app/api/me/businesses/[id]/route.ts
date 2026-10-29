import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = (await cookies()).get("mengo_session")?.value;
  if (!token) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const base = process.env.CHAMBER_BACKEND_URL;
  if (!base) return NextResponse.json({ error: "Backend service not configured" }, { status: 503 });
  const { id } = await params;
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: "Invalid business ID" }, { status: 400 });
  try {
    const response = await fetch(new URL(`/api/v1/me/businesses/${id}/`, base), {
      method: "PATCH",
      headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(await request.json()),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: { "Content-Type": response.headers.get("Content-Type") || "application/json", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Business service unavailable" }, { status: 502 });
  }
}
