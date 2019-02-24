import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import InternalLink from './InternalLink'
import Link from './Link'
import shared from '../themes/shared'

class Project extends React.Component {
  render() {
    return (
      <article>
        <Heading as="h4" fontWeight="600" fontSize={2}>
          {this.props.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        {this.props.url.charAt(0) !== '/' && (
          <Link
            color="text"
            fontSize={1}
            fontFamily={shared.fontFamilies.mono}
            fontWeight="400"
            href={this.props.url}
          >
            Visit {this.props.title}
          </Link>
        )}
        {this.props.url.charAt(0) == '/' && (
          <InternalLink
            fontFamily={shared.fontFamilies.mono}
            fontWeight="400"
            fontSize={shared.fontSizes[1]}
            href={this.props.url}
            light
          >
            Visit {this.props.title}
          </InternalLink>
        )}
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
