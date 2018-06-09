import React from 'react'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Inline = styled.span`
  font-family: ${ds.typography.fontFamily.secondary};
  font-weigth: normal;
`

class DecorativeText extends React.Component {
  render() {
    return (
      <Inline>{this.props.children}</Inline>
    )
  }
}

export default DecorativeText
