import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  padding: 0 0 ${ds.spacing.small};
`

const Date = styled.time`
  font-family: ${ds.typography.fontFamily.secondary};
  margin-right: ${ds.spacing.small};
  opacity: 0.7;
`

const Content = styled.a`
  font-family: ${ds.typography.fontFamily.secondary};
`

const Tag = styled.p`
  display: inline-block;
  font-family: ${ds.typography.fontFamily.secondary};
  margin-left: auto;
  opacity: 0.5;
`

class BlogPost extends React.Component {
  formattedDate() {
    var a = moment(this.props.date)
    return a.format('DD MMM YY')
  }

  render() {
    return (
      <Wrapper>
        <Date dateTime={this.props.date}>{this.formattedDate()}</Date>
        <Content href={this.props.url} target="_blank">
          {this.props.title}
        </Content>
        <Tag>{this.props.tags[0]}</Tag>
      </Wrapper>
    )
  }
}

BlogPost.propTypes = {
  date: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
}

export default BlogPost
