import UrlRepo from "@/repo/UrlRepo";
import shortId from 'shortid'

export class URLShortener {
    private urlRepo;
    constructor() {
        this.urlRepo = new UrlRepo();
    }

    async shorternUrl(originalUrl: string): Promise<string> {
        let url = await this.urlRepo.getUrlByOrigianlUrl(originalUrl);
        if (url) {
            return url.shortUrl;
        }

        let shortUrl = shortId();
        url = await this.urlRepo.getUrlByShortUrl(shortUrl);
        while (url) {
            shortUrl = shortId();
            url = await this.urlRepo.getUrlByShortUrl(shortUrl);
        }

        await this.urlRepo.createUrl(originalUrl, shortUrl);
        return shortUrl;
    }

    async getAllUrls() {
        return await this.urlRepo.getAllUrls();
    }

    async getUrlByShortUrl(shortUrl: string) {
        return await this.urlRepo.getUrlByShortUrl(shortUrl);
    }

    
}