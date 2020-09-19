import React from 'react';


export default  function GioiThieu()
{
  return(<div  style={{color:'black',background:"#DDDDDD"}}>
       <center style={{padding:40}}>
       <img style={{cursor:'pointer'}} width={160} height ={130} src={require("./logo.png")} onClick={()=>window.open("/","_parent")}/>
       </center>
       <center style={{padding:10,fontSize:25,fontWeight:400,color:"#fd7e14"}}>Mê Truyện là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...</center>
  </div>)
}
