import React from 'react'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import Heading from './heading'

const Wrapper = styled('section')`
  margin-bottom: ${ds.spacing.large};
  color: ${props => props.inverted ? ds.color.secondary : ds.color.primary};
`

class pageSection extends React.Component {
  renderContent () {
    if (this.props.content) {
      return (
        <div dangerouslySetInnerHTML={{
          __html: this.props.content.childMarkdownRemark.html,
        }}/>
      )
    }
  }

  renderProjects () {
    if (this.props.projects) {
      return (
        <ul>
          {this.props.projects.map((project, i) => {
            return (
              <li key={i}>
                <Heading level="3" large>{i+1}&mdash;</Heading>
                <div dangerouslySetInnerHTML={{
                  __html: project.description.childMarkdownRemark.html,
                }}/>
                <Heading level="3" large>{project.title}</Heading>
              </li>
            )
          })}
        </ul>
      )
    }
  }

  renderLinks () {
    if (this.props.links) {
      return (
        <ul>
          {this.props.links.map((link, i) => {
            return (
              <li key={i}><a href={link.url}>{link.description}</a></li>
            )
          })}
        </ul>
      )
    }
  }

  render() {
    return (
      <Wrapper inverted={this.props.inverted}>
        <Heading level="2">{this.props.title}</Heading>
        {this.renderContent()}
        {this.renderProjects()}
        {this.renderLinks()}
      </Wrapper>
    )
  }
}

export default pageSection
