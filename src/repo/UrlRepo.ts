import connectDB from "@/config/db";
import Url, { IUrl } from "@/models/Url";

export default class UrlRepo {
    private urlModel;
    constructor() {
        connectDB();
        this.urlModel = Url;
    }

    async getUrlById(id: string): Promise<IUrl | null> {
        return await this.urlModel.findById(id).lean();
    }

    async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
        return await this.urlModel.findOne({ shortUrl }).lean();
    }

    async getUrlByOrigianlUrl(originalUrl: string): Promise<IUrl | null> {
        return await this.urlModel.findOne({ originalUrl }).lean();
    }

    async getAllUrls(): Promise<IUrl | null> {
        return this.urlModel.find().lean();
    }

    async deleteUrl(id: string): Promise<IUrl | null> {
        return await this.urlModel.findByIdAndDelete(id).lean();
    }

    async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl> {
        return await this.urlModel.create({ originalUrl, shortUrl })
    }
}