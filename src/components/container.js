import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Main = styled.main`
  color: ${ds.color.primary};
  display: grid;
  font-family: ${ds.typography.fontFamily.primary};
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  line-height: ${ds.typography.lineHeight.base};

  @media (max-width: ${ds.breakpoint.medium}) {
    grid-template-columns: 100%;
  }
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
