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
import Select from "react-select";

export default function Content() {
  let location = useLocation();
  var chuong = parseInt(location.pathname.split("/")[3].split("chuong-")[1]);
  const [data, setDataLocation] = useState({});
  const [content, setContent] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const [checkdown, setCheckdown] = useState(false);
  const [chuongnext, setChuongnext] = useState(
    location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
      (chuong + 1).toString()
  );
  const [chuongdown, setChuongdown] = useState(
    location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
      chuong.toString()
  );
  const [options, setOption] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      var chuong = parseInt(
        location.pathname.split("/")[3].split("chuong-")[1]
      );
      console.log(
        location.pathname.slice(0, location.pathname.search("chuong-") + 7) +
          (chuong + 1).toString()
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
        let chuong = [
          { value: "--chon chuong--", label: "-- Chọn Chương -- " },
        ];
        for (var i = 1; i <= res.data.chuong; i++) {
          let ob = {
            value: i,
            label: (
              <Link
                to={
                  location.pathname.slice(
                    0,
                    location.pathname.search("chuong-") + 7
                  ) + i.toString()
                }
                style={{ color: "orange" }}
              >
                Chương {i.toString()}
              </Link>
            ),
          };
          chuong.push(ob);
        }
        setOption(chuong);
      }
      setCheckdata(true);
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
      {checkdata && (
        <div>
          <center style={{ fontSize: 25, fontWeight: "bold", color: "Blue" }}>
            {data.ten}
          </center>
          <center style={{ fontSize: 20, fontWeight: "bold", color: "" }}>
            {data.chuong}
          </center>
          <center>
            <img src="../../pic_so_deep.png" width="40%" margin='10px' className="m-2" />
            <div className="row">
              <center className="col-4">
                <button type="button" class="btn btn-info" disabled={checkdown}>
                  <Link
                    to={{
                      pathname: chuongdown,
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {"<<"}
                  </Link>
                </button>
              </center>
              <center className="col-4">
                <Select defaultValue={options[0]} options={options} />
              </center>
              <center className="col-4">
                <button type="button" class="btn btn-info">
                  <Link
                    to={chuongnext}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {">>"}
                  </Link>
                </button>
              </center>
            </div>
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
      <div className="row">
              <center className="col-4">
                <button type="button" class="btn btn-info" disabled={checkdown} onClick={window.scroll(0,0)}>
                  <Link
                    to={{
                      pathname: chuongdown,
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                   {"<<"}
                  </Link>
                </button>
              </center>
              <center className="col-4">
                <Select defaultValue={options[0]} options={options} />
              </center>
              <center className="col-4">
                <button type="button" class="btn btn-info" onClick={window.scroll(0,0)}>
                  <Link
                    to={chuongnext}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                     {">>"}
                  </Link>
                </button>
              </center>
            </div>
    </div>
  );
}
