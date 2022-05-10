import Head from 'next/head'

export default function User({userData}) {
  return (
    <>
      <Head>
        <title>
          {userData.username}
        </title>
      </Head>
      <div>
        {userData.name}
        <br />
        {userData.id}
        <br />
        {userData.email}
      </div>
    </>
  )
}

export async function getStaticPaths() {

  const paths = [
    {
      params: {
        id: '1'
      },
    },
    {
      params: {
        id: '2'
      },
    }
  ]

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const userData = users.filter(user => user.id == params.id)[0]
  return {
    props: {
      userData
    }
  };
}