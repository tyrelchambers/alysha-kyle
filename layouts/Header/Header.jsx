import React from "react";
import H1 from "../../components/Headings/H1";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-lg ml-auto mr-auto items-center px-4">
      <H1>Alysha Kyle</H1>
      <img src="/ak-logo.png" alt="" className="w-20 header-icon" />

      <Nav />

      <style jsx>{`
        @media screen and (max-width: 425px) {
          header {
            padding: 1em;
          }
          .header-icon {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
