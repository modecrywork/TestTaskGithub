import React, { Component } from "react";
// styled
import styled from "styled-components";
// components
import MainPanel from "./components/MainPanel";
// constants
import { BASE_SORT_MODEL } from "./constants";
import { MainContainerProvider } from "./context";
// utils
import { debounce } from "utils";

class MainContainer extends Component {
  state = {
    search: "",
    sort: [...BASE_SORT_MODEL],
    data: []
  };

  setSort = sortType => {
    let newSortingModel = [...this.state.sort];

    newSortingModel = newSortingModel.map(item => {
      if (item.name === sortType.name) {
        return { ...sortType };
      } else {
        return item;
      }
    });

    this.setState({ sort: newSortingModel });
  };

  setSearch = value => debounce(() => this.setState({ search: value }), 400);

  render() {
    return (
      <MainContainerProvider
        value={{
          //прокаидываем данные и методы
          data: [...this.state.data],
          setSearch: this.setSearch,
          setSort: this.setSort
        }}
      >
        <MainPanel />
        <ContainerContent>Content</ContainerContent>
      </MainContainerProvider>
    );
  }
}

export default MainContainer;

/* Main view styles */

const ContainerContent = styled.div``;
