import React from "react";
type TProps = {
  children: string;
};
function User(props: TProps) {
  return <div>{props.children}</div>;
}
export default User;
