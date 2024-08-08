import { URLShortener } from "@/services/UrlShortenerService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { originalUrl } = await request.json();
        const shortenerService = new URLShortener();
        const shortUrl = await shortenerService.shorternUrl(originalUrl);
        return NextResponse.json({
            shortUrl
        }, { status: 201 });
    } catch (error: any) { 
        return NextResponse.json({
            error: error.message
        }, { status: 400 });
    }
}