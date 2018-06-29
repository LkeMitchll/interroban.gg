import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/container'
import GlobalAside from '../components/global-aside'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const ContentWrapper = styled.section`
  padding: ${ds.spacing.large};

  @media (max-width: ${ds.breakpoint.small}) {
    padding: ${ds.spacing.small};
  }

  @media (max-width: ${ds.breakpoint.medium}) {
    padding: ${ds.spacing.base};
  }
`

class Layout extends React.Component {
  render() {
    return (
      <Container>
        <GlobalAside />
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </Container>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
