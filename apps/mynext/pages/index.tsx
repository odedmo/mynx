import styled from '@emotion/styled'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
}

const StyledPage = styled.div`
  .page {
  }
`;

const StyledH1 = styled.h1``;

export function Index({people}) {
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
        <Link href="/users">
          <a>this page!</a>
        </Link>
      </StyledH1>

      <section>
        <h2>Blog</h2>
        <ul>
          {people.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/users/${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>

      </section>

    </StyledPage>
  );
}


export default Index;
