import styled from '@emotion/styled'
import { color, fontSize } from 'styled-system'

const Link = styled.a`
  font-size: 1rem;
  ${color}
  ${fontSize}
`

Link.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
}

export default Link
