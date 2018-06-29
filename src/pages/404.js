import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/blank'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const Wrapper = styled.section`
  max-width: 30em;
  margin: 0 auto;
  text-align: center;
  font-family: ${ds.typography.fontFamily.secondary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class FourOhFour extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Interrobang - 404</title>
        </Helmet>
        <Wrapper>
          <h1>404</h1>
          <h2>[ This page has been intentionally left blank ]</h2>
          <Link to="/">Home</Link>
        </Wrapper>
      </Layout>
    )
  }
}

export default FourOhFour
