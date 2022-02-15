import React from 'react';
import { Button } from 'antd';
import './InstruksiWpt.css';
import { FormControl, FormGroup, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function InstruksiWpt() {
    window.history.forward(1);
    return (
        <div className="wpt">
            <div></div>
            <div className="ins_wpt">
            <img className="logo_h_disc" src="/image/AIT.png" alt="logo"></img>
            <h2>Petunjuk Pengerjaan Tes Kecerdasan</h2><br></br>
            <ul>
                <li>Waktu pengerjaan tes ini adalah 13 menit.</li>
                <li>Tes ini terdiri dari 50 pertanyaan yang secara bertahap menjadi semakin sulit.</li>
                <li>Ini merupakan tes untuk kemampuan memecahkan masalah. Tes ini mencakup berbagai jenis pertanyaan yang harus diselesaikan tanpa alat bantu seperti kalkulator atau sejenisnya.</li>
                <li>Kerjakan dengan teliti, namun jangan menghabiskan waktu lama pada setiap pertanyaan atau lewati pertanyaan itu.</li>
            </ul>
            <p>CONTOH PENGERJAAN :</p>
            
        <Form className="contoh_wpt">
            <Form.Group as={Row}>
                <b>Perhatikan satu contoh pertanyaan yang terisi dengan benar :</b>
                <Form.Label column sm="9">
                <p>MENUAI adalah lawan kata dari<br></br>
                1.mendapat 2.bersorak 3.melanjutkan 4.berada 5.menabur
                </p>
                <p><i>Jawaban yang benar adalah "menabur". Maka, ketiklah angka 5 pada isian di sebelah kanan.</i></p>
                </Form.Label>
                <Col sm="3">
                    <Form.Control type="text" placeholder="5" style={{ borderWidth: 5 }} readOnly/>
                </Col>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group as={Row}>
            <b>Jawablah contoh pertanyaan berikut ini :</b>
                <Form.Label column sm="9">
                    <p>Harga setiap kotak paper clip adalah 23 rupiah. Berapa harga 4 kotak?</p>
                    <p><i>Jawaban yang benar adalah Rp. 92. Ketiklah angka 'Rp. 92' dalam kotak isian disebelah kanan.</i></p>
                </Form.Label>
                <Col sm="3">
                        <Form.Control type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group as={Row}>
                <b>Jawablah contoh pertanyaan berikut ini :</b>
                <Form.Label column sm="9">
                <p>MINER MINOR - Apakah kata-kata ini?<br></br>
                1.memiliki arti sama 2.memiliki arti berlawanan 3.tidak memiliki arti sama atau berlawanan
                </p>
                <p><i>Jawaban yang benar adalah 'tidak memiliki arti sama atau berlawanan' (Nomor 3). Maka, ketiklah '3' pada kotak disebelah kanan.</i></p>
                </Form.Label>
                <Col sm="3">
                        <Form.Control type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
        </Form>
        <Link to="/TesWpt">   
            <Button shape="round" size="large" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)", marginLeft: 200}} type="primary">MULAI</Button>
        </Link>
        </div>
            <div className="bg_wpt"><img className="bg_wpt" src="/image/wpt.png" alt="image"></img></div>
            <div></div>
        </div>

    )
}

export default InstruksiWpt
