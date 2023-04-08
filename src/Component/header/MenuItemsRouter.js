import React from "react";
import "./MenuItems.css";
import MenuItem from "./MenuItemRouter";
const MenuItems = () => {
  return (
    <ul className="MenuItems">
      <MenuItem link="/" active>
        صفحه اصلی
      </MenuItem>
      <MenuItem
        link={{
          pathname: "/add-student",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true },
        }}
      >
        اضافه کردن دانش آموز
      </MenuItem>
      <MenuItem
        link={{
          pathname: "/invoices",
        }}
      >
        invoices
      </MenuItem>
    </ul>
  );
};
export default MenuItems;
