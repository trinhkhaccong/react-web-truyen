// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import HorizontalScroller from "react-horizontal-scroll-container";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import SimpleImageSlider from "react-simple-image-slider";
import ImageSlider from "ac-react-simple-image-slider";
import History from "../history/history";
import { List, Card, Pagination, Carousel } from "antd";
export default function Home() {
  const images = [
    { src: "../../tien-hiep.jpg", link: "tien-hiep" },
    { src: "../../kiem-hiep.jpg", link: "kiem-hiep" },
    { src: "../../ngon-tinh.jpg", link: "ngon-tinh" },
    { src: "../../huyen-huyen.jpg", link: "huyen-huyen" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
  };
  const options = {
    //page: 1,  // which page you want to show as default
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
    ],
    sizePerPage: 5,
    page: 5,
  };
  const [data_tien_hiep, setDatatienhiep] = useState([]);
  const [data_kiem_hiep, setDatakiemhiep] = useState([]);
  const [data_huyen_huyen, setDatatruyenteen] = useState([]);
  const [khac, setKhac] = useState([]);
  const [khacshow, setKhacShow] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const [data_quan_tam, setDataQuanTam] = useState([]);
  const [current, setCurrent] = useState(1);

  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth < 768;

  useEffect(() => {
    setCheckdata(false);
    const fetch_data = async () => {
      let data_tien_hiep = {
        type: "tien-hiep",
      };
      let data_kiem_hiep = {
        type: "kiem-hiep",
      };
      let data_huyen_huyen = {
        type: "huyen-huyen",
      };
      let khac
      if(isMobile)
      {
        khac = {
          type: "tien-hiep+huyen-huyen+kiem-hiep+di-gioi+he-thong",
        };
      }
      else
      {
        khac = {
          type: "sac-hiep+di-gioi+he-thong",
        };
      }
      

      let res_tien_hiep = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/home",
        data: data_tien_hiep,
      });

      let res_kiem_hiep = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/home",
        data: data_kiem_hiep,
      });

      let res_huyen_huyen = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/home",
        data: data_huyen_huyen,
      });
      
      let res_khac = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/nomal",
        data: khac,
      });
      let data_title = [];
      if (localStorage.getItem("ten-truyen") != null) {
        let data = {
          ten_truyen: localStorage.getItem("ten-truyen"),
        };
        let res = await axios({
          method: "post",
          url: "http://localhost:5000/get/history",
          data: data,
        });
        res.data.map((value, index) => {
          if (index < 20) {
            let ob = {
              title: value.ten,
              link: value.link,
              id_ten: value.id_ten,
            };
            data_title.push(ob);
          }
        });
      }

      await setDataQuanTam(data_title);
      await setDatatienhiep(res_tien_hiep.data);
      await setDatakiemhiep(res_kiem_hiep.data);
      await setDatatruyenteen(res_huyen_huyen.data);
      await setKhac(res_khac.data);
      await setKhacShow(res_khac.data.slice(0, 10));
      await setCheckdata(true);
    };
    fetch_data();
  }, []);

  const onChange = (page) => {
    setCheckdata(false);
    setCurrent(page);
    setKhacShow(khac.slice((page - 1) * 10, page * 10));
    setCheckdata(true);
  };

  let len_khac = Math.floor(khac.length / 2);
  return (
    <div>
      {!checkdata && (
        <center style={{ paddingTop: "20%" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      )}
      {checkdata && !isMobile && (
        <div>
          <div className="row">
            <div className="col-7">
              <Carousel autoplay autoplaySpeed={1000*4}>
                {images.map((value) => (
                  <Link
                  to={{
                    pathname: "/list-truyen/"+value.link,
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                      <img height= {450} width={'100%'} src={value.src} />
                </Link>
                  
                ))}
              </Carousel>
            </div>
            <div className="col" style={{ height: 420, overflow: "auto" }}>
              <History />
            </div>
          </div>

          <h4
            style={{
              fontWeight: "bold",
              color: "#FFCC00",
              padding: 10,
              background: "#CCFFFF",
            }}
          >
            Tiên Hiệp
          </h4>
          <div style={{ paddingRight: 30, paddingLeft: 30 }}>
            <Slider {...settings}>
              {data_tien_hiep.map((value, key) => (
                <div key={key}>
                   <Link
                    to={{
                      pathname: "/intro-truyen/" + value.id_ten,
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                  <img width="100%" style={{ padding: 5 }} src={value.link} />
                 
                    <center style={{ fontWeight: "bold", color: "#fd7e14" }}>
                      {value.ten}
                    </center>
                  </Link>
                  <center style={{ fontWeight: "bold", color: "#17a2b8" }}>
                    Tác giả: {value.tac_gia}
                  </center>
                </div>
              ))}
            </Slider>
          </div>
          <br />
          <hr />

          <h4
            style={{
              fontWeight: "bold",
              color: "#FFCC00",
              padding: 10,
              background: "#CCFFFF",
            }}
          >
            Kiếm Hiệp
          </h4>
          <div style={{ paddingRight: 30, paddingLeft: 30 }}>
            <Slider {...settings}>
              {data_kiem_hiep.map((value, key) => (
                <div key={key}>
                   <Link
                    to={{
                      pathname: "/intro-truyen/" + value.id_ten,
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                  <img width="100%" style={{ padding: 5 }} src={value.link} />
                 
                    <center style={{ fontWeight: "bold", color: "#fd7e14" }}>
                      {value.ten}
                    </center>
                  </Link>
                  <center style={{ fontWeight: "bold", color: "#17a2b8" }}>
                    Tác giả: {value.tac_gia}
                  </center>
                </div>
              ))}
            </Slider>
          </div>
          <br />
          <hr />
          <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 10,
              color: "#17a2b8",
              textAlign: "center",
            }}
          >
            Một số truyện khác
          </p>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={khacshow}
            renderItem={(item) => (
              <List.Item>
                <Card>
                  <Link
                    to={{
                      pathname: "/intro-truyen/" + item.id_ten,
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="row">
                      <img
                        className="zoom_image col-4"
                        src={item.link}
                        onClick={() => window.scroll(0, 0)}
                      />
                      <div className="col">
                        <div
                          style={{
                            paddingLeft: 20,
                            fontWeight: "bold",
                            color: "#17a2b8",
                          }}
                        >
                          {item.ten}
                        </div>
                        <div style={{ paddingLeft: 20 }}>
                          {'"' +
                            item.content.replaceAll("*", "").slice(0, 150) +
                            '..."'}
                        </div>
                        <div style={{ paddingLeft: 20, fontWeight: "bold" }}>
                          <img src="../../tac_gia.png" width="20px" />
                          {item.tac_gia}
                        </div>
                        <div style={{ paddingLeft: 20, fontWeight: "bold" }}>
                          Chương: {item.chuong}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </List.Item>
            )}
          />
          <br />
          <Pagination
            current={current}
            onChange={onChange}
            total={khac.length}
          />

          <hr />
          <div style={{ padding: 20 }}>
            <p
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#17a2b8",
                paddingBottom: 20,
              }}
            >
              Có thể bạn quan tâm
            </p>
            <List
              grid={{ gutter: 16, column: 6 }}
              dataSource={data_quan_tam}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <Link
                      to={{
                        pathname: "/intro-truyen/" + item.id_ten,
                      }}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <img
                        className="zoom_image"
                        src={item.link}
                        onClick={() => window.scroll(0, 0)}
                      />
                      <center
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#17a2b8",
                          paddingTop: 10,
                        }}
                      >
                        {item.title}
                      </center>
                    </Link>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      )}

{checkdata && isMobile && (
        <div>
          <div >
           
          
            <div style={{ height: 420, overflow: "auto" }}>
              <History />
            </div>
          </div>
          <br />
          <hr />
          <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 10,
              color: "#17a2b8",
              textAlign: "center",
            }}
          >
            Một số truyện đề cử
          </p>
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={khacshow}
            renderItem={(item) => (
              <List.Item>
                <Card>
                  <Link
                    to={{
                      pathname: "/intro-truyen/" + item.id_ten,
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="row">
                      <img
                        className="zoom_image"
                        width={width_window?'30%':'10%'}
                        src={item.link}
                        onClick={() => window.scroll(0, 0)}
                      />
                      <div className="col">
                        <div
                          style={{
                            paddingLeft: 20,
                            fontWeight: "bold",
                            color: "#17a2b8",
                          }}
                        >
                          {item.ten}
                        </div>
                        <div style={{ paddingLeft: 20 }}>
                          {'"' +
                            item.content.replaceAll("*", "").slice(0, 150) +
                            '..."'}
                        </div>
                        <div style={{ paddingLeft: 20, fontWeight: "bold" }}>
                          <img src="../../tac_gia.png" width="20px" />
                          {item.tac_gia}
                        </div>
                        <div style={{ paddingLeft: 20, fontWeight: "bold" }}>
                          Chương: {item.chuong}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </List.Item>
            )}
          />
          <br />
          <Pagination
            current={current}
            onChange={onChange}
            total={khac.length}
          />

          <hr />
        </div>
      )}

    </div>
  );
}
