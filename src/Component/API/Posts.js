import React, { useEffect } from "react";
import "./PostStyle.css";
import PostItem from "./Post";

const Posts = (props) => {
  let PostsElement = props.PostsList.map((Post, index) => (
    <PostItem
      key={index}
      id={Post.id}
      name={Post.title}
      descriptipn={Post.body}
      clickM={Post.clickM}
    />
  ));

  return PostsElement;
};
export default React.memo(Posts);
