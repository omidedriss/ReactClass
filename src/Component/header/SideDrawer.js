import React from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import './SideDrawer.css';
import Button from '../../Component/SampleStudent/ButtonApp';
import Backdrop from '../backdrop/Backdrop';
const SideDrawer = (props)=>{
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
                    <Button btnType="danger" clicked={()=>alert('sign in page opend')}>
                        ورود و ثبت نام
                    </Button>
                </div>
                
            </div>
        </React.Fragment>
        
    )
}
export default SideDrawer;