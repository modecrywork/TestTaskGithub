import React from "react";
import styled from "styled-components";
import { Card as UiCard, CardActions, CardContent } from "@material-ui/core";

const Card = () => {
  return <StyledUiCard>1</StyledUiCard>;
};

const StyledUiCard = styled(UiCard)`
  margin: auto;
  margin-bottom: 50px;
  height: 350px;
  width: 500px;
`;

export default Card;
