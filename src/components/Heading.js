import styled from '@emotion/styled'
import { color, space } from 'styled-system'

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 0;
  ${color}
  ${space}
`

Heading.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
}

export default Heading
