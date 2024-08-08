'use server'

import { URLShortener } from "@/services/UrlShortenerService";
import { revalidatePath } from "next/cache";

export const shorternUrl = async (formData: FormData) => {
    
    const originalUrl = formData.get('originalUrl') as string;
    const shorternService = new URLShortener();
    const shortUrl = await shorternService.shorternUrl(originalUrl);
    revalidatePath('/urls');
}