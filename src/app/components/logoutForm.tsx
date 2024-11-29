

import React from "react";
import { logout } from "../actions/logout";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>Logout</button>
    </form>
  )
}

export default LogoutForm