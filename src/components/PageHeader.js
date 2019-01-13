import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'

class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <Heading color="text">{this.props.title}</Heading>
        <Heading as="h2" color="text">
          {this.props.subtitle}
        </Heading>
      </header>
    )
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader
