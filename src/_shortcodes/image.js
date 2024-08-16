import fetch from "@11ty/eleventy-fetch";

const responsiveImage = async (imgUUID, imgAlt, size = "large") => {
  const imgUrl = `https://ucarecdn.com/${imgUUID}`;
  const imgMeta = await fetch(`${imgUrl}/-/json/`, {
    duration: "1h",
    type: "json",
  }).then((response) => response);
  const quality = "smart";
  const fallback = `${imgUrl}/-/resize/800x/quality/${quality}/`;
  const sources = [];

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

  for (const width of viewportWidths[size].widths) {
    const source = `${imgUrl}/-/resize/${width}x/-/grayscale/-/quality/${quality}/-/format/webp/ ${width}w`;
    sources.push(source);
  }

  return `<div class="grayscale-image" data-image-size="${size}">
            <img src="${fallback}"
                 srcset="${sources}"
                 sizes="${viewportWidths[size].sizes}"
                 width="${imgMeta.width}"
                 height="${imgMeta.height}"
                 alt="${imgAlt}" />
          </div>`;
};

export default responsiveImage;
