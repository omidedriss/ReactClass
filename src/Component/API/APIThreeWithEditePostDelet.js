import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./Post";
const APIThreeWithEditePostDelet = (props) => {
  //https://github.com/moharnadreza/jsonplaceholder
  //https://github.com/axios/axios
  const [PostsState, setPostsState] = useState();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let num = 2;
    // update
    axios.get(`https://jsonplaceholder.ir/posts/${num}`).then((response) => {
      console.log(response.data);
      const posts = response.data;

      setPostsState(posts);
      setLoading(false);
    });

    const data = {
      title: "test program",
      body: "test body program",
      userId: 1,
    };
    let url = `https://jsonplaceholder.ir/posts/${num}`;
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: data.stringify(data),
      url,
    };
    // Post
    axios
      .post(`https://jsonplaceholder.ir/posts/${num}`, data)
      .then((response) => {
        console.log(response.data);
      });
    //axios(options);
    //Put

    axios
      .put(`https://jsonplaceholder.ir/posts/${num}`, data)
      .then((response) => {
        console.log(response.data);
      });
    //delete
    axios.delete(`https://jsonplaceholder.ir/posts/${num}`).then((response) => {
      console.log(response.data);
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

  return (
    <div style={{ flexDirection: "row" }}>
      {Loading ? (
        <h1 style={{ textAlign: "center" }}>...Loading</h1>
      ) : (
        <PostItem
          id={PostsState.id}
          name={PostsState.title}
          descriptipn={PostsState.body}
        ></PostItem>
      )}
    </div>
  );
};
export default APIThreeWithEditePostDelet;
