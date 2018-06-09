import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import Heading from './heading'
import DecorativeText from './decorative-text'
import Projects from './projects'
import InlineList from './inline-list'

const Wrapper = styled.section`
  color: ${props => (props.inverted ? ds.color.secondary : ds.color.primary)};
  display: flex;
  flex-direction: ${props => (props.isRowLayout ? 'row' : 'column')};
  font-family: ${props =>
    props.altStyling
      ? ds.typography.fontFamily.secondary
      : ds.typography.fontFamily.primary};
  font-size: ${props =>
    props.altStyling
      ? ds.typography.fontSize.small
      : ds.typography.fontSize.base};
  margin-bottom: ${props => (props.pinBottom ? '0' : ds.spacing.large)};
  margin-top: ${props => (props.pinBottom ? 'auto' : '0')};
  max-width: ${props => (props.isRowLayout ? '100%' : '28em')};
`

class pageSection extends React.Component {
  renderContent() {
    if (this.props.content) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.content.childMarkdownRemark.html,
          }}
        />
      )
    }
  }

  renderProjects() {
    if (this.props.projects) {
      return <Projects projects={this.props.projects} />
    }
  }

  renderLinks() {
    if (this.props.links) {
      return <InlineList links={this.props.links} />
    }
  }

  render() {
    return (
      <Wrapper
        inverted={this.props.inverted}
        pinBottom={this.props.pinBottom}
        altStyling={this.props.altStyling}
        isRowLayout={this.props.isRowLayout}
      >
        <div>
          <Heading level={this.props.level}>
            {this.props.title}
            <DecorativeText> {this.props.decoratedContent}</DecorativeText>
          </Heading>
          {this.renderContent()}
          {this.renderProjects()}
          {this.renderLinks()}
        </div>

        {this.props.children}
      </Wrapper>
    )
  }
}

pageSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  projects: PropTypes.array,
  links: PropTypes.array,
  decoratedContent: PropTypes.string,
  level: PropTypes.string,
  inverted: PropTypes.bool,
  pinBottom: PropTypes.bool,
  altStyling: PropTypes.bool,
  isRowLayout: PropTypes.bool,
  children: PropTypes.node,
}

export default pageSection
