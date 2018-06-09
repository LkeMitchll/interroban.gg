import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  margin-right: ${ds.spacing.small};
`

const Link = styled.a`
  color: ${ds.color.secondary};
`

class InlineList extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.links.map((link, i) => {
          return (
            <ListItem key={i}>
              <Link href={link.url}>{link.description}</Link>
            </ListItem>
          )
        })}
      </Wrapper>
    )
  }
}

InlineList.propTypes = {
  links: PropTypes.array,
}

export default InlineList
