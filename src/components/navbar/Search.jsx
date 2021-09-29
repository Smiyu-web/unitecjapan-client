import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="border-l-2 border-color-text ml-4 cursor-pointer">
      <FontAwesomeIcon icon={faSearch} size="sm" className="ml-4" />
    </div>
  );
};

export default Search;
