import React, { useState, useEffect } from "react";
import axios from "axios";
const APIFirstCode = (props) => {
  const [PostsState, setPostsState] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.ir/posts").then((response) => {
      console.log(response.data);
      const posts = response.data;

      setPostsState(posts);
    });

    // fetch("https://jsonplaceholder.ir/posts")
    //   .then((response) => {
    //     response.json().then((json) => {
    //       console.log(json);
    //       const posts = json;

    //       setPostsState(posts);
    //     });
    //   })
  }, []);
  //https://github.com/moharnadreza/jsonplaceholder
  //https://github.com/axios/axios
  return (
    <div style={{ flexDirection: "row" }}>
      {PostsState.map((p) => {
        return <p>{p.title}</p>;
      })}
    </div>
  );
};
export default APIFirstCode;
