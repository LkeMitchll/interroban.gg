const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const importPlugin = require("postcss-import");
const autoprefixerPlugin = require("autoprefixer");
const nanoPlugin = require("cssnano");

const fileName = "./css/style.css";

module.exports = class Style {
  async data() {
    this.rawFilepath = path.join(__dirname, fileName);
    return {
      permalink: `${fileName}`,
      rawFilepath: this.rawFilepath,
      rawCss: fs.readFileSync(this.rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    this.rawCss = rawCss;
    this.rawFilepath = rawFilepath;

    return postcss([importPlugin, autoprefixerPlugin, nanoPlugin])
      .process(this.rawCss, { from: this.rawFilepath })
      .then((result) => result.css);
  }
};
