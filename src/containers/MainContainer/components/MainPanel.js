import React from "react";
import styled from "styled-components";
// Ui
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// components
import { OrderComponent, SearchComponent } from "components";
// constants
import { BASE_SORT_MODEL } from "../constants";
import { WithMainContainerContext } from "../context";

const MainPanel = ({ context: { setSort, setSearch } }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Test task APP</Typography>
        <PnaelControllers>
          <SearchComponent callback={setSearch} />
          <OrderComponent sortTypes={BASE_SORT_MODEL} callback={setSort} />
        </PnaelControllers>
      </Toolbar>
    </AppBar>
  );
};

const PnaelControllers = styled.div`
  padding-left: 50px;
  min-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default WithMainContainerContext(MainPanel);
