import React from 'react'
import PropTypes from 'prop-types'
import GatsbyLink from 'gatsby-link'
import linkCursor from '../assets/images/link_cursor.svg'
import styled, { css } from 'react-emotion'

const ExternalLink = styled.a`
  text-decoration: none;

  &:hover {
    cursor: url(${linkCursor}), auto;
  }
`

const InternalLink = css`
  text-decoration: none;
`

const Link = ({ children, to }) => {
  const internal = /^\/(?!\/)/.test(to)

  // Use gatsby-link for internal, and <a> for others
  if (internal) {
    return (
      <GatsbyLink className={InternalLink} to={to}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <ExternalLink href={to} target="_blank">
      {children}
    </ExternalLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default Link
