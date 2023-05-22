import React from "react";
type SProps = {
  status: "loading" | "success" | "fail";
};
function Status({ status }: SProps) {
  let Message = "";
  if (status === "loading") {
    Message = "loading...";
  } else if (status === "success") {
    Message = "Data Fetched";
  } else if (status === "fail") {
    Message = "Error";
  }

  return <div>{Message}</div>;
}
export default Status;
