import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import Anime from 'react-anime'
import Link from './Link'
import ListItem from './ListItem'

const Wrapper = styled.ul`
  padding: 0;
  margin-bottom: ${shared.space[5]};
`

const ListItemPositions = [['0', '25%'], '0', ['0', '25%'], ['0', '50%']]

class SocialMediaLinkList extends React.Component {
  render() {
    return (
      <Wrapper>
        <Anime
          direction="normal"
          delay={(e, i) => i * 300}
          opacity={[0, 1]}
          translateY={["5rem", "0"]}
        >
          {this.props.links.map((link, i) => (
            <ListItem key={link.id} ml={ListItemPositions[i]} mb={3}>
              <Link color="text" fontSize={3} href={link.url}>
                {link.description}
              </Link>
            </ListItem>
          ))}
        </Anime>
      </Wrapper>
    )
  }
}

SocialMediaLinkList.propTypes = {
  links: PropTypes.array,
}

export default SocialMediaLinkList
