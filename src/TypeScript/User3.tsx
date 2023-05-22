import React from "react";
type UProps = {
  UserInfo: {
    name: string;
    lastname: string;
  };
};
function User({ UserInfo }: UProps) {
  return <div>{UserInfo.name}</div>;
}
export default User;
