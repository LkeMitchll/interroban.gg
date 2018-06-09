import { injectGlobal } from 'emotion'

import tiemposTextReg_eot from './fonts/TiemposTextWeb-Regular.eot'
import tiemposTextReg_woff from './fonts/TiemposTextWeb-Regular.woff'
import tiemposTextReg_woff2 from './fonts/TiemposTextWeb-Regular.woff2'
import tiemposTextSemi_eot from './fonts/TiemposTextWeb-Semibold.eot'
import tiemposTextSemi_woff from './fonts/TiemposTextWeb-Semibold.woff'
import tiemposTextSemi_woff2 from './fonts/TiemposTextWeb-Semibold.woff2'
import courierPrimeMedium_ttf from './fonts/CourierPrime-Medium.ttf'
import courierPrimeMedium_eot from './fonts/CourierPrime-Medium.eot'
import courierPrimeMedium_woff from './fonts/CourierPrime-Medium.woff'

const ds = {
  color: {
    primary: '#4a4a4a',
    secondary: '#ffffff'
  },
  typography: {
    fontFamily: {
      primary: "'Tiempos Text', Times New Roman, serif",
      secondary: "'Courier Prime', Courier, Monaco, monospace"
    },
    fontWeight: {
      normal: "400",
      bold: "600"
    },
    fontSize: {
      base: '1rem',
      small: '0.875rem',
      large: '2rem'
    },
    lineHeight: {
      base: '1.5'
    }
  },
  spacing: {
    base: '2rem',
    large: '4rem',
    small: '1.5rem'
  }
}

injectGlobal`
  @font-face {
    font-family: "Tiempos Text";
    font-style: normal;
    font-weight: 400;
    src: url("${tiemposTextReg_eot}");
    src:
      url("${tiemposTextReg_eot}?#iefix") format("embedded-opentype"),
      url("${tiemposTextReg_woff2}") format("woff2"),
      url("${tiemposTextReg_woff}") format("woff");
  }

  @font-face {
    font-family: "Tiempos Text";
    font-style: normal;
    font-weight: 600;
    src: url("${tiemposTextSemi_eot}");
    src:
      url("${tiemposTextSemi_eot}?#iefix") format("embedded-opentype"),
      url("${tiemposTextSemi_woff2}") format("woff2"),
      url("${tiemposTextSemi_woff}") format("woff");
  }

  @font-face {
    font-family: "Courier Prime";
    font-style: normal;
    font-weight: normal;
    src: url("${courierPrimeMedium_eot}");
    src:
      url("${courierPrimeMedium_eot}?#iefix") format("embedded-opentype"),
      url("${courierPrimeMedium_woff}") format("woff"),
      url("${courierPrimeMedium_ttf}") format("truetype");
  }

  html {
    font-size: 20px;
    padding: ${ds.spacing.small};
  }

  h1,
  h2,
  h3 {
    font-size: ${ds.typography.fontSize.base};
  }

  p {
    margin-top: 0;
    margin-bottom: ${ds.spacing.base};
  }

  a {
    color: ${ds.color.primary};
  }
`

export default ds
