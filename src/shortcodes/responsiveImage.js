module.exports = function responsiveImage(imageSrc, size, asObject = false) {
  const imgUrl = imageSrc.fields.file.url;
  const imgWidth = imageSrc.fields.file.details.image.width;
  const imgHeight = imageSrc.fields.file.details.image.height;

  const viewportWidths = {
    threeQuarters: {
      sizes: "(min-width: 800px) 65vw, (min-width: 1600px) 50vw, 90vw",
      widths: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
    },
    half: {
      sizes: "(min-width: 800px) 43vw, (min-width: 1600px) 33vw, 90vw",
      widths: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
    },
    oneCol: {
      sizes: "(min-width: 800px) 20vw, 70vw",
      widths: [400, 600, 800],
    },
  };

  const quality = 90;
  const fallback = `${imgUrl}?w=800&q=${quality}`;
  const sources = [];

  viewportWidths[size].widths.forEach((width) => {
    const source = `${imgUrl}?w=${width}&q=${quality}&fm=webp ${width}w`;
    sources.push(source);
  });

  if (asObject) {
    return {
      src: fallback,
      srcset: sources,
      sizes: `${viewportWidths[size].sizes}`,
      loading: "lazy",
      alt: imageSrc.fields.description,
      width: imgWidth,
      height: imgHeight,
    };
  }

  return `<img src="${fallback}"
               srcset="${sources}"
               sizes="${viewportWidths[size].sizes}"
               loading="lazy"
               alt="${imageSrc.fields.description}"
               width="${imgWidth}"
               height="${imgHeight}" />`;
};
