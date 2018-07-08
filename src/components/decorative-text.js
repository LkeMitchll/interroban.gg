import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Inline = styled.span`
  font-family: ${ds.typography.fontFamily.secondary};
  font-weight: normal;
`

class DecorativeText extends React.Component {
  render() {
    return <Inline>{this.props.children}</Inline>
  }
}

DecorativeText.propTypes = {
  children: PropTypes.node,
}

export default DecorativeText
