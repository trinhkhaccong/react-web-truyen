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
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
export default function ListTruyen() {
  const list_the_loai =[{
    id_the_loai:'tien-hiep',label:"tiên hiệp"
  },
  {
    id_the_loai:'kiem-hiep',label:"kiếm hiệp"
  },
  {
    id_the_loai:'huyen-huyen',label:"huyền huyễn"
  },
  {
    id_the_loai:'ngon-tinh',label:"ngôn tình"
  },
  {
    id_the_loai:'sac-hiep',label:"sắc hiệp"
  },
  {
    id_the_loai:'di-gioi',label:"dị giới"
  },
  {
    id_the_loai:'do-thi',label:"đô thị"
  },
  {
    id_the_loai:'huyen-ao',label:"huyền ảo"
  },
  {
    id_the_loai:'trinh-tham',label:"trinh thám"
  },
  {
    id_the_loai:'co-dai',label:"cổ đại"
  },
  {
    id_the_loai:'he-thong',label:"hệ thống"
  },
  {
    id_the_loai:'khoa-huyen',label:"khoa huyễn"
  },
  {
    id_the_loai:'quan-su',label:"quân sự"
  },
  {
    id_the_loai:'bach-hop',label:"bách hợp"
  }]
  const [data, setData] = useState([]);
  const [checkdata, setCheckdata] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setCheckdata(false);
    console.log(location);
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

      let res = await axios({
        method: "post",
        url: "http://localhost:5000/get_list/type",
        data: data,
      });
      console.log(res.data);
      await setData(res.data);
      await setCheckdata(true);
    };
    fetch_data();
  }, [location]);

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
        <div className="row" style={isMobile?{width:width_window-30}:{width:width_window-360}} >
          <div className="col-3">
            <img width={90} src={row.link} />
          </div>
          <div className="col-9" style={isMobile?{fontSize:14}:{fontSize:16}}>
            <div style={{ marginBottom:5,fontWeight:'bold' ,paddingLeft:10 }}>
              {row.ten}
            </div>
            <div style={{ marginBottom:5,paddingLeft:10}}>
              {'"'+row.content.replaceAll("*","").slice(0,150) +'..."'}
            </div>
            <div style={{ marginBottom:5,paddingLeft:10}}>
              <img width='20px' src="../tac_gia.png" />
              {row.tac_gia}
            </div>
            <div style={{ marginBottom:5,paddingLeft:10}}>
              <img width='20px' src="../list_green.png" style={{marginRight:5}}/>Tổng chương: 
              {" "+row.chuong}
            </div>
          </div>
        </div>
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
      {checkdata && (
        <BootstrapTable
          data={data}
          striped={true}
          hover={true}
          pagination={true}
        >
          <TableHeaderColumn
            dataField="chuong"
            isKey={true}
            dataFormat={priceFormatter}
          >
            <p style={{ fontSize: 20, color: "#17a2b8" }}>Danh sách truyện {list_the_loai.map(value=>{if(value.id_the_loai ===location.pathname.split("list-truyen/")[1] )
          {
            return(value.label)
          }})} </p>
          </TableHeaderColumn>
        </BootstrapTable>
      )}
    </div>
  );
}
