import {
  faAmazon,
  faGithub,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  const socials = [
    {
      url: "https://music.apple.com/us/artist/alysha-kyle/1546154944",
      icon: <FontAwesomeIcon icon={faMusic} />,
    },
    {
      url: "https://open.spotify.com/artist/3EuxDDlSGYVjk2G3Tce4Fd?si=H65HknDzTF6LD08K0_sVVQ&nd=1",
      icon: <FontAwesomeIcon icon={faSpotify} />,
    },
    {
      url: "https://www.youtube.com/watch?v=mCUji9g9hQ0&ab_channel=AlyshaKyle-Topic",
      icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
      url: "https://music.amazon.ca/artists/B08R6ZSXDJ/alysha-kyle",
      icon: <FontAwesomeIcon icon={faAmazon} />,
    },
  ];
  return (
    <div className="flex gap-8">
      {socials.map((s, id) => (
        <Link href={s.url} key={id}>
          <a
            className="text-gray-700 text-xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            {s.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
