"use client";

import { createUser } from "./action";

export default function Form() {
  return (
    <div>
      <form action={createUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </form>
      <button type="submit">signup</button>
    </div>
  );
}
