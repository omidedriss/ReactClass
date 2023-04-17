import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./Post";
const APIFourWithErrorLocalAndGlobalHandel = (props) => {
  //https://github.com/moharnadreza/jsonplaceholder
  //https://github.com/axios/axios
  const [PostsState, setPostsState] = useState();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // global error
  // axios.interceptors.request.use(
  //   (request) => {
  //     console.log(request);
  //     return request;
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
  // axios.interceptors.response.use(
  //   (response) => {
  //     console.log(response);
  //     return response;
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  useEffect(() => {
    setLoading(true);
    let num = 2;
    // update
    axios
      .get(`https://jsonplaceholder.ir/posts/${num}`)
      .then((response) => {
        console.log(response.data);

        const posts = response.data;

        setPostsState(posts);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error);
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
  let ErrorMessage = null;
  if (error) {
    ErrorMessage = (
      <h1 style={{ textAlign: "center", color: "red" }}>
        متاسفانه عملیات شما با شکست روبرو شد.لطفا مجددا تلاش کنید
      </h1>
    );
  }
  return (
    <div style={{ flexDirection: "row" }}>
      {ErrorMessage}
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
export default APIFourWithErrorLocalAndGlobalHandel;
