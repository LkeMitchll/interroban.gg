module.exports = function starRating(rating) {
  // https://github.com/zactopus/letterboxd
  const scoreToStars = {
    '-1.0': { description: 'None', text: 'None' },
    0.5: { description: 'Half a start', text: '½' },
    '1.0': { description: 'One star', text: '★' },
    1.5: { description: 'One and a half stars', text: '★ ½' },
    '2.0': { description: 'Two stars', text: '★★' },
    2.5: { description: 'Two and a half stars', text: '★★ ½' },
    '3.0': { description: 'Three stars', text: '★★★' },
    3.5: { description: 'Three and a half stars', text: '★★★ ½' },
    '4.0': { description: 'Four stars', text: '★★★★' },
    4.5: { description: 'Four and a half stars', text: '★★★★ ½' },
    '5.0': { description: 'Five stars', text: '★★★★★' },
  };

  const tag = `<span aria-label='${scoreToStars[rating].description}' 
                     title='${scoreToStars[rating].description}'
               >
                ${scoreToStars[rating].text}
               </span>`;

  return tag;
};
