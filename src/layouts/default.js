import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

const GlobalStyle = css`
  body,
  html {
    font-size: 22px;
    font-family: 'Untitled Sans', 'Helvetica Neue', 'Helvetica', 'Arial',
      sans-serif;
  }

  @font-face {
    font-family: 'Untitled Sans';
    src: url('https://d8dqtvdh2kbkr.cloudfront.net/media/fonts/Untitled_Sans_Regular.woff2');
    font-weight: 400;
    font-style: normal;
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
