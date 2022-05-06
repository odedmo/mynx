import styled from '@emotion/styled'
import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'

/* eslint-disable-next-line */
export interface PostsProps {}

const StyledPosts = styled.div`
  color: pink;
`;

const StyledH1 = styled.h1``

export function Posts(props: PostsProps) {
  return (
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
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </StyledPosts>
  );
}

export default Posts;
