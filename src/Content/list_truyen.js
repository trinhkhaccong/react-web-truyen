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
    return (
      <Link
        to={{
          pathname: "/intro-truyen/" + row.id_ten,
        }}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="row">
          <div className="col-3">
            <img width={90} src={row.link} />
          </div>
          <div className="col-9">
            <div style={{ marginBottom:5,fontWeight:'bold'  }}>
              {row.ten}
            </div>
            <div style={{ marginBottom:5}}>
              {'"'+row.content.slice(0,150) +'..."'}
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
            <p style={{ fontSize: 20, color: "#17a2b8" }}>Danh sách truyện</p>
          </TableHeaderColumn>
        </BootstrapTable>
      )}
    </div>
  );
}
