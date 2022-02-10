import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './InstruksiDisc.css';


function InstruksiDisc() {
    window.history.forward(1);
    return (
        <div className="disc">
            <div></div>
            <div className="ins_disc">
            <img className="logo_h_disc" src="/image/buana.png" alt="logo"></img>
            <h2>Petunjuk Pengerjaan Tes Kepribadian</h2>
            <p>PETUNJUK PENGERJAAN :</p> 
            <ul>
                <li>Tes ini terdiri dari 24 soal, dan terdapat 4 kalimat di masing - masing soal tersebut.</li>
                <li>Tugas Anda adalah :  
                    <ul><li>Pilih 1 kalimat yang <b>PALING MENGGAMBARKAN DIRI</b> Anda pada kolom huruf “P”.</li>
                        <li>Pilih 1 kalimat yang <b>PALING TIDAK MENGGAMBARKAN DIRI</b> Anda pada kolom huruf “K”.</li>        
                </ul></li>
                <li>Tidak ada jawaban benar dan salah dalam tes ini.</li>
                <li>Anda wajib menjawab semua soal yang ada sebelum melanjutkan ke halaman berikutnya, sesuai dengan batas waktu yang sudah ditentukan.</li>
            </ul>
            <p>PERHATIKAN BAIK-BAIK PETUNJUK PENGERJAAN SEBELUM MELANJUTKAN DAN MANFAATKAN WAKTU DENGAN SEBAIK-BAIKNYA.</p>
            <Link to="/TesDisc">
                <Button shape="round" size="large" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)", marginLeft: 200}} type="primary">MULAI</Button>
            </Link>
            </div>
            <div><img className="bg_disc" src="/image/disc.png" alt="image"></img></div>
            <div></div>
        </div>
    )
}

export default InstruksiDisc
