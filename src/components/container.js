import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Main = styled('main')`
  color: ${ds.color.primary};
  font-family: ${ds.typography.fontFamily.primary};
  line-height: ${ds.typography.lineHeight.base};
`

class Container extends React.Component {
  render() {
    return <Main>{this.props.children}</Main>
  }
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
