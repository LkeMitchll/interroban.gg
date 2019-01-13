import styled from '@emotion/styled'
import { gridTemplateColumns, gridTemplateRows } from 'styled-system'

const Grid = styled.section`
  display: grid;
  grid-gap: 1rem;
  ${gridTemplateColumns}
  ${gridTemplateRows}
`

Grid.propTypes = {
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
}

export default Grid
