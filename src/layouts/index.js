import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/container'
import GlobalAside from '../components/global-aside'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${ds.spacing.small};

  @media (max-width: ${ds.breakpoint.small}) {
    padding: ${ds.spacing.small};
  }

  @media (min-width: ${ds.breakpoint.tablet}) {
    padding: ${ds.spacing.base};
  }

  @media (min-width: ${ds.breakpoint.medium}) {
    padding: ${ds.spacing.large};
  }
`

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <GlobalAside dynamicContent={this.props.globalAsideContent} />
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </Container>
    )
  }
}

Layout.propTypes = {
  globalAsideContent: PropTypes.object,
  children: PropTypes.node,
}

export default Layout
