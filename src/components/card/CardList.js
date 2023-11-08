import React from "react";
import styled from "styled-components";

const CardList = (props) => {
  const StyleCardList = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 93px 30px;
  `;
  return <StyleCardList>{props.children}</StyleCardList>;
};

export default CardList;
