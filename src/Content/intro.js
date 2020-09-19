// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import ShowMore from "react-show-more";
import axios from "axios";
import { List, Card } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment";
import { Tabs,Pagination } from "antd";
import Form from "react-bootstrap/Form";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function Intro() {
  const [datatruyen, setDatatruyen] = useState([]);
  const [count, setCount] = useState(0);
  const [checkdata, setCheckdata] = useState(false);
  const [data_content, setData_content] = useState({});
  const [content, setContent] = useState([]);
  const [data_huyen_huyen, setDataHuyenHuyen] = useState([]);
  const [current, setCurrent] = useState(1);
  const [chuongshow,setChuongShow] = useState([]);

  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth < 768;

  let location = useLocation();

  useEffect(() => {
    const fetch_data = async () => {
      setCheckdata(false);
      if (localStorage.getItem("ten-truyen") == null) {
        var ten_truyen = location.pathname.split("intro-truyen/")[1];
        localStorage.setItem("ten-truyen", ten_truyen + ";");
      } else {
        var ten_truyen = location.pathname.split("intro-truyen/")[1];
        var key = localStorage.getItem("ten-truyen");
        if (key.search(ten_truyen) < 0) {
          key = key + ten_truyen + ";";
          localStorage.setItem("ten-truyen", key);
        }
      }
      let data;
      data = {
        ten_truyen: location.pathname.split("intro-truyen/")[1],
      };
      let data_huyen_huyen = {
        type: "huyen-huyen",
      };

      let res_intro = await axios({
        method: "post",
        url: "http://localhost:5000/get_content/truyen",
        data: data,
      });

      let res = await axios({
        method: "post",
        url: "http://localhost:5000/get/data_truyen",
        data: data,
      });

      let res_huyen_huyen = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type/home",
        data: data_huyen_huyen,
      });

      setData_content(res_intro.data);
      setContent(res_intro.data.content.split("\n"));
      await setDatatruyen(res.data.data);
      await setCount(res.data.count_index);
      await setDataHuyenHuyen(res_huyen_huyen.data);
      await setChuongShow(res.data.data.slice(0, 30));
      await setCheckdata(true);
    };
    fetch_data();
  }, [location]);

  const onChange = (page) => {
    setCheckdata(false);
    setCurrent(page);
    setChuongShow(datatruyen.slice((page - 1) * 30, page * 30));
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
      {checkdata && (
        <div className="row intro_title">
          <div className="col-2 ">
            <img
              alt={data_content.tac_gia}
              style={{ borderRadius: 20 }}
              className="col-11"
              src={data_content.link}
            />
          </div>
          <div className="col">
            <h3 className="m-2">{data_content.ten}</h3>
            <div
              className="m-2"
              style={{ fontSize: 16, fontWeight: "bold", color: "#17a2b8" }}
            >
              {" "}
              <img src="../../tac_gia.png" width="20px" />
              {data_content.tac_gia}
            </div>
            <div>
              {data_content.the_loai.split("-").map((value2) => (
                <button type="button" class="btn btn-outline-info m-2">
                  {value2}
                </button>
              ))}
            </div>
            <button type="button" class="btn btn-outline-warning m-2">
              Chương {data_content.chuong}
            </button>
            <button type="button" class="btn btn-outline-warning m-2">
              {" "}
              Lượt xem {data_content.luot_xem}
            </button>
            <button type="button" class="btn btn-outline-warning m-2">
              Lượt thích {data_content.luot_thich}
            </button>
            <div className="m-2 doc_truyen">
              <Link
                to={{
                  pathname:
                    "/content-truyen/" + data_content.id_ten + "/chuong-1",
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img src="../../view.png" className="m-2" />
                Đọc truyện
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="m-2">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Giới thiệu" key="1">
            <div className="row">
              <div className="col-8">
                {content.map((value) => {
                  if (value === "")
                    return (
                      <div>
                        <br />
                        <br />
                      </div>
                    );
                  else {
                    return (
                      <div style={{ fontSize: 16, fontWeight: 600 }}>
                        {value.replaceAll("*", "")}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="col thong_bao">Thông Báo</div>
            </div>
          </TabPane>
          <TabPane tab="Danh sách chương" key="2">
            {checkdata && (
              <div>
<List
                grid={{ gutter: 16, column: 3 }}
                dataSource={chuongshow}
                renderItem={(item) => (
                  <List.Item>
                    <Link
                        to={{
                          pathname:
                            "/content-truyen/" +
                            item.id_ten +
                            "/" +
                            item.id_chuong,
                        }}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {item.chuong}
                      </Link>
                      <hr/>
                    
                  </List.Item>
                )}
              />
              <br/>
               <Pagination
              current={current}
              pageSize={30}
              onChange={onChange}
              total={datatruyen.length}
            />
              </div>
              
            )}
            
          </TabPane>
          <TabPane tab="Bình luận" key="3">
            <Form.Label>Viết bình luận</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </TabPane>
        </Tabs>
      </div>
      <hr />
      {
        !isMobile && (<div style={{ padding: 20 }}>
          <p style={{ fontSize: 20, fontWeight: "bold", color: "#17a2b8" }}>
            Truyện tương tự
          </p>
  
          <List
            grid={{ gutter: 16, column: 5 }}
            dataSource={data_huyen_huyen}
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
                      {item.ten}
                    </center>
                  </Link>
                </Card>
              </List.Item>
            )}
          />
        </div>)
      }
      {
        isMobile && (<div style={{ padding: 20 }}>
          <p style={{ fontSize: 20, fontWeight: "bold", color: "#17a2b8",paddingBottom:10 }}>
            Truyện tương tự
          </p>
  
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={data_huyen_huyen.slice(0,10)}
            renderItem={(item) => (
              <List.Item>
                <Card>
                  <Link
                    to={{
                      pathname: "/intro-truyen/" + item.id_ten,
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="row" onClick={()=>window.scroll(0,0)}>
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
        </div>)
      }
    </div>
  );
}
