import styled from '@emotion/styled'
import { color, fontSize, fontFamily } from 'styled-system'

const Link = styled.a`
  font-size: 1rem;
  ${color}
  ${fontSize}
  ${fontFamily}

  &:hover {
    font-style: ${props => (props.fontFamily ? 'italic' : 'normal')};
  }
`

Link.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
}

export default Link
