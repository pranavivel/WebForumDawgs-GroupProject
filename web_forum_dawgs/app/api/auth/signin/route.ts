import { NextResponse } from "next/server";

// Mock sign-in for frontend testing only.
//ONLY ACCEPTS DEMO CREDENTIALS: username: demo, password: demo123
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
        typeof body.username !== "string" ||
        typeof body.password !== "string" ||
        !body.username.trim() ||
        !body.password
    ) {
        return NextResponse.json(
            { error: "Username and password are required." },
            { status: 400 }
        );
    }

    if (
        body.username.trim() !== "demo" ||
        body.password !== "demo123"
    ) {
        return NextResponse.json(
            { error: "Invalid demo credentials." },
            { status: 401 }
        );
    }

    return NextResponse.json({
        mock: true,
        username: "demo",
    });
}