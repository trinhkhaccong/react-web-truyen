import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./title.css"
export default function Logo(){
    const refresh=()=>{
        window.open("/","_parent")
    }
    return(<div style={{color:'white'}}>
    <center onClick={refresh}>Trang Chủ</center>
</div>)
}