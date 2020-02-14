import React from "react";
import styled from "styled-components";
// ui
import {
  Card as UiCard,
  CardActions,
  CardContent,
  Typography,
  Tooltip
} from "@material-ui/core";
import {
  GitHub,
  BugReport,
  CallSplit,
  Star,
  Visibility
} from "@material-ui/icons";

/**
 * Компонент карточки репозитория
 * @returns {*}
 * @constructor
 */
const Card = ({
  full_name,
  html_url,
  open_issues,
  forks,
  stargazers_count,
  language
}) => {
  return (
    <StyledUiCard>
      <CardContent>
        <CardTop>
          <div>
            <CardText gutterBottom>
              <a href={html_url} target="_blank">
                <GitHub />
                {full_name}
              </a>
            </CardText>
          </div>
          <div>
            <CardText>
              <Tooltip title={<TooltipText>Issues</TooltipText>}>
                <span>
                  <BugReport />
                  {open_issues}
                </span>
              </Tooltip>
            </CardText>
            <CardText>
              <Tooltip title={<TooltipText>Forks</TooltipText>}>
                <span>
                  <CallSplit />
                  {forks}
                </span>
              </Tooltip>
            </CardText>
            <CardText>
              <Tooltip title={<TooltipText>Stars</TooltipText>}>
                <span>
                  <Star />
                  {stargazers_count}
                </span>
              </Tooltip>
            </CardText>
            <CardText>
              <Tooltip title={<TooltipText>Watchers</TooltipText>}>
                <span>
                  <Visibility />
                  {stargazers_count}
                </span>
              </Tooltip>
            </CardText>
          </div>
        </CardTop>

      </CardContent>
    </StyledUiCard>
  );
};

/* Card styles */
const StyledUiCard = styled(UiCard)`
  margin: auto;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 50px;
  height: 350px;
  width: 500px;
  background-color: rgb(66, 66, 66, 0.8);
  transition: background-color color 0.3s;
  &:hover {
    color: #fffff;
    background-color: rgb(66, 66, 66, 0.9);
  }
`;

const TooltipText = styled.span`
  font-size: 14px;
`;

const CardText = styled(Typography)`
  color: inherit;
  & a,
  span {
    color: inherit;
    text-decoration: none;
    svg {
      vertical-align: bottom;
      padding-right: 5px;
    }
  }
  span {
    cursor: default;
  }
`;

const CardTop = styled.div`
  display: flex;
  div {
    display: flex;
    width: 50%;

    &:nth-child(2) {
      justify-content: flex-end;
      p {
        padding-left: 20px;
      }
    }
  }
`;

export default Card;
