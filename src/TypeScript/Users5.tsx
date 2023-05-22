import React from "react";
import { Name } from "./user.type";
type UProps = {
  UserInfo: Name[];
};
function Users({ UserInfo }: UProps) {
  return (
    <div>
      {UserInfo.map((user, index) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}
export default Users;
