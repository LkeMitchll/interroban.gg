import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import Link from './Link'

class Project extends React.Component {
  render() {
    return (
      <article>
        <Heading as="h4" fontWeight="600" fontSize={2}>
          {this.props.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        <Link
          color="text"
          fontSize={1}
          fontFamily="Space Mono"
          fontWeight="400"
          href={this.props.url}
        >
          Visit {this.props.title}
        </Link>
      </article>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default Project
