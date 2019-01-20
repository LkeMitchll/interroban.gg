import styled from '@emotion/styled'
import { color, space, fontSize, fontWeight } from 'styled-system'

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 0;
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
`

Heading.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
}

export default Heading
