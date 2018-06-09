import React from 'react'
import { css } from 'react-emotion'
import ds from '../assets/design-system'

const styling = css`
  font-size: ${ds.typography.fontSize.base};
  font-weight: ${ds.typography.fontWeight.bold};
  font-variant-caps: small-caps;
  text-transform: lowercase;
  margin-top: '0';
  margin-bottom: ${ds.spacing.base}
`

const largeHeading = css`
  font-size: ${ds.typography.fontSize.large};
  font-variant-caps: unset;
  text-transform: none;
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
      <Tag className={[styling, this.isLargeHeading()].join(' ')}>{this.props.children}</Tag>
    )
  }
}

export default Heading
