import styled from '@emotion/styled';
import Link from 'next/link';

import Head from 'next/head'
import Script from 'next/script'

import { ThemeProvider } from '@emotion/react'


/* eslint-disable-next-line */
export interface PostsProps {}

const StyledPosts = styled.div`
  color: pink;
`;

const StyledH1 = styled.h1``;

const StyledH2 = styled.h2``;

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

const SomeText = styled.div`
  color: ${props => props.theme.colors.primary};
`

export function Posts(props: PostsProps) {
  return (
    <ThemeProvider theme={theme}>
      <SomeText>some text</SomeText>
      <StyledPosts>
        <Head>
          <title>Posts</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <StyledH1>Posts</StyledH1>
        <StyledH2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </StyledH2>
      </StyledPosts>
    </ThemeProvider>
  );
}

export default Posts;
