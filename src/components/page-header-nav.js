import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import ds from '../assets/design-system'
import anime from 'animejs'

const navLink = css`
  background-color: rgba(1, 1, 1, 0.1);
  display: inline-block;
  font-family: ${ds.typography.fontFamily.secondary};
  overflow: hidden;
  padding: 5px 8px 3px;
  text-decoration: none;
`

const Heading = styled.h2`
  display: inline-block;
  transition: background-color 0.25s ease;
  margin: 0;
`

const linkText = css`
  text-decoration: underline;
`

class PageHeaderNav extends React.Component {
  constructor(props) {
    super(props)

    this.buttonHover = this.buttonHover.bind(this)
    this.buttonRestore = this.buttonRestore.bind(this)

    this.state = {
      buttonText: this.props.title,
    }
  }

  buttonAnimation(text) {
    var timeline = anime.timeline({
      targets: '*[data-link-content]',
      easing: 'easeOutExpo',
      duration: 400,
    })

    var animation = new Promise(function(resolve) {
      timeline
        .add({ translateY: -30, opacity: 0 })
        .add({ translateY: 20, duration: 1 })
        .finished(resolve())
    }).then(() => {
      this.setState({ buttonText: text })
      timeline.add({ opacity: 1, duration: 1 }).add({ translateY: 0 })
    })

    return animation
  }

  buttonHover() {
    this.buttonAnimation('Home')
  }

  buttonRestore() {
    this.buttonAnimation(this.props.title)
  }

  render() {
    return (
      <Link
        className={navLink}
        to="/"
        onMouseEnter={this.buttonHover}
        onMouseLeave={this.buttonRestore}
      >
        <span aria-hidden="true">&larr; / </span>
        <Heading data-link-content className={linkText}>
          {this.state.buttonText}
        </Heading>
      </Link>
    )
  }
}

PageHeaderNav.propTypes = {
  title: PropTypes.string,
}

export default PageHeaderNav
