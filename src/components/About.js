import React from 'react'
import styled from '@emotion/styled'
import shared from '../themes/shared'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes/dark'
import Heading from './Heading'
import Grid from './Grid'
import Link from './Link'

const Footnote = styled.small`
  font-family: ${shared.fontFamilies.mono};
  font-size: ${shared.fontSizes[1]};
  margin-bottom: ${shared.space[1]};
  display: block;
`

const Content = styled.p`
  line-height: 1.5;
`

class About extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Heading mb={4}>About</Heading>
        <Grid mb={5} gridTemplateColumns={shared.grid.columns.single}>
          <div>
            <Content>
              Multidisciplinary Designer &sup1; at{' '}
              <Link color="text" target="_blank" href="https://thoughtbot.com">
                thoughtbot
              </Link>{' '}
              &mdash; Currently interested in Design Systems, React JS,
              Wabi-sabi &sup2; &amp; Brutalism &sup3;.
            </Content>
            <Link
              color="text"
              href="mailto:luke@interroban.gg"
              mb={4}
              display="block"
            >
              Portfolio on request
            </Link>
            <Footnote>1. Product, UI, UX, Front-end development</Footnote>
            <Footnote>
              2.{' '}
              <Link
                fontFamily={shared.fontFamilies.mono}
                fontSize={shared.fontSizes[1]}
                color="text"
                href="https://en.wikipedia.org/wiki/Wabi-sabi"
                target="_blank"
              >
                Wikipedia
              </Link>{' '}
              - Wabi-sabi
            </Footnote>
            <Footnote>
              3.{' '}
              <Link
                fontFamily={shared.fontFamilies.mono}
                fontSize={shared.fontSizes[1]}
                color="text"
                href="https://en.wikipedia.org/wiki/Brutalist_architecture"
                target="_blank"
              >
                Wikipedia
              </Link>{' '}
              - Brutalism
            </Footnote>
          </div>
        </Grid>
      </ThemeProvider>
    )
  }
}

export default About
