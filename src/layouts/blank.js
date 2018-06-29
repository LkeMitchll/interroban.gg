import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/container'

class Layout extends React.Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
