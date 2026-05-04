import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";

const WaitlistSchema = z.object({
  name: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = WaitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Invalid form submission.",
        },
        { status: 400 },
      );
    }

    const { name, email, phone } = parsed.data;
    const supabaseAdmin = getSupabaseAdmin();

    const { error } = await supabaseAdmin.from("waitlist").insert({
      name: name || null,
      email: email.toLowerCase(),
      phone: phone || null,
      source: "landing_page",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Success! We'll contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
