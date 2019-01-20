import styled from '@emotion/styled'
import { gridTemplateColumns, gridTemplateRows } from 'styled-system'
import shared from '../themes/shared'

const Grid = styled.section`
  display: grid;
  grid-gap: ${shared.space[3]};
  ${gridTemplateColumns}
  ${gridTemplateRows}
`

Grid.propTypes = {
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
}

export default Grid
