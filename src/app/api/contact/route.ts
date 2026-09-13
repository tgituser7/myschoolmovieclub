import { NextResponse } from "next/server";
import { insertSubmission } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await insertSubmission("contactMessages", data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact submission failed", err);
    return NextResponse.json(
      { ok: false, error: "Failed to save submission" },
      { status: 500 }
    );
  }
}
