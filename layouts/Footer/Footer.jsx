import React from "react";
import Socials from "../../components/Socials/Socials";

const Footer = () => {
  return (
    <footer className="w-full p-4  mt-20">
      <main className="max-w-screen-lg ml-auto mr-auto justify-center w-full footer-main flex flex-col items-center gap-8">
        <div className="flex w-full gap-8 justify-center footer-main">
          <h2 className="text-gray-800">Alysha Kyle</h2>
          <p className="font-thin text-gray-700">Follow me on social media!</p>
          <Socials />
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:3EuxDDlSGYVjk2G3Tce4Fd?si=jTa9Ang4RmCrHeCqzQh6RQ&dl_branch=1&size=basic&theme=light"
            width="200"
            height="25"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
          ></iframe>
        </div>

        <p className="text-gray-500 font-thin text-sm">
          Created by{" "}
          <a href="https://tyrelchambers.com" className="underline">
            Tyrel Chambers
          </a>
        </p>
      </main>

      <style jsx>{`
        footer {
          background-color: #faedcd;
        }

        @media screen and (max-width: 768px) {
          .footer-main {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
