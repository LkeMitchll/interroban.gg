import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Main = styled.main`
  color: ${ds.color.primary};
  display: grid;
  font-family: ${ds.typography.fontFamily.primary};
  line-height: ${ds.typography.lineHeight.base};
  max-width: 2000px;

  @media (min-width: ${ds.breakpoint.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
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
