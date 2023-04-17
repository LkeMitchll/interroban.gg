/* eslint no-underscore-dangle: 0 */
const Fetch = require('@11ty/eleventy-fetch');
const convert = require('xml-js');

module.exports = class LetterboxdAPI {
  constructor() {
    this.apiEndpoint = 'https://letterboxd.com/luke_mitchell/rss';
  }

  async getMovies() {
    const feed = await Fetch(this.apiEndpoint, {
      duration: '1d',
      type: 'text',
    }).then((xml) => {
      const result = JSON.parse(
        convert.xml2json(xml, { compact: true, spaces: 2 }),
      );
      return result.rss.channel.item;
    });

    const result = feed.map((item) => {
      const imageURL = item.description._cdata.split('"')[1];
      return {
        title: item['letterboxd:filmTitle']._text,
        year: item['letterboxd:filmYear']._text,
        url: item.link._text,
        rating: item['letterboxd:memberRating']._text,
        poster: imageURL,
      };
    });

    return result;
  }
};
