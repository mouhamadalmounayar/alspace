import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";
import { DEV_CATEGORY } from "./categoriesLogos";
import { getImage } from "./images";
export class BlogHandler {
  private categoriesMap: Map<string, ImageMetadata> = new Map();
  constructor(private post: CollectionEntry<"posts">) {
    this.categoriesMap.set("dev", DEV_CATEGORY);
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
    return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
  };
}
