import React, { useState } from "react";
import "./Toolbar.css";
import Logo from "./Logo";
import MenuItems from "../header/MenuItems";
import Button from "../SampleStudent/ButtonApp";
import Modal from "../modal/Modal";
import SignIn from "../header/signIn";
import SideDrawer from "../header/SideDrawer";
const Toolbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const modalHandler = () => {
    setShowModal(true);
  };
  const modalClosed = () => {
    setShowModal(false);
  };
  const DrawerHandler = () => {
    setOpenSideDrawer(true);
  };
  const closeDrawer = () => {
    setOpenSideDrawer(false);
  };
  return (
    <header className="Toolbar">
      <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
      <div onClick={DrawerHandler}>Hamberger Icon</div>
      <span className="showNav">
        <Logo height="80%" />
      </span>
      <span className="showNav">
        <nav>
          <MenuItems />
        </nav>
      </span>
      <span className="showNav">
        <Button btnType="danger" clicked={modalHandler}>
          ورود و ثبت نام
        </Button>
      </span>

      <Modal show={showModal}>
        <SignIn />
      </Modal>
    </header>
  );
};
export default Toolbar;
