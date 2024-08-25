import darkBlueYellow from "../images/dark-blue-yellow.png";
import darkEllipseMulti from "../images/dark-ellipse-multi.png";
import darkWavyBlue from "../images/dark-wavy-blue.png";
import darkPurpleO from "../images/dark-purple-o.png";
import darkPurpleF from "../images/dark-purple-f.png";
import darkMultiC from "../images/dark-multi-c.png";
import darkMultiV from "../images/dark-multi-f.png";
import darkBlueC from "../images/dark-blue-c.png";

import type { ImageMetadata } from "astro";

export const imagesMap = new Map<string, ImageMetadata>([
  ["dark-blue-yellow", darkBlueYellow],
  ["dark-wavy-blue", darkWavyBlue],
  ["dark-ellipse-multi", darkEllipseMulti],
  ["dark-multi-c", darkMultiC],
  ["dark-multi-f", darkMultiV],
  ["dark-purple-f", darkPurpleF],
  ["dark-purple-o", darkPurpleO],
  ["dark-blue-c", darkBlueC],
]);

export function getImage(path: string) {
  return imagesMap.get(path);
}
