import path from "node:path";
import Image from "@11ty/eleventy-img";

const responsiveImage = async (src, alt, size = "large") => {
  // Size presets with widths and responsive sizes attribute
  const sizePresets = {
    large: {
      widths: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400],
      sizes: "(min-width: 1600px) 52.36vw, (min-width: 700px) 67.39vw, 90vw"
    },
    small: {
      widths: [400, 600, 800, 1000, 1200, 1400],
      sizes: "(min-width: 2000px) 230px, (min-width: 1040px) calc(3.51vw + 161px), (min-width: 600px) calc(30vw - 46px), (min-width: 400px) 308px, calc(72.5vw + 33px)"
    }
  };

  const preset = sizePresets[size];
  const inputPath = path.join("src/assets/images/source", src);

  // Generate images
  const metadata = await Image(inputPath, {
    formats: ["webp"],
    widths: preset.widths,
    outputDir: "./_site/assets/images/optimised/",
    urlPath: "/assets/images/optimised/",
    sharpWebpOptions: {
      quality: 70,
      effort: 4
    },
    transform: (sharp) => {
      sharp.grayscale();
    }
  });

  // Get WebP metadata
  const webpMetadata = metadata.webp;
  // Build srcset string
  const srcset = webpMetadata.map(img => `${img.url} ${img.width}w`).join(", ");
  // Use the largest image for width/height dimensions
  const largestImage = webpMetadata[webpMetadata.length - 1];
  // Get fallback src (smallest image)
  const fallbackSrc = webpMetadata[0].url;

  // Generate custom HTML with div wrapper
  return `<div class="image" data-image-size="${size}">
            <img src="${fallbackSrc}"
                 srcset="${srcset}"
                 sizes="${preset.sizes}"
                 width="${largestImage.width}"
                 height="${largestImage.height}"
                 alt="${alt}"
                 loading="lazy"
                 decoding="async" />
          </div>`;
};

export default responsiveImage;
