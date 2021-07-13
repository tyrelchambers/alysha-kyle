import React from "react";
import NavLink from "../../components/NavLink/NavLink";

const Nav = () => {
  return (
    <nav className="flex gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/bio">Bio</NavLink>
      <NavLink href="/music">Music</NavLink>
    </nav>
  );
};

export default Nav;
