import React from 'react';
import './MenuItems.css';
import MenuItem from './MenuItem';
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
            <MenuItem link="/" active>
                صفحه اصلی
            </MenuItem>
            <MenuItem link="/" >
                بخش ها
            </MenuItem>
            <MenuItem link="/" >
                راهنمای مراجعه کنندگان
            </MenuItem>
            <MenuItem link="/" >
                اطلاعات تماس واحد ها
            </MenuItem>
            <MenuItem link="/" >
                درباره شهرک سلامت
            </MenuItem>
            <MenuItem link="/" >
                تماس با ما
            </MenuItem>
            <MenuItem link="/" >
                نوبت دهی آنلاین
            </MenuItem>
        </ul>
    )
}
export default MenuItems