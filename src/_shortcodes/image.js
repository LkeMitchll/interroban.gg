import Image from "@11ty/eleventy-img";

const responsiveImage = async (src, alt, size = "large") => {
  const viewportWidths = {
    large: {
      sizes: "(min-width: 1600px) 52.36vw, (min-width: 700px) 67.39vw, 90vw",
      widths: [400, 600, 800, 1000, 1200, 1400],
    },
    small: {
      sizes:
        "(min-width: 2000px) 230px, (min-width: 1040px) calc(3.51vw + 161px), (min-width: 600px) calc(30vw - 46px), (min-width: 400px) 308px, calc(72.5vw + 33px)",
      widths: [400, 600],
    },
  };

  const metadata = await Image(src, {
    widths: viewportWidths[size].widths,
    formats: ["avif", "jpeg"],
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
  });

  const imageAttributes = {
    alt: alt || "",
    sizes: viewportWidths[size].sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
};

export default responsiveImage;
