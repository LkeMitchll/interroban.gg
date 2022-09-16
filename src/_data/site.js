module.exports = function site(data) {
  return {
    fonts: [
      'signifier-web-light',
      'signifier-web-light-italic',
      'Blanco-Regular',
      'Blanco-Medium',
      'Blanco-Italic',
      'pitch-web-semibold',
    ],
    generator: data.eleventy.generator,
  };
};
