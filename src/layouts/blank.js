import React from 'react'
import PropTypes from 'prop-types'

class Layout extends React.Component {
  render() {
    return <main>{this.props.children}</main>
  }
}

Layout.propTypes = {
  children: PropTypes.array,
}

export default Layout
