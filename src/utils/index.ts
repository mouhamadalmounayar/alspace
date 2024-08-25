import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";
import {
  ALGO_CATEGORY,
  CERT_CATEGORY,
  DEV_CATEGORY,
} from "./categoriesLogos.ts";
import { getImage } from "./images";
export class BlogHandler {
  private categoriesMap: Map<string, ImageMetadata> = new Map();
  constructor(private post: CollectionEntry<"posts">) {
    this.categoriesMap.set("dev", DEV_CATEGORY);
    this.categoriesMap.set("algo", ALGO_CATEGORY);
    this.categoriesMap.set("cert", CERT_CATEGORY);
  }
  getCategoryLogo(): ImageMetadata | undefined {
    const category = this.post.data.category;
    return this.categoriesMap.get(category);
  }

  getImage() {
    const imagePath = this.post.data.image;
    return getImage(imagePath);
  }

  getDateAsString = () => {
    const date = this.post.data.date;
    return (
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    );
  };
}
