import React,{useState} from 'react';
import TheLoai from "./the_loai"
import SapXep from "./sap_xep"
import Search from "./search"
import Login from "./login"
import Logo from "./logo"
import "./title.css"

export default  function Title()
{
  return(<div className='row' style={{background:'#2C7ABE',height:48}}>
    <div className='col-3'>< Logo/></div>
    <div className='col-2'><TheLoai/></div>
    <div className='col-5'><Search/></div>
    <div className='col-2'><Login/></div>
  </div>)
}
