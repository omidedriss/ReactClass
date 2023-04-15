import React from "react";
import { getMenu } from "./data_menu";
import { useParams, useNavigate } from "react-router-dom";
function Page() {
  let params = useParams();
  let navigate = useNavigate();
  console.log("page");
  console.log(params.PageId);
  console.log(params.type);
  let menu = getMenu(parseInt(params.PageId, 10));
  console.log(menu);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Name:{menu.name}</h2>

      <button
        onClick={() => {
          navigate("/Pages");
        }}
      >
        Change
      </button>
    </main>
  );
}

export default Page;
