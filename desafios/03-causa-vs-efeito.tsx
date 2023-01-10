// Causa vs Efeito
import { useEffect, useState } from "react";

interface IUser {
  name: string;
  githubUrl: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: "Joseph Oliveira",
        githubUrl: "https://github.com/josepholiveira",
      },
    },
  };
}

export function UserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    function loadUser() {
      setIsLoading(true);

      const {
        data: { user: userData },
      } = fetchUser();

      setUser(userData);

      setIsLoading(false);
    }

    loadUser();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={`${user?.githubUrl}.png`} alt="" />
      <a href={user?.githubUrl}>{user?.name}</a>
    </div>
  );
}
