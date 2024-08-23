import type { ImageMetadata } from "astro";
import { DEV_CATEGORY } from "./categoriesLogos";
import { imagesArray } from "./images";
export class BlogHandler {
  private categoriesMap: Map<string, ImageMetadata> = new Map();
  constructor() {
    this.categoriesMap.set("dev", DEV_CATEGORY);
  }
  getGradient(): ImageMetadata {
    return imagesArray[0];
  }
  getCategoryLogo(category: string): ImageMetadata | undefined {
    return this.categoriesMap.get(category);
  }
}
