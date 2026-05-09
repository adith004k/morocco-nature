import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://morocco-nature.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://morocco-nature.vercel.app/services",
            lastModified: new Date(),
        },
        {
            url: "https://morocco-nature.vercel.app/bridal",
            lastModified: new Date(),
        },
        {
            url: "https://morocco-nature.vercel.app/gallery",
            lastModified: new Date(),
        },
        {
            url: "https://morocco-nature.vercel.app/contact",
            lastModified: new Date(),
        },
    ];
}