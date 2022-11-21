module.exports = function site(data) {
  return {
    fonts: [
      'signifier-web-light',
      'Blanco-Regular',
      'Blanco-Medium',
      'Blanco-Italic',
      'pitch-web-semibold',
    ],
    generator: data.eleventy.generator,
  };
};
