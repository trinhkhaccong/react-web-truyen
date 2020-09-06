// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from 'react';


export default function SapXep() {
    return (<div className="dropdown">
        <span><img src='../../list_white.png' style={{margin:2}}/>Sắp xếp</span>
        <div className="dropdown-content">
            <div className='row' >
                <button className="btn btn-outline-danger col" style={{margin:1}}> Truyện Vip</button>
                <button className="btn btn-outline-info col" style={{margin:1}}> Mới Cập Nhật</button>
            </div>
            <div className='row' >
                <button className="btn btn-outline-info col" style={{margin:1}}> Mới Đăng</button>
                <button className="btn btn-outline-info col" style={{margin:1}}> Xem Nhiều</button>
            </div>
            <div className='row' >
                <button className="btn btn-outline-info col" style={{margin:1}}> Yêu Thích</button>
                <button className="btn btn-outline-info col" style={{margin:1}}> Truyện Full</button>
            </div>
        </div>
        </div>)
}
