// Mock endpoint: returns sample posts, not authenticated user data.
import { NextResponse } from "next/server";
import { tempPosts } from "../../../tempData/cards";

export async function GET() {
    return NextResponse.json({
        mock: true,
        posts: tempPosts.slice(0, 3), //shows first three fake posts 
    });
}