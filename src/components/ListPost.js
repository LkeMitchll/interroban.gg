import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import Link from './Link'

const Wrapper = styled.li`
  list-style: none;
  margin-bottom: ${shared.space[3]};
  grid-column: 2;
`

const MetaWrapper = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

const Meta = styled.p`
  font-family: 'Space Mono';
  font-size: ${shared.fontSizes[1]};
  margin-right: ${shared.space[1]};

  @media (max-width: 400px) {
    margin-top: 0;
    margin-bottom: 0;

    &:first-of-type {
      margin-top: ${shared.space[1]};
    }
  }
`

class ListPost extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link href={this.props.url} color="text">
          {this.props.title}
        </Link>
        <MetaWrapper>
          <Meta>{this.props.tag}</Meta>
          <Meta style={{ opacity: '0.5' }}>({this.props.publishDate})</Meta>
        </MetaWrapper>
      </Wrapper>
    )
  }
}

ListPost.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  tag: PropTypes.string,
  publishDate: PropTypes.string,
}

export default ListPost
