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

export default function Home() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    background:'red'
  };
  const [data_tien_hiep, setDatatienhiep] = useState([]);
  const [data_kiem_hiep, setDatakiemhiep] = useState([]);
  const [data_truyen_teen, setDatatruyenteen] = useState([]);
  const [checkdata, setCheckdata] = useState(false);

  useEffect(() => {
    setCheckdata(false);
    const fetch_data = async () => {
      let data_tien_hiep = {
        type: "tien-hiep",
      };
      let data_kiem_hiep = {
        type: "kiem-hiep",
      };
      let data_truyen_teen = {
        type: "huyen-huyen",
      };

      let res_tien_hiep = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type",
        data: data_tien_hiep,
      });

      let res_kiem_hiep = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type",
        data: data_kiem_hiep,
      });

      let res_truyen_teen = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type",
        data: data_truyen_teen,
      });

      console.log(res_tien_hiep.data);
      await setDatatienhiep(res_tien_hiep.data);
      await setDatakiemhiep(res_kiem_hiep.data);
      await setDatatruyenteen(res_truyen_teen.data);
      await setCheckdata(true);
    };
    fetch_data();
  }, []);

  return (
    <div>
      <h3 style={{ fontWeight: "bold", color: "#FFCC00",padding:10,background:'#CCFFFF' }}>
        Tiên Hiệp
      </h3>
      <Slider {...settings}>
        {data_tien_hiep.map((value) => (
          <div>
             <img width="100%" style={{ padding: 5 }} src={value.link} />
             <Link 
             to={{
               pathname: "/intro-truyen/" + value.id_ten,
             }}
             style={{ textDecoration: "none", color: "black" }}>
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
      <hr />

      <h3 style={{ fontWeight: "bold", color: "#FFCC00", padding: 10,background:'#CCFFFF' }}>
        Kiếm Hiệp
      </h3>
      <Slider {...settings}>
        {data_kiem_hiep.map((value) => (
          <div>
            <img width="100%" style={{ padding: 5 }} src={value.link} />
            <Link 
                  to={{
                    pathname: "/intro-truyen/" + value.id_ten,
                  }}
                  style={{ textDecoration: "none", color: "black" }}>
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
      <hr/>
      <h3 style={{ fontWeight: "bold", color: "#FFCC00", padding: 10,background:'#CCFFFF' }}>
        Huyền Huyễn
      </h3>
      <Slider {...settings}>
        {data_truyen_teen.map((value) => (
          <div>
            <img width="100%" style={{ padding: 5 }} src={value.link} />
            <Link 
                  to={{
                    pathname: "/intro-truyen/" + value.id_ten,
                  }}
                  style={{ textDecoration: "none", color: "black" }}>
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
  );
}
