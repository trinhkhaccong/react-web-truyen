// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Title from "./Title/title"
import Home from "./Content/home"
import ListTruyen from "./Content/list_truyen"
import Intro from "./Content/intro"
import Content from "./Content/content"
import History from "./history/history"
import GioiThieu from "./Content/gioi_thieu"
import ReactAudioPlayer from 'react-audio-player';

function App() {

  return (
    <div style={{ background: '#eee' }}>
      <Title />
      <div className='row' >
        <div className='col-3' style={{ background: 'white', margin: 5 }}>
          <center className='' style={{ fontWeight: 'bold', padding: 5 ,fontSize:20}}>Thể Loại Truyện</center>
          <div className='row'>

            <div className='col-6 border' >
              <Link
                to={{
                  pathname: "/list-truyen/tien-hiep",
                }}
                style={{ textDecoration: 'none', color: "black" }}
              ><img src='../../icon_tag.png' />Tiên Hiệp</Link></div>

            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/kiem-hiep",
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Kiếm Hiệp</Link></div>
          </div>

          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/huyen-huyen"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Huyền huyễn</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/ngon-tinh"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Ngôn Tình</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/sac-hiep"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Sắc Hiệp</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/di-gioi"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Dị Giới</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/do-thi"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Đô Thị</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/huyen-ao"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Huyền Ảo</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/trinh-tham"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Trinh Tham</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/co-dai"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Cổ Đại</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/he-thong"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Hệ Thống</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/khoa-huyen"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Khoa Huyễn</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/quan-su"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Quân Sự</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/bac-hop"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Bách Hợp</Link></div>
          </div>
          <hr/>
              <History/>
          </div>
        
        <div className='col-8' style={{ background: "white", margin: 5, marginLeft: 30 }} >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/list-truyen/*' component={ListTruyen} />
            <Route path='/intro-truyen/*' component={Intro} />
            <Route path='/content-truyen/*' component={Content} />
            
          </Switch>
          
        </div>
       
      </div>
      <GioiThieu/>
    </div>
  );
}

export default App;
