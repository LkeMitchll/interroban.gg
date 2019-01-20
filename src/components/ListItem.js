import styled from '@emotion/styled'
import { color, space } from 'styled-system'

const ListItem = styled.li`
  list-style: none;
  ${space}
  ${color}
`

ListItem.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}

export default ListItem
