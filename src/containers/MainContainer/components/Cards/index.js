import React from "react";
import PropTypes from 'prop-types'
import { v1 as uuidv1 } from 'uuid';
// components
import Card from "./Card";
// context
import { WithMainContainerContext } from "../../context";

/**
 *  Кломпонент рендера карточек  репозиториев
 * @component
 * @param data
 */
const Cards = ({ data }) => {
  const RenderedCards =
    data?.length && data.map(item => <Card {...item} key={uuidv1()} />);

  return (
      <>
        {RenderedCards || "Ничего не найденно"}
      </>
  );
}


export default WithMainContainerContext(Cards);

Cards.propTypes = {
  /**
   * Массив данных
   */
  data: PropTypes.array.isRequired
}
