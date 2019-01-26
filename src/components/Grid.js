import styled from '@emotion/styled'
import {
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  space,
} from 'styled-system'
import shared from '../themes/shared'

const Grid = styled.section`
  display: grid;
  grid-gap: ${shared.space[4]};
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridGap};
  ${space}
`

Grid.propTypes = {
  ...gridTemplateColumns.propTypes,
  ...gridTemplateRows.propTypes,
  ...gridGap.propTypes,
  ...space.propTypes,
}

export default Grid
