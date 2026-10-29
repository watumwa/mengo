import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

async function proxy(request: NextRequest, method: "GET" | "POST") {
  const token = (await cookies()).get("mengo_session")?.value;
  if (!token) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const base = process.env.CHAMBER_BACKEND_URL;
  if (!base) return NextResponse.json({ error: "Backend service not configured" }, { status: 503 });
  try {
    const response = await fetch(new URL("/api/v1/me/businesses/", base), {
      method,
      headers: {
        Authorization: `Token ${token}`,
        ...(method === "POST" ? { "Content-Type": "application/json" } : {}),
      },
      ...(method === "POST" ? { body: JSON.stringify(await request.json()) } : {}),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    const body = await response.text();
    return new NextResponse(body, {
      status: response.status,
      headers: { "Content-Type": response.headers.get("Content-Type") || "application/json", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "Business service unavailable" }, { status: 502 });
  }
}

export async function GET(request: NextRequest) { return proxy(request, "GET"); }
export async function POST(request: NextRequest) { return proxy(request, "POST"); }
