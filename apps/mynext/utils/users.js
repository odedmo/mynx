const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return users
}

export async function getUserData(userId) {
  const users = await getUsers()
  return users.filter(user => user.id == userId)[0]
}

export async function getAllUsersIds() {
  const users = await getUsers()
  return users.map((user) => {
    return {
      params: {
        id: user.id.toString()
      },
    };
  });
}
