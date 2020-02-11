import React, { useState } from "react";
import styled from "styled-components";
// Ui
import Button from "@material-ui/core/Button";
// icons
import { ArrowDownward } from "@material-ui/icons";

const OrderItem = props => {
  console.log(props);
  const { label, name, callback } = props;
  const [direction, setDirection] = useState(0);

  const toggleDirection = () => {
    let cachedirection = direction;
    if (direction >= 2) {
      cachedirection = 0;
    } else {
      cachedirection++;
    }

    setDirection(cachedirection);
    callback && callback({ name, value: cachedirection, label });
  };

  return (
    <OrderBUtton onClick={toggleDirection} variant="outlined" color="primary">
      {label}
      <OrderArrowIcon direction={direction} />
    </OrderBUtton>
  );
};

const OrderBUtton = styled(Button)`
  margin-left: 10px;
  position: relative;
  background-color: #ffff;
  &:hover {
    background-color: #ffff;
  }
`;

const OrderArrowIcon = styled(ArrowDownward)`
  ${({ direction }) => {
    if (!direction) return "opacity:0;";
    else if (direction == 2) return "transform: rotate(180deg);";
  }}
  width: 20px;
  height: 20px;
`;

export default OrderItem;
