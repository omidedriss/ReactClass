import React from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import Button from '../../Component/StudentSample/ButtonApp';
import Backdrop from '../Backdrop/Backdrop';
import './SideDrawer.css';

const SideDrawer =(props)=>{
    let classes = ['SideDrawer','Close'];
    if(props.show){
        classes=['SideDrawer','Open']
    }
    return(
        <React.Fragment>
            <Backdrop show={props.show}  modalClosed={props.closeDrawer}/>
            <div className={classes.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxButton">
                    <Button btnType="danger" btnText='ورود و ثبت نام' clicked={()=>alert('sign in page opend')}>
                        
                    </Button>
                </div>                
            </div>
        </React.Fragment>        
    )
}

export default SideDrawer;