import React from 'react'
import LogoImage from '../assets/images/logo.svg'
import styled from 'react-emotion'

const Image = styled.img`
  margin-left: auto;
`

class Logo extends React.Component {
  render() {
    return (
      <Image src={LogoImage} />
    )
  }
}

export default Logo
