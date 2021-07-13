import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href, className }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`${
          className ? className : ""
        } font-thin text-gray-600 hover:text-yellow-500 transition-all `}
        aria-current={router.pathname === href ? "page" : null}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
