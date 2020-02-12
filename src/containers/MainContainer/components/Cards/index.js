import React from "react";
// components
import Card from "./Card";

const Cards = ({data}) => {

  const renderedCards = data?.length&&data.map(item => <Card {...item} key={item?.name} />)

  return (<><Card /><Card /><Card /><Card /><Card /><Card /><Card /></>);
}


export default Cards;
