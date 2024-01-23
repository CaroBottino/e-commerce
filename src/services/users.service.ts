import { IUser } from "../interfaces/IUser";

const base_url = import.meta.env.VITE_API_URL;

const usersService = {
  getUsers(): Promise<IUser[] | undefined> {
    return fetch(`${base_url}/users`).then(async (response) => {
      return await response.json();
    });
  },
  getUserByEmail(email: string): Promise<IUser | undefined> {
    return fetch(`${base_url}/users`).then(async (response) => {
      // all this because can't get user by email form free mockapi plan
      const users = await response.json();

      if (users) {
        return users.find((user: IUser) => user.email === email);
      }
    });
  },
  createUser(user: IUser): Promise<IUser | undefined> {
    return fetch(`${base_url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      return await response.json();
    });
  },
  updateUser(user: IUser): Promise<IUser | undefined> {
    return fetch(`${base_url}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async (response) => {
      return await response.json();
    });
  },
};

export default usersService;
