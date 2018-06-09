import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/container'

class Template extends React.Component {
  render() {
    return <Container>{this.props.children()}</Container>
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
