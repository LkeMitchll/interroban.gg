import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import Anime from 'react-anime'
import BackgroundImage from '../assets/images/bg.svg'

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
    font-family: ${shared.fontFamilies.sans};
    font-weight: 400;
    max-width: 1200px;
    margin: 0 auto;
  }

  body {
    margin-left: ${shared.space[3]};
    margin-right: ${shared.space[3]};
  }
`

const Main = styled.main`
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 60%;
  margin-top: ${shared.space[3]};

  @media (min-width: 840px) {
    background-image: ${props =>
      props.background ? `url(${BackgroundImage})` : 'none'};
  }
`

class Layout extends React.Component {
  render() {
    return (
      <Anime
        direction="normal"
        opacity={[0, 1]}
        easing="easeInOutCirc"
        translateY={['10rem', 0]}
      >
        <Main background={this.props.background}>
          <Global styles={GlobalStyle} />
          {this.props.children}
        </Main>
      </Anime>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object,
  background: PropTypes.bool,
}

export default Layout
