import styled from '@emotion/styled';
import Link from 'next/link';

import Head from 'next/head'
import Image from 'next/image'

const StyledPage = styled.div`
  .page {
  }
`;

const StyledH1 = styled.h1``;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <Head>
        <title>Home</title>
      </Head>
      <Image
        src="/images/profile.png" // Route of the image file
        height={200} // Desired size with correct aspect ratio
        width={200} // Desired size with correct aspect ratio
        alt="oded"
      />

      <StyledH1>
        Read{' '}
        <Link href="/posts">
          <a>this page!</a>
        </Link>
      </StyledH1>
    </StyledPage>
  );
}

export default Index;
