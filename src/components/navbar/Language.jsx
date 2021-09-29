import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Language = () => {
  return (
    <div className="ml-10 flex items-center cursor-pointer">
      <FontAwesomeIcon icon={faGlobe} size="sm" />
      <p className="font-roboto ml-1">Global</p>
    </div>
  );
};

export default Language;
