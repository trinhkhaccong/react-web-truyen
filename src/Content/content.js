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

export default function Content() {
    
  let location = useLocation();
  var chuong  = parseInt((location.pathname.split("/")[3]).split("chuong-")[1])
  const [data, setDataLocation] = useState({});
  const [content, setContent] = useState([]);
  const [checkdata, setCheckdata] = useState(false);
  const [checkdown,setCheckdown] = useState(false);
  const [chuongnext,setChuongnext]= useState((location.pathname).slice(0,(location.pathname.search("chuong-")+7))+(chuong+1).toString())
  const [chuongdown,setChuongdown]= useState((location.pathname).slice(0,(location.pathname.search("chuong-")+7)).toString())

  useEffect(() => {
    const fetch_data = async () => {
        var chuong  = parseInt((location.pathname.split("/")[3]).split("chuong-")[1])
        console.log((location.pathname).slice(0,(location.pathname.search("chuong-")+7))+(chuong+1).toString())
        setChuongnext((location.pathname).slice(0,(location.pathname.search("chuong-")+7))+(chuong+1).toString())
        setChuongdown((location.pathname).slice(0,(location.pathname.search("chuong-"))+7)+(chuong-1).toString())
        if(location.pathname.split("/")[3] ==='chuong-1')
        {
            setCheckdown(true)
        }
        else
        {
            setCheckdown(false)
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
      console.log(res.data);
      setDataLocation(res.data);
      setContent(res.data.content.split("\n"));
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
              <img src="../../pic_so_deep.png" width='40%' className='m-2'/>
              <div className='row col-9'>
              <center className='col-4'><button type="button" class="btn btn-info" disabled={checkdown}><Link to={chuongdown}>Chương trước</Link></button></center>
              <center className='col-4'><button type="button" class="btn btn-info">Danh sách</button></center>
              <center className='col-4'><button type="button" class="btn btn-info"><Link to={chuongnext}>Chương sau</Link></button></center>
              </div>
              <hr/>
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
    </div>
  );
}
