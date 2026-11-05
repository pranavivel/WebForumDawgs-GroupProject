// Mock API: GET returns sample posts; POST does not save yet.
import { NextResponse } from "next/server";
import { tempPosts } from "../../tempData/cards";

export async function GET() { //For Discussion page
    return NextResponse.json({
        mock: true,
        posts: tempPosts,
    });
}

export async function POST(request: Request) { //For Create page
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
        typeof body.title !== "string" ||
        typeof body.description !== "string" ||
        !body.title.trim() ||
        !body.description.trim()
    ) {
        return NextResponse.json(
            { error: "Title and description are required." },
            { status: 400 }
        );
    }

    // Replace this response with database-saving code later.
    return NextResponse.json(
        { error: "Database saving is not implemented yet." },
        { status: 501 }
    );
}