import styled from '@emotion/styled'
import Head from 'next/head'
import Link from 'next/link';
import Script from 'next/script'

/* eslint-disable-next-line */
export interface UsersProps {}

const StyledPosts = styled.div`
  color: pink;
`;

const StyledH1 = styled.h1``

export function Users(props: UsersProps) {
  return (
    <StyledPosts>
      <Head>
        <title>Users</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <StyledH1>Users</StyledH1>
      <div>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>
    </StyledPosts>
  );
}

export default Users;
