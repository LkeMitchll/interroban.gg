import { Asset } from "services/contentful.types";

export function ImageSrc(image: Asset, type: "jpg" | "webp"): any {
  const breakpoints = [400, 600, 800, 1000, 1600, 2000];
  const set = breakpoints.map((breakpoint) => {
    return `${image.url}?w=${breakpoint}&fm=${type}&q=90 ${breakpoint}w`;
  });
  return set.join();
}

export const ImageSizes = {
  fullWidth: "(min-width: 1600px) 70vw, 90vw",
  SixtyPercent: "(min-width: 800px) 65vw, 90vw",
  quarter: "(min-width: 800px) 20vw, 70vw",
};
