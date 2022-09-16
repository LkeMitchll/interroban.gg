const fetch = require('@11ty/eleventy-fetch');

module.exports = async function responsiveImage(
  imgUUID,
  imgAlt,
  size = 'large',
) {
  const imgUrl = `https://ucarecdn.com/${imgUUID}`;
  const imgMeta = await fetch(`${imgUrl}/-/json/`, { type: 'json' }).then(
    (response) => response,
  );
  const quality = 'smart';
  const fallback = `${imgUrl}/-/resize/800x/quality/${quality}/`;
  const sources = [];

  const viewportWidths = {
    large: {
      sizes: '(min-width: 800px) 65vw, (min-width: 1600px) 50vw, 90vw',
      widths: [400, 600, 800, 1000, 1200, 1400],
    },
    small: {
      sizes: '(min-width: 800px) 14vw, 35vw',
      widths: [400, 600],
    },
  };

  viewportWidths[size].widths.forEach((width) => {
    const source = `${imgUrl}/-/resize/${width}x/-/grayscale/-/quality/${quality}/-/format/webp/ ${width}w`;
    sources.push(source);
  });

  return `<div class="grayscale-image" data-image-size="${size}">
            <img src="${fallback}"
                 srcset="${sources}"
                 sizes="${viewportWidths[size].sizes}"
                 loading="lazy"
                 width="${imgMeta.width}"
                 height="${imgMeta.height}"
                 alt="${imgAlt}" />
          </div>`;
};
