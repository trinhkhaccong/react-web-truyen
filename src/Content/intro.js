// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState, useEffect } from "react";
import ShowMore from 'react-show-more';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import moment from "moment"

export default function Intro() {
  const [datatruyen, setDatatruyen] = useState([]);
  const [count, setCount] = useState(0);
  const [checkdata, setCheckdata] = useState(false);
  const [data_content, setData_content] = useState({});
  const [content, setContent] = useState([]);

  const mRenderer = (row) => {
    return <a>aa</a>;
  };
  let columns = [
    {
      name: "chuong",
      renderer: (row) => (
        <Link
          to={{
            pathname: "/content-truyen/" + row.id_ten + "/" + row.id_chuong,
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          {row.chuong}
        </Link>
      ),
    },
  ];
  let location = useLocation();
 
  useEffect(() => {
    setCheckdata(false);
    const fetch_data = async () => {
      if(localStorage.getItem("ten-truyen") == null)
      {
        var ten_truyen = location.pathname.split("intro-truyen/")[1]
        localStorage.setItem("ten-truyen",ten_truyen+";")
      }
      else
      {
        var ten_truyen = location.pathname.split("intro-truyen/")[1]
        var key = localStorage.getItem("ten-truyen")
        if(key.search(ten_truyen)<0)
        {
          key = key+ten_truyen+";"
          localStorage.setItem("ten-truyen",key)
        }
              
      }
      let data;
      data = {
        ten_truyen: location.pathname.split("intro-truyen/")[1],
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
      setData_content(res_intro.data);
      setContent(res_intro.data.content.split("\n"));
      await setDatatruyen(res.data.data);
      await setCount(res.data.count_index);
      await setCheckdata(true);
    };
    fetch_data();
  }, [location]);

  const priceFormatter = (cell, row) => {
    return (
      <Link
        to={{
          pathname: "/content-truyen/" + row.id_ten + "/" + row.id_chuong,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        {cell}
      </Link>
    );
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
       <center style={{ color: "blue", fontWeight: "bold", fontSize: 22 }}>
            {data_content.ten}
          </center>
          <hr />
      <div className="row">
        <div className="col-3">
          <img className="col-11 mb-3" src={data_content.link} />
          <div style={{fontWeight:'bold'}}className='m-1'>
            <img width={25} height={25}src="../tac_gia.png" /> {data_content.tac_gia}
          </div>
          <div className='m-1'>
          <img width={25} height={25}src="../loading.png" />

            {moment(data_content.date).format("DD-MM-YYYY")}
          </div>
        </div>
        <div className="col">
         
          <p>
          <ShowMore
                lines={8}
                more='Show more'
                less='Show less'
                anchorClass=''
            >
            {content.map((value) => {
              if (value == "") return <br />;
              else {
                return <div>{value.replaceAll("*","")}</div>;
              }
            })}
            </ShowMore>
          </p>
        </div>
      </div>
      <hr />
      {checkdata && (
        <BootstrapTable
          data={datatruyen}
          pagination={true}
        >
          <TableHeaderColumn
            dataField="chuong"
            isKey={true}
            dataFormat={priceFormatter}
          >
            <p style={{ fontSize: 20, color: "#17a2b8" }}>
              Danh sách các chương
            </p>
          </TableHeaderColumn>
        </BootstrapTable>
      )}
    </div>
  );
}
