import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const APIfirst = (poros) => {
  const [post, setpost] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.ir/posts").then((response) => {
      console.log(response.data);

      const p = response.data.slice(0, 8);
      const updatep = p.map((pitem) => {
        return {
          ...pitem,
          clickme: " ادامع مقاله",
        };
      });
      setpost(updatep);
      setloading(false);
    });
  }, []);

  return (
    <div style={{ flexDirection: "row" }}>
        {loading ? (
        <h1 style={{ textAlign: "center" }}>...Loading</h1>
      ) :

    ( <p>{post}</p>)

}

    </div>
  );
};
export default APIfirst;
