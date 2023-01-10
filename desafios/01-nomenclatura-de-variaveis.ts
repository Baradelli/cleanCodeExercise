// Nomenclatura de variáveis

const categories = [
  {
    title: "User",
    followers: 5,
  },
  {
    title: "Friendly",
    followers: 50,
  },
  {
    title: "Famous",
    followers: 500,
  },
  {
    title: "Super Star",
    followers: 1000,
  },
];

export default async function getData(req, res) {
  const username = String(req.query.username);

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    });
  }

  const user = await response.json();

  const category = categories.find((i) => user.followers > i.followers);

  const userWithCategory = {
    username,
    category: category.title,
  };

  return userWithCategory;
}

getData(
  {
    query: {
      username: "josepholiveira",
    },
  },
  {}
);
