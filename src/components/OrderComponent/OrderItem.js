import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// Ui
import Button from "@material-ui/core/Button";
// icons
import { ArrowDownward } from "@material-ui/icons";

/**
 * Компонент кнопки сортировки
 * @component
 * @category Components
 */
const OrderItem = ({ label, name, callback }) => {
  const [direction, setDirection] = useState(0);

  /**
   *  Клик по элементу
   */
  const toggleDirection = () => {
    let cacheDirection = direction; // кэшируем текущее состояние
    if (direction >= 2) {
      cacheDirection = 0;
    } else {
      cacheDirection++;
    }
    setDirection(cacheDirection); // устанавливаем  состояние
    callback && callback({ name, value: cacheDirection, label }); // вызываем коллбэк с ткущими данными
  };

  return (
    <OrderBUtton onClick={toggleDirection} variant="contained" color="default">
      {label}
      <OrderArrowIcon direction={direction} />
    </OrderBUtton>
  );
};

/* Styles */
const OrderBUtton = styled(Button)`
  color: #ffffff;
  font-size: 12px;
  margin-left: 10px;
  padding: 4px 6px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
  }
`;

const OrderArrowIcon = styled(ArrowDownward)`
  ${({ direction }) => {
    // положение стрелки в зависимости от состояния
    if (!direction) return "opacity:0;";
    else if (direction == 2) return "transform: rotate(180deg);";
  }}
  width: 14px;
  height: 14px;
`;

OrderItem.propTypes = {
  /**
   * Функция коллбэк для обработки клика
   */
  callback: PropTypes.func,
  /**
   *  Лейбл сортировки
   */
  label: PropTypes.string.isRequired,
  /**
   * Нейм сортировки (используется для обработки в родителе)
   */
  name: PropTypes.string.isRequired
};

export default OrderItem;
