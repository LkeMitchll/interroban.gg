import React from 'react'
import PropTypes from 'prop-types'
import Heading from './heading'
import ProjectLink from './project-link'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Project = styled.li`
  margin-bottom: ${ds.spacing.large};
  transition: filter 0.25s linear;
  position: relative;

  &:nth-of-type(2) {
    margin-bottom: 0;
    margin-left: 3rem;
    margin-top: 9.1rem;
  }

  &:nth-of-type(3) {
    grid-column: 1 / span 2;
    margin-bottom: 1rem;
    margin-left: 6rem;
  }
`
const Content = styled.div`
  margin-bottom: ${ds.spacing.small};
  max-width: 12em;
`

class Projects extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.projects.map((project, i) => {
          return (
            <React.Fragment key={i}>
              <Project key={i}>
                <ProjectLink to={project.url}>
                  <Heading level="3" large>
                    {i + 1} &mdash;
                  </Heading>
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: project.description.childMarkdownRemark.html,
                    }}
                  />
                  <Heading level="3" large>
                    {project.title}
                  </Heading>
                </ProjectLink>
              </Project>
            </React.Fragment>
          )
        })}
      </Wrapper>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
}

export default Projects
