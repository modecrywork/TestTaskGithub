import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import OrderItem from "./OrderItem";

/**
 * Компонент рендеринга кнопок сортировки, рендерится на основе переваемого массива
 * @component
 * @category Components
 */
const OrderComponent = ({ sortTypes, callback }) => {
  return (
    <OrderContainer>
      {sortTypes &&
        sortTypes.map((sortType, index) => (
          <OrderItem {...sortType} callback={callback} key={index} />
        ))}
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

OrderComponent.propTypes = {
  /**
   * Массив объектов для рендеринга кнопок сортировки
   */
  sortTypes: PropTypes.array.isRequired,
  /**
   * Коллбэк функция на вызов клика по кнопке
   */
  callback: PropTypes.func
}

export default OrderComponent;
