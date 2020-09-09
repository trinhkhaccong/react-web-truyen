import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
export default function History() {
  const [data_history, setDataHistory] = useState([]);
  useEffect(() => {
    const get_history = async () => {
      if (localStorage.getItem("ten-truyen") != null) {
        let data = {
          ten_truyen: localStorage.getItem("ten-truyen"),
        };
        let res = await axios({
          method: "post",
          url: "http://localhost:5000/get/history",
          data: data,
        });
        setDataHistory(res.data);
        console.log(res.data);
      }
    };
    get_history();
  }, []);
  return (
    <div style={{ padding: 5 }}>
      <center className="" style={{ fontWeight: "bold", padding: 5 ,fontSize:20}}>
        Lịch Sử
      </center>
      <hr />
      {data_history.map((value) => (
        <Link
          to={{
            pathname: "/intro-truyen/" + value.id_ten,
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="row"
            style={{ background: "#EEEEEE", marginBottom: 10 }}
          >
            <div className="col-3">
              <img width="80%" src={value.link} />
            </div>
            <div className="col">
              <div>Truyện: {value.ten}</div>
              <div>Tác giả: {value.tac_gia}</div>
              <div>Chương: {value.chuong}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
