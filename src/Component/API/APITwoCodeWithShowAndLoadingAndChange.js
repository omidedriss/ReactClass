import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
const APITwoCodeWithShowAndLoadingAndChange = (props) => {
  //https://github.com/moharnadreza/jsonplaceholder
  //https://github.com/axios/axios
  const [PostsState, setPostsState] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.ir/posts").then((response) => {
      console.log(response.data);
      const posts = response.data.slice(0, 6);
      const UpdatePosts = posts.map((postsitem) => {
        return {
          ...postsitem,
          clickM: "ادامه مقاله",
        };
      });
      setPostsState(UpdatePosts);
      setLoading(false);
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

  const ShowChangeData = () => {
    return PostsState.map((Post, index) => (
      <div key={index} id={Post.id} name={Post.title} descriptipn={Post.body} />
    ));
  };

  return (
    <div style={{ flexDirection: "row" }}>
      {Loading ? (
        <h1 style={{ textAlign: "center" }}>...Loading</h1>
      ) : (
        <Posts PostsList={PostsState}></Posts>
      )}
    </div>
  );
};
export default APITwoCodeWithShowAndLoadingAndChange;
