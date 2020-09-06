// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'


export default function Search() {
    const [inputtext, setInputtext] = useState("")
    
    const search=()=>{
        alert(inputtext)
    }

    return (<div className='row' style={{ color: 'white' }}>
        <div className='col-8'>
            <Form.Control 
            className="mt-1" 
            type="text" 
            placeholder="Tìm truyện, tác giả" 
            value={inputtext}
            onChange={(e)=>setInputtext(e.target.value)} />
        </div>
        <div className='col-4'>
            <button
         className='btn btn-light mt-1' 
         onClick={search}
         >Tìm Kiếm</button></div>

    </div>)
}
