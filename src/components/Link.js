import styled from '@emotion/styled'
import { color, fontSize, fontFamily, display, space } from 'styled-system'

const Link = styled.a`
  font-size: 1rem;
  ${color}
  ${fontSize}
  ${fontFamily}
  ${display}
  ${space}

  &:hover {
    font-style: ${props => (props.fontFamily ? 'italic' : 'normal')};
    text-decoration: none;
  }
`

Link.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...display.propTypes,
  ...space.propTypes,
}

export default Link
