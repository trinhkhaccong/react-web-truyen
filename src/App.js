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

function App() {

  return (
    <div style={{ background: '#eee' }}>
      <Title />
      <div className='row' >
        <div className='col-3' style={{ background: 'white', margin: 5 }}>
          <center className='' style={{ fontWeight: 'bold', padding: 5 }}>THỂ LOẠI TRUYỆN</center>
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
                pathname: "/list-truyen/doan-van"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Đoản Văn</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/dong-phuong"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Đông Phương</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/gia-dau"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Gia Đấu</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/nu-cuong"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Nữ Cường</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/cung-dau"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Cung Đấu</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/truong-sung"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Truyện Sủng</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/truyen-nguoc"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Truyện Ngược</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/linh-di"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Linh Dị</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/tham-hiem"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Thám Hiểm</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/bac-hop"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Bách Hợp</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/dai-huoc"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Hài Hước</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/hien-dai"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Hiện Đại</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/viet-nam"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Việt Nam</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/light-novel"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Light Novel</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/nu-phu"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Nữ Phụ</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/phuong-tay"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Phương Tây</Link></div>
          </div>
          <div className='row'>
            <div className='col-6 border' ><Link
              to={{
                pathname: "/list-truyen/mat-the"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Mạt Thế</Link></div>
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
                pathname: "/list-truyen/dien-van"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Điền Văn</Link></div>
            <div className='col-6 border'><Link
              to={{
                pathname: "/list-truyen/dong-nhan"
              }}
              style={{ textDecoration: 'none', color: "black" }}
            ><img src='../../icon_tag.png' />Đồng Nhân</Link></div>
          </div>

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
    </div>
  );
}

export default App;
