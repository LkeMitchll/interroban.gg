const starRating = (rating) => {
  // https://github.com/zactopus/letterboxd
  const scoreToStars = {
    0.5: { description: "Half a start", text: "½" },
    1: { description: "One star", text: "★" },
    1.5: { description: "One and a half stars", text: "★ ½" },
    2: { description: "Two stars", text: "★★" },
    2.5: { description: "Two and a half stars", text: "★★ ½" },
    3: { description: "Three stars", text: "★★★" },
    3.5: { description: "Three and a half stars", text: "★★★ ½" },
    4: { description: "Four stars", text: "★★★★" },
    4.5: { description: "Four and a half stars", text: "★★★★ ½" },
    5: { description: "Five stars", text: "★★★★★" },
  };

  const tag = `<span aria-label='${scoreToStars[rating].description}'
                     title='${scoreToStars[rating].description}'
               >
                ${scoreToStars[rating].text}
               </span>`;

  return tag;
};

export default starRating;
