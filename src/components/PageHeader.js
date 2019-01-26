import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import styled from '@emotion/styled'
import shared from '../themes/shared'

const Wrapper = styled.header`
  padding-top: ${shared.space[5]};
  margin-bottom: ${shared.space[5]};
`

class PageHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <Heading color="text" mb={1}>
          {this.props.title}
        </Heading>
        {this.props.subtitle && (
          <Heading as="h2" color="text">
            {this.props.subtitle}
          </Heading>
        )}
      </Wrapper>
    )
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader
