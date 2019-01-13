import React from 'react'
import PropTypes from 'prop-types'

class SocialMediaLinkList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.links.map(link => (
          <li key={link.id}>
            <a href={link.url}>{link.description}</a>
          </li>
        ))}
      </ul>
    )
  }
}

SocialMediaLinkList.propTypes = {
  links: PropTypes.array,
}

export default SocialMediaLinkList
