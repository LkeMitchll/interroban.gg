import React from 'react'
import PropTypes from 'prop-types'

class Project extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        <a href={this.props.url}>Visit {this.props.title}</a>
      </div>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

export default Project
