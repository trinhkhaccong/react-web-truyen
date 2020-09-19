// code by congtk
// Contact: trinh.khac.cong.hust@gmail.com
// Phone: 0969860930
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import axios from "axios";

export default function Search() {
    const [inputtext, setInputtext] = useState("")
    
    const onpress=async (e)=>{
        if(e.charCode == 13)
        {
            window.location.href="/list-search/"+inputtext
        }
    }
    return (<div style={{ color: 'white' }}>
        <center>
        <Form.Control 
            className="mt-2 col-10" 
            type="text" 
            placeholder="Tìm truyện ..." 
            value={inputtext}
            onChange={(e)=>setInputtext(e.target.value)} 
            onKeyPress={onpress}
            />
        </center>
            
    </div>)
}
