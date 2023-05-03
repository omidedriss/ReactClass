import React from "react";
import "./Toolbar.css";
import LLogo from "./Logo"
import MenuItems from "./MenuItems"

const Toolbar=(props) => {
    return(
        // <div className="Toolbar">
        //     <LLogo className="showNav" height="80%" />
        //     <MenuItems />

        // </div>

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

    <Modal show={showModal} modalClosed={modalClosed}>
        <SignIn />
    </Modal>
</header>
    );
}

export default Toolbar;
