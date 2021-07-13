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
        } font-thin text-gray-600  opacity-50 transition-all hover:opacity-100`}
        aria-current={router.pathname === href ? "page" : null}
      >
        {children}
        <style jsx>{`
          a[aria-current="page"] {
            color: #8fa253;
            opacity: 1;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default NavLink;
