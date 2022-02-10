import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Finish.css';
import axios from 'axios';


export default class Finish extends Component{
    firstData = {
        'hasilBiodata' : (JSON.parse(localStorage.getItem('biodata')))
      };
      secondData = {
        'hasilDisc' : (JSON.parse(localStorage.getItem('disc')))
      };
      thirdData = {
        'hasilWpt' : (JSON.parse(localStorage.getItem('wpt')))
      };
    hasilData = [this.firstData, this.secondData, this.thirdData];

    render(){
    window.history.forward(1);
    return(
        <div className="finish">
            <div className="ins_finish">
            <img className="logo_h_finish" src="/image/buana.png" alt="logo"></img><br></br>
            <img className="bg_finish" src="/image/finish.png" alt="logo"></img>
            <h3>Terima kasih telah menyelesaikan Psikotest Online<br></br> PT Buana Varia Komputama</h3>
            <p>Jika Anda lolos seleksi, kami akan segera menghubungi Anda untuk melanjutkan proses selanjutnya.</p>
            </div>
        </div>
    )
}
}