// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { Tabs, Select } from "antd";
import Form from "react-bootstrap/Form";
const { TabPane } = Tabs;
export default function Content() {
  let location = useLocation();
  var chuong = parseInt(location.pathname.split("/")[3].split("chuong-")[1]);
  const [pressedKeys, setPressedKeys] = useState([]);
  const [data, setDataLocation] = useState({});
  const [content, setContent] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const [checkdown, setCheckdown] = useState(false);
  const [chuongnext, setChuongnext] = useState();
  const [chuongdown, setChuongdown] = useState();
  const [options, setOption] = useState([]);

  let isMobile = window.innerWidth <= 768;
  let width_window = window.innerWidth < 768;
  const downHandler = ({ key }) => {
    if (key === "ArrowLeft") {
      if (chuong == 1) {
        window.open(
          location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
            chuong.toString(),
          "_parent"
        );
      }
      if (chuong > 1) {
        window.open(
          location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
            (chuong - 1).toString(),
          "_parent"
        );
      }
    }
  };

  const upHandler = ({ key }) => {
    if (key === "ArrowRight") {
      window.open(
        location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
          (chuong + 1).toString(),
        "_parent"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    window.scroll(0,0)
    const fetch_data = async () => {
      var chuong = parseInt(
        location.pathname.split("/")[3].split("chuong-")[1]
      );
      setChuongnext(
        location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
          (chuong + 1).toString()
      );
      if (chuong > 1) {
        setChuongdown(
          location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
            (chuong - 1).toString()
        );
      }
      if (location.pathname.split("/")[3] === "chuong-1") {
        setCheckdown(true);
      } else {
        setCheckdown(false);
      }
      let data = {
        id_ten: location.pathname.split("/")[2],
        id_chuong: location.pathname.split("/")[3],
      };
      let res = await axios({
        method: "post",
        url: "http://localhost:5000/get/truyen",
        data: data,
      });
      if (res.data.length == 0) {
        setContent(["Chưa ra chương mới !"]);
      } else {
        setDataLocation(res.data.data);
        setContent(res.data.data.content.split("\n"));
        let chuong = [];
        for (var i = 1; i <= res.data.chuong; i++) {
          let ob = {
            value: i,
            label: "Chương " + i.toString(),
          };
          chuong.push(ob);
        }
        setOption(chuong);
      }
      setCheckdata(true);
    };
    fetch_data();
  }, [location]);

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

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
        <div className={isMobile?"view_conten_mobile":"view_conten"}>
          <center style={{ fontSize: 25, fontWeight: "bold", color: "Blue" }}>
            {data.ten}
          </center>
          <center style={{ fontSize: 20, fontWeight: "bold", color: "" }}>
            {data.chuong}
          </center>
          <center>
            {
              
            }
            <img
              src="../../pic_so_deep.png"
              width={isMobile?"300px":"500px"}
              margin="10px"
              className="m-2"
            />
            <center>
              <button
                type="button"
                class="btn btn-info"
                disabled={checkdown}
                onClick={() => window.open(chuongdown, "_parent")}
              >
                {"<<"}
              </button>
              <Select
                className="ml-5 mr-5 mt-1"
                showSearch
                style={{ width: 150 }}
                placeholder="Chọn Chương"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {options.map((value) => (
                  <Option value={value.label}>
                    <Link
                      style={{ width: 150, textAlign: "center" }}
                      to={
                        location.pathname.slice(
                          0,
                          location.pathname.search("chuong-") + 7
                        ) + value.value.toString()
                      }
                      style={{ fontWeight: "bold", textDecoration: "none" }}
                    >
                      <center>{value.label}</center>
                    </Link>
                  </Option>
                ))}
              </Select>
              <button
                type="button"
                class="btn btn-info"
                onClick={() => window.open(chuongnext, "_parent")}
              >
                {">>"}
              </button>
            </center>
            <hr />
          </center>
          <div>
            {content.map((value) => {
              if (value == "") {
                return <br />;
              } else
                return <div style={{ padding: 10, fontSize: 20 }}>{value}</div>;
            })}
          </div>
        </div>
      )}
      <center className="m-4">
        <button
          type="button"
          class="btn btn-info"
          disabled={checkdown}
          onClick={() => window.open(chuongdown, "_parent")}
        >
          {"<<"}
        </button>
        <Select
          className="ml-5 mr-5 mt-1"
          showSearch
          style={{ width: 150 }}
          placeholder="Chọn Chương"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {options.map((value) => (
            <Option value={value.label}>
              <Link
                style={{ width: 150, textAlign: "center" }}
                to={
                  location.pathname.slice(
                    0,
                    location.pathname.search("chuong-") + 7
                  ) + value.value.toString()
                }
                style={{ fontWeight: "bold", textDecoration: "none" }}
              >
                <center>{value.label}</center>
              </Link>
            </Option>
          ))}
        </Select>
        <button
          type="button"
          class="btn btn-info"
          onClick={() => window.open(chuongnext, "_parent")}
        >
          {">>"}
        </button>
      </center>
      <div style={{ padding: 20 }}>
        <Tabs>
          <TabPane tab="Bình luận" key="3">
            <Form.Label>Viết bình luận</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
