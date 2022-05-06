import styled from '@emotion/styled';

const StyledLayout = styled.div`
  width: 80%;
  margin: auto;
`

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>
}