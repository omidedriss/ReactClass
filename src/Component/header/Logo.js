import React from 'react';
import LLogo from '../../assets/images/logo.png';
import './logo.css';
const Logo = (props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={LLogo} alt="logo" />
        </div>
    )
}
export default React.memo(Logo);