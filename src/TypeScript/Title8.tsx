import React from "react";
type TProps = {
  children: React.ReactNode;
};
function User(props: TProps) {
  return <div>{props.children}</div>;
}
export default User;
