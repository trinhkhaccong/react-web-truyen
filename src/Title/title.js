import React,{useState,useEffect} from 'react';
import TheLoai from "./the_loai"
import SapXep from "./sap_xep"
import Search from "./search"
import Login from "./login"
import Registration from "./registration"
import Logo from "./logo"
import {Link,useLocation} from "react-router-dom"
import "./title.css"
import 'antd/dist/antd.css';

export default  function Title()
{
  let isMobile = (window.innerWidth<= 768);
  const [check_show,setCheckShow]=useState(false)
  let localhost = useLocation()
  useEffect(()=>{
    const checklink = () => {
      console.log(window.location.href)
      if (localhost.pathname.search("content-truyen") > -1 && isMobile == false) {
        setCheckShow(true)
      }
      else
      {
        setCheckShow(false)
      }

    }
    checklink()
  },[localhost])
  
  return(<div className='row' style={{background:'#FFF',padding:25}}>
    <div className='col-4 text_center' ><img style={{cursor:'pointer'}} width={110} height ={75} src={require("./logo.png")} onClick={()=>window.open("/","_parent")}/></div>
    <div className='col-6 ml-3'><Search/></div>
  </div>)
}
