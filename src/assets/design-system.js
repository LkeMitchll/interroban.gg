import { injectGlobal } from 'emotion'

const ds = {
  color: {
    primary: '#4a4a4a',
    secondary: '#ffffff',
  },
  typography: {
    fontFamily: {
      primary: "'Tiempos Text', Times New Roman, serif",
      secondary: "'Courier Prime', Courier, Monaco, monospace",
    },
    fontWeight: {
      normal: '400',
      bold: '600',
    },
    fontSize: {
      base: '1rem',
      small: '0.875rem',
      large: '2rem',
    },
    lineHeight: {
      base: '1.5',
    },
  },
  spacing: {
    base: '2rem',
    large: '4rem',
    small: '1.5rem',
    xsmall: '0.7rem',
  },
  breakpoint: {
    tiny: '414px',
    small: '700px',
    tablet: '1024px',
    medium: '1400px',
  },
}

injectGlobal`
  @font-face {
    font-family: "Tiempos Text";
    font-weight: 400;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.woff2") format("woff2"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Tiempos Text";
    font-weight: 600;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.woff2") format("woff2"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/TiemposTextWeb-Semibold.woff") format("woff");
  }

  @font-face {
    font-family: "Courier Prime";
    font-style: normal;
    font-weight: normal;
    src: url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.eot");
    src:
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.eot?#iefix") format("embedded-opentype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.woff") format("woff"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.ttf") format("truetype"),
      url("https://s3.eu-west-2.amazonaws.com/interrobang-fonts/CourierPrime-Medium.svg") format("svg");
  }


  ::selection {
    background: yellow;
    color: black;
  }

  ::-moz-selection {
    background: yellow;
    color: black;
  }

  html {
    font-size: 20px;
    padding: ${ds.spacing.small};

    @media (max-width: ${ds.breakpoint.tiny}) {
      font-size: 12px;
    }

    @media (min-width: ${ds.breakpoint.tiny}) and (max-width: ${ds.breakpoint.small}) {
      font-size: 16px;
    }

    @media (min-width: ${ds.breakpoint.small}) and (max-width: ${ds.breakpoint.medium}) {
      font-size: 18px;
    }
  }

  html,
  body {
    @media (max-width: ${ds.breakpoint.small}) {
      margin: 0;
      padding: 0;
    }
  }

  body {
    margin: 0;
  }

  h1,
  h2,
  h3 {
    font-size: ${ds.typography.fontSize.base};
  }

  p {
    margin-top: 0;
    margin-bottom: ${ds.spacing.small};

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    color: ${ds.color.primary};
  }

  .tippy-tooltip {
    font-family: ${ds.typography.fontFamily.secondary};
    font-size: ${ds.typography.fontSize.large};
  }
`

export default ds
