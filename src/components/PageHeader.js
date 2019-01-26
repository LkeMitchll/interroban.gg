import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import Anime from 'react-anime'
import Link from './Link'

const Wrapper = styled.header`
  padding-top: ${shared.space[5]};
  margin-bottom: ${shared.space[5]};
  top: 0;
`

class PageHeader extends React.Component {
  render() {
    return (
      <Anime
        direction="reverse"
        delay={(e, i) => i * 100}
        opacity="0"
        translateY="5rem"
      >
        <Wrapper>
          <Heading color="text" mb={1}>
            {this.props.title}
          </Heading>
          {this.props.subtitle && (
            <Heading as="h2" color="text">
              {this.props.subtitle}
            </Heading>
          )}
          {!this.props.subtitle && (
            <Link
              href="/"
              color="text"
              fontFamily="Space Mono"
              fontSize={shared.fontSizes[2]}
            >
              Back
            </Link>
          )}
        </Wrapper>
      </Anime>
    )
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default PageHeader
