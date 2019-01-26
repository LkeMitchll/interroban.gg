import React from 'react'
import Link from './Link'
import styled from '@emotion/styled'
import shared from '../themes/shared'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${shared.space[3]};
`

const Copyright = styled.small`
  font-size: ${shared.fontSizes[1]};
`

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear()
    return (
      <Wrapper>
        <p>
          <Copyright>&copy; {year} Luke Mitchell</Copyright>
        </p>
        <Link
          fontSize={1}
          color="text"
          href="https://github.com/LkeMitchll/interroban.gg"
        >
          Source code
        </Link>
      </Wrapper>
    )
  }
}

export default Footer
