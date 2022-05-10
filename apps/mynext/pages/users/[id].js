import Head from 'next/head'
import { getAllUsersIds, getUserData } from '../../utils/users';

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
  const paths = await getAllUsersIds()
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const userData = await getUserData(params.id)
  return {
    props: {
      userData
    }
  };
}