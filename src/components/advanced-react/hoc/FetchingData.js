import React from "react";
import withLoading from "./withLoading";

const FetchingData = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
};

export default withLoading(FetchingData);
