import React, { Component } from "react";
import styled from "styled-components";
// components
import MainPanel from "./components/MainPanel";
import Cards from "./components/Cards";
// constants
import { BASE_SORT_TYPES_ARRAY } from "./constants";
import { MainContainerProvider } from "./context";
// utils
import { debounce } from "utils";

/**
 * Базовый контейнер с контентом
 * @component
 * @category Containers/MainContainer
 */
class MainContainer extends Component {
  state = {
    search: "",
    sort: [...BASE_SORT_TYPES_ARRAY], // массив моделей для сортировки
    data: []
  };

  /**
   * Установка сортировки
   * @param {object} sortType новое состояние инстанса сортировки
   */
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

  /**
   * Обработчик поиска, вызывается по дебаунсу в 400мс
   * @param {string} value значение требуемуе для установки поиска
   */
  setSearch = value => debounce(() => this.setState({ search: value }), 400);

  render() {
    return (
      <MainContainerProvider
        value={{
          // прокаидываем данные и методы
          data: [...this.state.data],
          setSearch: this.setSearch,
          setSort: this.setSort
        }}
      >
        <MainPanel />
        <ContainerContent>
          <Cards />
        </ContainerContent>
      </MainContainerProvider>
    );
  }
}

/* Container content styles */
const ContainerContent = styled.div`
  padding-top: 20px;
  width: 98%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export default MainContainer;
