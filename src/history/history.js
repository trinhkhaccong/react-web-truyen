import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowMore from 'react-show-more';
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
        console.log("setDataHistory",res.data);
      }
    };
    get_history();
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <center className="" style={{ fontWeight: "bold" ,fontSize:20}}>
        Lịch Sử
      </center>
      <hr />
     
      {data_history.map((value,key) => (
        <Link
        key = {key}
          to={{
            pathname: "/intro-truyen/" + value.id_ten,
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="row"
            style={{ background: "#EEEEEE", marginBottom: 10 }}
          >
            <div className="col-2">
              <img width="70%" src={value.link} />
            </div>
            <div className="col">
              <div style={{fontWeight:'bold'}}>{value.ten}</div>
              <div>chương: {value.chuong}</div>
              {
                value.the_loai.split("-").map(value2=>(<button type="button" className="btn btn-primary btn-sm m-1" >{value2}</button>))
              }
            </div>
          </div>
        </Link>
      ))}
     
    </div>
  );
}
