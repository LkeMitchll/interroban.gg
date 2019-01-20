import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import shared from '../themes/shared'

const GlobalStyle = css`
  @font-face {
    font-family: 'Space Grotesk';
    src: url('https://s3.eu-west-2.amazonaws.com/interrobang-fonts/SpaceGrotesk-Regular.woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url('https://s3.eu-west-2.amazonaws.com/interrobang-fonts/SpaceGrotesk-SemiBold.woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url('https://s3.eu-west-2.amazonaws.com/interrobang-fonts/SpaceMono-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url('https://s3.eu-west-2.amazonaws.com/interrobang-fonts/SpaceMono-Italic.ttf');
    font-weight: 400;
    font-style: italic;
  }

  body,
  html {
    font-size: 22px;
    font-family: 'Space Grotesk', 'Helvetica Neue', 'Helvetica', 'Arial',
      sans-serif;
    font-weight: 400;
    max-width: 1280px;
    margin: 0 auto;
  }

  body {
    margin-left: ${shared.space[3]};
    margin-right: ${shared.space[3]};
  }
`

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={GlobalStyle} />
        {this.props.children}
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
