import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import shared from '../themes/shared'

const GlobalStyle = css`
  @font-face {
    font-family: 'Untitled Sans';
    src: url('https://d8dqtvdh2kbkr.cloudfront.net/media/fonts/Untitled_Sans_Regular.woff2');
    font-weight: 400;
    font-style: normal;
  }

  body,
  html {
    font-size: 22px;
    font-family: 'Untitled Sans', 'Helvetica Neue', 'Helvetica', 'Arial',
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
