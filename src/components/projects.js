import React from 'react'
import Heading from './heading'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import linkCursor from '../assets/images/link_cursor.svg'

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Project = styled.li`
  margin-bottom: ${ds.spacing.large};
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.6;
  }

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

const Link = styled.a`
  text-decoration: none;

  &:hover {
    cursor: url(${linkCursor}), auto;
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
            <Project key={i}>
              <Link href={project.url} target="_blank">
                <Heading level="3" large>{i+1} &mdash;</Heading>
                <Content dangerouslySetInnerHTML={{
                  __html: project.description.childMarkdownRemark.html,
                }}/>
                <Heading level="3" large>{project.title}</Heading>
              </Link>
            </Project>
          )
        })}
      </Wrapper>
    )
  }
}

export default Projects
