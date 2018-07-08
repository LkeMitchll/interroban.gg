import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ReactCursorPosition from 'react-cursor-position'
import linkCursor from '../assets/images/link_cursor.svg'
import styled, { css } from 'react-emotion'
import ds from '../assets/design-system'

const ExternalLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${ds.color.primary};
  transition: filter 0.25s linear;

  @media (min-width: ${ds.breakpoint.small}) {
    &:hover {
      cursor: url(${linkCursor}), auto;
      filter: blur(5px);
    }
  }
`

const InternalLink = css`
  display: block;
  text-decoration: none;
  transition: filter 0.25s linear;

  @media (min-width: ${ds.breakpoint.small}) {
    &:hover {
      cursor: none;
      filter: blur(5px);
    }
  }
`

const Cursor = styled.div`
  font-family: ${ds.typography.fontFamily.secondary};
  font-size: ${ds.typography.fontSize.large};
  position: absolute;

  @media (max-width: ${ds.breakpoint.small}) {
    display: none !important;
  }
`

class ProjectLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPositionOutside: true,
      position: {
        x: 0,
        y: 0,
      },
    }
  }

  renderLink() {
    const internal = /^\/(?!\/)/.test(this.props.to)

    if (internal) {
      return (
        <ReactCursorPosition
          {...{
            onPositionChanged: props => this.setState(props),
          }}
        >
          <React.Fragment>
            <Link className={InternalLink} to={this.props.to}>
              {this.props.children}
            </Link>
            <Cursor
              style={{
                top: this.state.position.y - 70,
                left: this.state.position.x - 60,
                display: this.state.isPositionOutside ? 'none' : 'block',
              }}
            >
              {this.props.to}
            </Cursor>
          </React.Fragment>
        </ReactCursorPosition>
      )
    } else {
      return (
        <ExternalLink href={this.props.to} target="_blank">
          {this.props.children}
        </ExternalLink>
      )
    }
  }
  render() {
    return <React.Fragment>{this.renderLink()}</React.Fragment>
  }
}

ProjectLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default ProjectLink
