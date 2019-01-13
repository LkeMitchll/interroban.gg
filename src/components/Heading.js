import styled from '@emotion/styled'
import { color } from 'styled-system'

export const Heading = styled.h1`
  font-size: 2rem;
  ${color}
`

Heading.propTypes = {
  ...color.propTypes,
}

export default Heading
