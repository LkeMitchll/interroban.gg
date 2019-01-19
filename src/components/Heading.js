import styled from '@emotion/styled'
import { color, space } from 'styled-system'

export const Heading = styled.h1`
  font-family: 'Untitled Sans', 'Helvetica Neue', 'Helvetica', 'Arial',
    sans-serif;
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
