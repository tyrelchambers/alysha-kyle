import React from "react";
import H1 from "../../components/Headings/H1";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <header className="flex justify-between max-w-screen-lg ml-auto mr-auto items-center">
      <H1>Alysha Kyle</H1>
      <img src="/ak-logo.png" alt="" className="w-20" />

      <Nav />
    </header>
  );
};

export default Header;
