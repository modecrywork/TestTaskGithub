import React from "react";
import styled from "styled-components";
// ui
import { InputBase, IconButton } from "@material-ui/core";
// icons
import { Search as SrarchIcon } from "@material-ui/icons";

const SearchComponent = () => {
  return (
    <SrarchWrapper>
      <InputSearch
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <SearchButton type="submit">
        <SrarchIcon />
      </SearchButton>
    </SrarchWrapper>
  );
};

const SrarchWrapper = styled.div`
  position: relative;
  height: 35px;
  width: 250px;
  transition: width 0.6 linear;
`;

const InputSearch = styled(InputBase)`
  color: #ffff;
  background-color: rgba(255, 255, 255, 0.25);
  font-size: 12px;
  border-radius: 3px;
  padding: 2px 30px 2px 5px;
  width: 100%;
  height: 100%;
`;

const SearchButton = styled(IconButton)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
  padding: 3px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export default SearchComponent;
