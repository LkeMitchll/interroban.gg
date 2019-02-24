import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { Link } from 'gatsby'

const BaseStyles = css`
  color: black;

  &:hover {
    font-style: italic;
    text-decoration: none;
  }
`

const Light = css`
  color: white;
`

const Dark = css`
  color: black;
`

class InternalLink extends React.Component {
  render() {
    const Theme = this.props.light ? Light : Dark
    return (
      <Link
        css={css`
          ${BaseStyles};
          ${Theme};
          font-size: ${this.props.fontSize};
          font-weight: ${this.props.fontWeight};
          font-family: ${this.props.fontFamily};
        `}
        to={this.props.href}
      >
        {this.props.children}
      </Link>
    )
  }
}

InternalLink.propTypes = {
  light: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
}

export default InternalLink
