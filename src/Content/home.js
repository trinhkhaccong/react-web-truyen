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
import ImageSlider from 'ac-react-simple-image-slider';
import History from "../history/history"
export default function Home() {
  const images = [
    { src: "../../tien-hiep.jpg",title: 'Tiên Hiệp' },
    { src: "../../kiem-hiep.jpg",title: 'Kiếm Hiệp'  },
    { src: "../../ngon-tinh.jpg" ,title: 'Ngôn Tình' },
    { src: "../../huyen-huyen.jpg",title: 'Huyền Huyễn'  },
];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10
  };
  const options = {
    //page: 1,  // which page you want to show as default
    sizePerPageList: [ {
      text: '5', value: 5
    }],
    sizePerPage:5,
    page:5
  };
  const [data_tien_hiep, setDatatienhiep] = useState([]);
  const [data_kiem_hiep, setDatakiemhiep] = useState([]);
  const [data_huyen_huyen, setDatatruyenteen] = useState([]);
  const [khac,setKhac] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  let isMobile = (window.innerWidth<= 768);
  let width_window = window.innerWidth

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

      let khac = {
        type: "sac-hiep+di-gioi+he-thong",
      };

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

      await setDatatienhiep(res_tien_hiep.data);
      await setDatakiemhiep(res_kiem_hiep.data);
      await setDatatruyenteen(res_huyen_huyen.data);
      await setKhac(res_khac.data)
      await setCheckdata(true);
    };
    fetch_data();
  }, []);
  const priceFormatter = (cell, row) => {
    let isMobile = (window.innerWidth<= 768);
    let width_window = window.innerWidth
   
    return (
      <Link
        to={{
          pathname: "/intro-truyen/" + row.id_ten,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="row"  >
          <div className="col-3">
            <img width={90} src={row.link} />
          </div>
          <div className="col-9" >
            <div style={{ marginBottom:5,fontWeight:'bold'  }}>
              {row.ten}
            </div>
            <div style={{ marginBottom:5}}>
              {'"'+row.content.replaceAll("*","").slice(0,150) +'..."'}
            </div>
            <div style={{ marginBottom:5}}>
              <img width='20px' src="../tac_gia.png" />
              {row.tac_gia}
            </div>
            <div>
              <img width='20px' src="../list_green.png" style={{marginRight:5}}/>Tổng chương: 
              {" "+row.chuong}
            </div>
          </div>
        </div>
      </Link>
    );
  };
  let len_khac = Math.floor(khac.length/2)
  return (
    <div >
       {!checkdata && (
        <center style={{ paddingTop: "20%" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      )}
       {checkdata && (
        <div >
          <div className='row'>
            <div className='col-7'>
            <ImageSlider height='400px' width={width_window-600} data={images}  duration={5}/>
            </div>
          <div className='col' style={{height:360,overflow:"auto"}}>
          <History/>
            </div>
          </div>
          
         <h4 style={{ fontWeight: "bold", color: "#FFCC00",padding:10,background:'#CCFFFF' }}>
        Tiên Hiệp
      </h4>
      <div style={{paddingRight:30,paddingLeft:30}}>
      <Slider {...settings} >
        {data_tien_hiep.map((value,key) => (
          <div key = {key}>
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
      <br/>
      <hr />

      <h4 style={{ fontWeight: "bold", color: "#FFCC00", padding: 10,background:'#CCFFFF' }}>
        Kiếm Hiệp
      </h4>
      <div style={{paddingRight:30,paddingLeft:30}}>
      <Slider {...settings}>
        {data_kiem_hiep.map((value,key) => (
          <div key ={key}>
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
      <br/>
      <hr/>
      <div className='row'>
        <div className='col-6'><BootstrapTable
         options={ options }
          data={khac.slice(0,len_khac)}
          pagination={true}
          sizePerPage={5}
         
        >
          <TableHeaderColumn
           sizePerPage={5}
            dataField="chuong"
            isKey={true}
            dataFormat={priceFormatter}
          >
            <p style={{ fontSize: 20, color: "#17a2b8",textAlign:'center' }}>Một số truyện khác</p>
          </TableHeaderColumn>
        </BootstrapTable></div>
        <div className='col-6'><BootstrapTable
         options={ options }
          data={khac.slice(len_khac,khac.length-1)}
          pagination={true}
          sizePerPage={5}
         
        >
          <TableHeaderColumn
           sizePerPage={5}
            dataField="chuong"
            isKey={true}
            dataFormat={priceFormatter}
          >
            <p style={{ fontSize: 20, color: "#17a2b8",textAlign:'center' }}>Một số truyện khác</p>
          </TableHeaderColumn>
        </BootstrapTable></div>
        </div>
      
        </div>
      )}
      
    </div>
  );
}
