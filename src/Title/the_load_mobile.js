// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function TheLoaiMobile() {
  return (
    
     
      <div style={{width:290}}>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/tien-hiep",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button
              className="btn btn-outline-info col-12"
              style={{ margin: 1 }}
            >
              {" "}
              Tiên Hiệp
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/kiem-hiep",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button
              className="btn btn-outline-info col-12"
              style={{ margin: 1 }}
            >
              {" "}
              Kiếm Hiệp
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/huyen-huyen",

            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Huyền Huyễn
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/ngon-tinh",

            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Ngôn Tình
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/sac-hiep",

            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
             Sắc Hiệp
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/di-gioi",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
             Dị Giới
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/do-thi",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Đô thị
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/huyen-ao"
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Huyền Ảo
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/trinh-tham",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Trinh Thám
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/co-dai",

            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Cổ Đại
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/he-thong",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Hệ Thống
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/khoa-huyen",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Khoa Huyễn
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen/quan-su",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Quân Sự
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen/bach-hop",
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
             Bách Hợp
            </button>
          </Link>
        </div>
      </div>
    
  );
}
