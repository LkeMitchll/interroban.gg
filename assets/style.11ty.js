const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const fileName = "./style.css";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, fileName);
    return {
      permalink: `assets/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss([
      require("postcss-import"),
      require("autoprefixer"),
      require("cssnano"),
    ])
      .process(rawCss, { from: rawFilepath })
      .then((result) => result.css);
  }
};
