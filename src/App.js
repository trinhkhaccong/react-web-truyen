// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link, Switch ,useLocation} from "react-router-dom";
import "./App.css";
import Title from "./Title/title";
import Login from "./Title/login"
import TheLoai from "./Title/the_loai"
import SapXep from "./Title/sap_xep"
import Home from "./Content/home";
import ListTruyen from "./Content/list_truyen";
import ListSeach from "./Content/list_tim_kiem";
import Intro from "./Content/intro";
import Content from "./Content/content";
import History from "./history/history";
import GioiThieu from "./Content/gioi_thieu";
import ReactAudioPlayer from "react-audio-player";

function App() {
  let location = useLocation()
  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth - 400;
  let width_full = window.innerWidth - 20;

  const [check_mobile, setCheckMobile] = useState(isMobile);
  const [check_show, setCheckShow] = useState(isMobile);
 
  const show_menu = () => {
    setCheckMobile(!check_mobile);
  };

  const close_menu = () => {
    if (isMobile) {
      setCheckMobile(true);
    }
  };
  useEffect(() => {
    const checklink = () => {
      console.log(window.location.href)
      if (location.pathname.search("content-truyen") > -1 && isMobile == false) {
        setCheckMobile(true)
        setCheckShow(true)
      }
      else
      {
        setCheckMobile(isMobile)
        setCheckShow(isMobile)
      }

    }
    checklink()
  },[location]
  )

  return (
    <div style={{ background: "#DDDDDD" }}>
      <div className="">
        <Login/>
        <Title />
        <div className='row' style={{background: '#807e7e',paddingLeft:100}}>
          <div className='col-3'><TheLoai/></div>
          <div className='col-3'><SapXep/></div>
    
        </div>
        
      </div>
      <div className={check_show ? "view_data_mobile" : "view_data"}>
        <div style={{background:'#FFF',borderRadius:20}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list-truyen/*" component={ListTruyen} />
          <Route path="/list-search/*" component={ListSeach} />
          <Route path="/intro-truyen/*" component={Intro} />
          <Route path="/content-truyen/*" component={Content} />
        </Switch>
        <GioiThieu />
        </div>
        
      </div>
    </div>
  );
}

export default App;
