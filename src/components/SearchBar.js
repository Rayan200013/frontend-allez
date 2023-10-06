// SearchBar.js
import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "../css/NavBar.css";

function SearchBar({ placeholder, onChange }) {
  return (
    <div className="search-bar">
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none">
          <SearchIcon className="serachIcon-section" color="gray.300" />
        </InputLeftElement>
        <Input
          //   className="search-bar"
          type="text"
          placeholder="Search for places..."
          onChange={onChange}
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;


