// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function TheLoai() {
  return (
    <div className="dropdown">
      <span>
        <img src="../../icon_tag_white.png" />
        Thể loại
      </span>
      <div className="dropdown-content">
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "tien_hiep" },
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
              pathname: "/list-truyen",
              state: { key: "kiem_hiep" },
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
              pathname: "/list-truyen",
              state: { key: "ngon_tinh" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Ngôn Tình
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "truyen_teen" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Truyện Teen
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "do_thi" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Đô Thị
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "quan_su" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Quân Sự
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "lich_su" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Lịch Sử
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "xuyen_khong" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Xuyên Không
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "truyen_ma" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Truyện Ma
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "trinh_tham" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Trinh Thám
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "huyen_huyen" },
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
              pathname: "/list-truyen",
              state: { key: "khoa_huyen" },
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
              pathname: "/list-truyen",
              state: { key: "di_gioi" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Dị Giới
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "vong_du" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Võng Du
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "truyen_ngan" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Truyện Ngắn
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "truyen_cuoi" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Truyện Cười
            </button>
          </Link>
        </div>
        <div className="row">
          <Link
            className="col mr-1"
            to={{
              pathname: "/list-truyen",
              state: { key: "tieu_thuyet" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Tiểu Thuyết
            </button>
          </Link>
          <Link
            className="col"
            to={{
              pathname: "/list-truyen",
              state: { key: "review" },
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button className="btn btn-outline-info col" style={{ margin: 1 }}>
              {" "}
              Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
