import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import LoadingSpinner from "./Loading";
import instance from "./axios";
const APIFiveWithSpinerAndGlobalConfig = (props) => {
  //https://github.com/moharnadreza/jsonplaceholder
  //https://github.com/axios/axios
  //https://cssloaders.github.io/
  const [PostsState, setPostsState] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  // axios.defaults.baseURL = 'https://jsonplaceholder.ir'
  // axios.defaults.headers.post['Contetnt-Type'] = 'application/json';

  useEffect(() => {
    setLoading(true);
    instance.get("/posts").then((response) => {
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
    // .catch((error) => {
    //   setLoading(false);
    //   setError(true);

    //   //console.log(error.response.data);
    //   console.log(error.response.status);
    //   //console.log(error.response.headers);
    //   //console.log(error);
    // });

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
    <div
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%",
      }}
    >
      {Loading ? <LoadingSpinner /> : <Posts PostsList={PostsState}></Posts>}
    </div>
  );
};
export default APIFiveWithSpinerAndGlobalConfig;
