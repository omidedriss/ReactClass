import React from "react";
import "./PostStyle.css";

const PostItem = (props) => {
  return (
    <div className="Posts">
      <label>شماره مقاله :{props.id}</label>
      <label>موضوع</label>
      <label style={{ color: "blue" }}>{props.name}</label>

      <label>توضیحات</label>
      <label style={{ color: "blue" }}>{props.descriptipn}</label>
      <label style={{ color: "green" }}>{props.clickM}</label>
    </div>
  );
};
export default PostItem;
