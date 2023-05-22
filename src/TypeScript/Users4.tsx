import React from "react";
type UProps = {
  UserInfo: {
    name: string;
    lastname: string;
  }[];
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
