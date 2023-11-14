import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const getData = async () => {
  return await axios.get("https://picsum.photos/v2/list");
};

const Photos2 = async () => {
  // const [up, setUp, location] = use
  const [images, setImages] = useState([]);
  const data = await getData();
  console.log(data.data);
  useEffect(() => {}, []);

  return <div></div>;
};

export default Photos2;
