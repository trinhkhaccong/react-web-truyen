// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import { List, Card,Pagination } from "antd";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default function ListSeach() {
  const [data, setData] = useState([]);
  const [checkdata, setCheckdata] = useState(false);

  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth < 768;

  let location = useLocation();
  useEffect(() => {
    setCheckdata(false);
    console.log(location);
    const fetch_data = async () => {
      let data = {
        search: location.pathname.split("list-search/")[1],
        };
      let res = await axios({
        method: "post",
        url: "http://localhost:5000/get/search",
        data: data,
      });
      console.log(res.data);
      await setData(res.data);
      await setCheckdata(true);
    };
    fetch_data();
  }, [location]);


  return (
    <div>
      {!checkdata && (
        <center style={{ paddingTop: "20%" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      )}
      {checkdata && !isMobile&& (
        <div>
         <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 10,
              color: "#17a2b8",
              textAlign: "center",
            }}
          >
           Danh sách truyện tìm kiếm
          </p>
        <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
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
        </div>
      )}

{checkdata && isMobile&& !width_window &&(
        <div>
         <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 10,
              color: "#17a2b8",
              textAlign: "center",
            }}
          >
           Danh sách truyện tìm kiếm
          </p>
        <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={data}
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
        </div>
      )}
{checkdata && isMobile&& width_window &&(
        <div>
         <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              paddingBottom: 10,
              color: "#17a2b8",
              textAlign: "center",
            }}
          >
           Danh sách truyện tìm kiếm
          </p>
        <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={data}
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
          <br />
        </div>
      )}
    </div>
  );
}
