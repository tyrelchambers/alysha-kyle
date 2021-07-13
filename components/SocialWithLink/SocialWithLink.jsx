import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialWithLink = ({ href, icon }) => {
  return (
    <a href={href} className="text-gray-700 text-xl">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialWithLink;
