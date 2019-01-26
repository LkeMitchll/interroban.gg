import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import Link from './Link'
import ListItem from './ListItem'

const Wrapper = styled.ul`
  padding: 0;
  margin-bottom: ${shared.space[5]};
`

const ListItemPositions = ['25%', '0', '25%', '50%']

class SocialMediaLinkList extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.links.map((link, i) => (
          <ListItem key={link.id} ml={ListItemPositions[i]} mb={3}>
            <Link color="text" fontSize={3} href={link.url}>
              {link.description}
            </Link>
          </ListItem>
        ))}
      </Wrapper>
    )
  }
}

SocialMediaLinkList.propTypes = {
  links: PropTypes.array,
}

export default SocialMediaLinkList
