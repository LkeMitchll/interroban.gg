import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import ds from '../assets/design-system'

const styling = css`
  font-size: ${ds.typography.fontSize.base};
  font-weight: ${ds.typography.fontWeight.bold};
  margin-top: 0;
  margin-bottom: ${ds.spacing.small};
`

const largeHeading = css`
  font-size: ${ds.typography.fontSize.large};
`

class Heading extends React.Component {
  isLargeHeading() {
    if (this.props.large) {
      return largeHeading
    }
  }

  render() {
    const Tag = `h${this.props.level}`
    return (
      <Tag className={[styling, this.isLargeHeading()].join(' ')}>
        {this.props.children}
      </Tag>
    )
  }
}

Heading.propTypes = {
  large: PropTypes.bool,
  level: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Heading
