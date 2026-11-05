import { NextResponse } from "next/server";

// Mock signup: validates input but does not save an account.
export async function POST(request: Request) {
    let body;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Request must contain valid JSON." },
            { status: 400 }
        );
    }

    if (
        !body ||
        typeof body.email !== "string" ||
        typeof body.username !== "string" ||
        typeof body.password !== "string" ||
        !body.email.trim() ||
        !body.username.trim() ||
        !body.password
    ) {
        return NextResponse.json(
            { error: "Email, username, and password are required." },
            { status: 400 }
        );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) { //regular expression for email validation, kinda cool
        return NextResponse.json(
            { error: "Please enter a valid email address." },
            { status: 400 }
        );
    }

    return NextResponse.json({
        mock: true,
        username: body.username.trim(),
        message: "Demo signup accepted. No account was saved.",
    });
}