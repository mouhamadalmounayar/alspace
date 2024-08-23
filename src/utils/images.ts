import darkBlueYellow from "../images/dark-blue-yellow.png";
import darkBlue from "../images/dark-blue.png";
import type { ImageMetadata } from "astro";

export const imagesMap = new Map<string, ImageMetadata>([
  ["dark-blue-yellow", darkBlueYellow],
  ["dark-blue", darkBlue],
]);

export function getImage(path: string) {
  return imagesMap.get(path);
}
