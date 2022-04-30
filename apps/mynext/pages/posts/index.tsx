import styled from '@emotion/styled';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface PostsProps {}

const StyledPosts = styled.div`
  color: pink;
`;

const StyledH1 = styled.h1``;

const StyledH2 = styled.h2``;

export function Posts(props: PostsProps) {
  return (
    <StyledPosts>
      <StyledH1>Posts</StyledH1>
      <StyledH2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </StyledH2>
    </StyledPosts>
  );
}

export default Posts;
