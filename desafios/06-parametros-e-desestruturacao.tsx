const userRepository = {
  update: ({ data, id }) => {},
};

function updateUserController({ data, id }) {
  const { name, email, password } = data;

  userRepository.update({
    data: {
      name,
      email,
      password,
    },
    id,
  });
}

function updateUserRoute(body, params) {
  const { name, email, password } = body;

  const data = {
    name,
    email,
    password,
  };

  updateUserController({
    data,
    id: params.id,
  });
}

// `body: { name, email, password }`

// `params: { id }`
