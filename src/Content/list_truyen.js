// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import { List, Card, Pagination } from "antd";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
export default function ListTruyen() {
  const list_the_loai = [
    {
      id_the_loai: "tien-hiep",
      label: "tiên hiệp",
    },
    {
      id_the_loai: "kiem-hiep",
      label: "kiếm hiệp",
    },
    {
      id_the_loai: "huyen-huyen",
      label: "huyền huyễn",
    },
    {
      id_the_loai: "ngon-tinh",
      label: "ngôn tình",
    },
    {
      id_the_loai: "sac-hiep",
      label: "sắc hiệp",
    },
    {
      id_the_loai: "di-gioi",
      label: "dị giới",
    },
    {
      id_the_loai: "do-thi",
      label: "đô thị",
    },
    {
      id_the_loai: "huyen-ao",
      label: "huyền ảo",
    },
    {
      id_the_loai: "trinh-tham",
      label: "trinh thám",
    },
    {
      id_the_loai: "co-dai",
      label: "cổ đại",
    },
    {
      id_the_loai: "he-thong",
      label: "hệ thống",
    },
    {
      id_the_loai: "khoa-huyen",
      label: "khoa huyễn",
    },
    {
      id_the_loai: "quan-su",
      label: "quân sự",
    },
    {
      id_the_loai: "bach-hop",
      label: "bách hợp",
    },
  ];
  const [data, setData] = useState([]);
  const [data_show, setDataShow] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const [current, setCurrent] = useState(1);
  const [currentkhac, setCurrentKhac] = useState(1);
  const [khac,setKhac] = useState([]);
  const [khacshow,setKhacShow] = useState([]);
  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth < 768;
  
  let location = useLocation();
  useEffect(() => {
    setCheckdata(false);
    window.scroll(0,0)
    const fetch_data = async () => {
      let data;
      if (location.state == undefined) {
        data = {
          type: location.pathname.split("list-truyen/")[1],
        };
      } else {
        data = {
          type: location.state.key,
        };
      }

      let khac = {
        type: "huyen-ao+di-gioi+co-dai",
      };

      let res = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type",
        data: data,
      });

      let res_khac = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/nomal",
        data: khac,
      });

      await setKhac(res_khac.data)
      await setData(res.data);
      await setDataShow(res.data.slice(0, 10));
      await setKhacShow(res_khac.data.slice(0,10))
      await setCheckdata(true);
    };
    fetch_data();
  }, [location]);

  const onChange = (page) => {
    setCheckdata(false);
    setCurrent(page);
    setDataShow(data.slice((page - 1) * 10, page * 10));
    setCheckdata(true);
  };

  const onChangeKhac = (page) => {
    setCheckdata(false);
    setCurrentKhac(page);
    setKhacShow(khac.slice((page - 1) * 10, page * 10));
    setCheckdata(true);
  };
  
  return (
    <div>
      {!checkdata && (
        <center style={{ paddingTop: "20%" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      )}
      {checkdata && !isMobile &&(
        <div>
          <center className="title_img">
            <h1 style={{ color: "blue", padding: 20, fontWeight: "1000" }}>
              Danh sách truyện{" "}
              {list_the_loai.map((value) => {
                if (
                  value.id_the_loai ===
                  location.pathname.split("list-truyen/")[1]
                ) {
                  return value.label;
                }
              })}
            </h1>{" "}
          </center>

          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data_show}
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
                        <div style={{ paddingLeft: 20,fontWeight:'bold',color:"#17a2b8" }}>{item.ten}</div>
                        <div style={{ paddingLeft: 20 }}>
                          {'"' +
                            item.content.replaceAll("*", "").slice(0, 150) +
                            '..."'}
                        </div>
                        <div style={{ paddingLeft: 20 ,fontWeight:'bold'}}><img src="../../tac_gia.png" width="20px" />{item.tac_gia}</div>
                        <div style={{ paddingLeft: 20 ,fontWeight:'bold'}}>Chương: {item.chuong}</div>
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
            total={data.length}
          />
        <br/>
        <hr/>
          <div style={{padding:20}}>
                  <p style={{fontSize:25,fontWeight:'bold',color:"#17a2b8",paddingBottom:20}}>
                Có thể bạn quan tâm
                  </p>
                  <div className='row'>
                    <div className='col-9' style={{marginRight:20}}> 
                    <List
            grid={{ gutter: 16, column: 5 }}
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
                    
                      <img
                        className="zoom_image"
                        src={item.link}
                        onClick={() => window.scroll(0, 0)}
                      />
                     
                        <div style={{ fontWeight:'bold',color:"#17a2b8" ,marginTop:15}}>{item.ten}</div>
                        <div style={{ fontWeight:'bold'}}><img src="../../tac_gia.png" width="20px" />{item.tac_gia}</div>
                        <div style={{ fontWeight:'bold'}}>Chương: {item.chuong}</div>
                      
                  </Link>
                </Card>
              </List.Item>
            )}
          />
          <br />
          <Pagination
            current={currentkhac}
            onChange={onChangeKhac}
            total={khac.length}
          />
        <br/>
                    </div>
                    
                    <div className="col thong_bao">Thông Báo</div>
                   
                  </div>
                 
            </div>
        </div>
      )}

{checkdata && isMobile && (
        <div>
          <center className="title_img">
            <h1 style={{ color: "blue", padding: 20, fontWeight: "1000" }}>
              Danh sách truyện{" "}
              {list_the_loai.map((value) => {
                if (
                  value.id_the_loai ===
                  location.pathname.split("list-truyen/")[1]
                ) {
                  return value.label;
                }
              })}
            </h1>{" "}
          </center>

          <List
            grid={{ gutter: 16, column: width_window?1:2 }}
            dataSource={data_show}
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
                        <div style={{ paddingLeft: 20,fontWeight:'bold',color:"#17a2b8" }}>{item.ten}</div>
                        <div style={{ paddingLeft: 20 }}>
                          {'"' +
                            item.content.replaceAll("*", "").slice(0, 150) +
                            '..."'}
                        </div>
                        <div style={{ paddingLeft: 20 ,fontWeight:'bold'}}><img src="../../tac_gia.png" width="20px" />{item.tac_gia}</div>
                        <div style={{ paddingLeft: 20 ,fontWeight:'bold'}}>Chương: {item.chuong}</div>
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
            total={data.length}
          />
        <br/>
        
                   
        
        </div>
      )}

    </div>
  );
}
