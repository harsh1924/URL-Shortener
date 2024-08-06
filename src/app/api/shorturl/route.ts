import { URLShortener } from "@/services/UrlShortenerService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { originalUrl } = await request.json();
    const shortenerService = new URLShortener();
    const shortUrl = await shortenerService.shorternUrl(originalUrl);
    return NextResponse.json({
        shortUrl
    }, { status: 201 });
}

export async function GET() {
    const shortenerService = new URLShortener();
    const response = await shortenerService.getAllUrls();
    return NextResponse.json({response})
}