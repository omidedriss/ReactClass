import React from 'react';
import aLogo from '../Assets/images (1).jfif';
import './logo.css';
const Logo = (props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={aLogo} alt="logo" />
        </div>
    )
}
export default React.memo(Logo);