import React from 'react'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Container = styled('main')`
  color: ${ds.color.primary};
  font-family: ${ds.typography.fontFamily.primary};
  line-height: ${ds.typography.lineHeight.base};
`

export default ({ children }) => (
  <Container>{children}</Container>
)
