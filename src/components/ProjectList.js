import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

class ProjectList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description.childMarkdownRemark.html}
              url={project.url}
            />
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

ProjectList.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.array,
}

export default ProjectList
