import React from "react";
import styled from "styled-components";
// Ui
import { Typography } from "@material-ui/core";
// components
import OrderItem from "./OrderItem";

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

export default OrderComponent;
