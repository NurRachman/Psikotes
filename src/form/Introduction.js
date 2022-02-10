import React, { Component } from 'react';
import { Button } from 'antd';
import './Introduction.css';
import { Link } from 'react-router-dom';

export default class Introduction extends Component{
userData;
componentDidMount(){
localStorage.clear();
sessionStorage.clear();
}
    
    render() {
    return (
        <div className="main">
            <div>
            </div>
            <div>
                <img className="logo" src="/image/buana.png" alt="logo"></img>
                <h2>Selamat Datang di Psikotes Online <br></br>PT Buana Varia Komputama</h2>
                <p>Dalam kesempatan ini Anda akan mengerjakan tes kepribadian dan kecerdasan dengan batas waktu yang sudah ditentukan. Pastikan Anda menjawab semua soal dengan cepat dan teliti.</p>    
                <br></br>
                <Link to="/biodata">
                    <Button type="primary" size="large" shape="round" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)"}}>Selanjutnya</Button>
                </Link>
                </div>
            <div>
                <img className="bg" src="/image/lap.png" alt="image"/>
            </div>
            <div>
            </div>
        </div>
    )
}
}