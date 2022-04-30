import styled from '@emotion/styled';
import Link from 'next/link';


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
