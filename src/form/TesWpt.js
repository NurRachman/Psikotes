import React, { Component } from 'react';
import { Button } from 'antd';
import './TesWpt.css';
import { FormControl, FormGroup, Row, Col, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import Timer from 'react-compound-timer';

export default class TesWpt extends Component{
    userData;
    firstData = {
        'hasilBiodata' : (JSON.parse(localStorage.getItem('biodata')))
      };
      secondData = {
        'hasilDisc' : (JSON.parse(localStorage.getItem('disc')))
      };
      thirdData = {
        'hasilWpt' : (JSON.parse(localStorage.getItem('wpt')))
      }
    hasilData = [(JSON.parse(localStorage.getItem('biodata'))), (JSON.parse(localStorage.getItem('disc'))), (JSON.parse(localStorage.getItem('wpt')))];

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            w01: '', w02: '', w03: '', w04: '', w05: '', w06: '', w07: '', w08: '', w09: '', w10: '',
            w11: '', w12: '', w13: '', w14: '', w15: '', w16: '', w17: '', w18: '', w19: '', w20: '',
            w21: '', w22: '', w23: '', w24: '', w25: '', w26: '', w27: '', w28: '', w29: '', w30: '',
            w31: '', w32: '', w33: '', w34: '', w35: '', w36: '', w37: '', w38: '', w39: '', w40: '',
            w41: '', w42: '', w43: '', w44: '', w45: '', w46: '', w47: '', w48: '', w49: '', w50: '',
        }
    }

    onChange(e) {
        this.setState ({[e.target.name]: e.target.value})
    }

    submitHandler(e) {
        e.preventDefault();

        if (localStorage.getItem('wpt').includes('""')) {
            alert("Silahkan isi semua pertanyaan.");
        }else{
            const hasilData = {
                biodata: (JSON.parse(localStorage.getItem('biodata'))),
                disc: (JSON.parse(localStorage.getItem('disc'))),
                wpt: (JSON.parse(localStorage.getItem('wpt'))),
            }
    
            axios.post('hasilData/add', hasilData, 
            {headers: {'Content-Type' : 'application/json'}})
                .then(res => {
                console.log(res.data);})
                .catch((error) => console.log( error.response));
            console.log(hasilData);
            window.location.href = "/Finish";
        }
            
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('wpt'))

        if (localStorage.getItem('wpt')) {
            this.setState({
              w01: this.userData.w01,
              w02: this.userData.w02,
              w03: this.userData.w03,
              w04: this.userData.w04,
              w05: this.userData.w05,
              w06: this.userData.w06,
              w07: this.userData.w07,
              w08: this.userData.w08,
              w09: this.userData.w09,
              w10: this.userData.w10,
              w11: this.userData.w11,
              w12: this.userData.w12,
              w13: this.userData.w13,
              w14: this.userData.w14,
              w15: this.userData.w15,
              w16: this.userData.w16,
              w17: this.userData.w17,
              w18: this.userData.w18,
              w19: this.userData.w19,
              w20: this.userData.w20,
              w21: this.userData.w21,
              w22: this.userData.w22,
              w23: this.userData.w23,
              w24: this.userData.w24,
              w25: this.userData.w25,
              w26: this.userData.w26,
              w27: this.userData.w27,
              w28: this.userData.w28,
              w29: this.userData.w29,
              w30: this.userData.w30,
              w31: this.userData.w31,
              w32: this.userData.w32,
              w33: this.userData.w33,
              w34: this.userData.w34,
              w35: this.userData.w35,
              w36: this.userData.w36,
              w37: this.userData.w37,
              w38: this.userData.w38,
              w39: this.userData.w39,
              w40: this.userData.w40,
              w41: this.userData.w41,
              w42: this.userData.w42,
              w43: this.userData.w43,
              w44: this.userData.w44,
              w45: this.userData.w45,
              w46: this.userData.w46,
              w47: this.userData.w47,
              w48: this.userData.w48,
              w49: this.userData.w49,
              w50: this.userData.w50,
            })
          } else {
            this.setState({
              w01: '',w02: '', w03: '', w04: '', w05: '', w06: '', w07: '', w08: '', w09: '', w10: '',
              w11: '', w12: '', w13: '', w14: '', w15: '', w16: '', w17: '', w18: '', w19: '', w20: '',
              w21: '', w22: '', w23: '', w24: '', w25: '', w26: '', w27: '', w28: '', w29: '', w30: '',
              w31: '', w32: '', w33: '', w34: '', w35: '', w36: '', w37: '', w38: '', w39: '', w40: '',
              w41: '', w42: '', w43: '', w44: '', w45: '', w46: '', w47: '', w48: '', w49: '', w50: '',
            })
          }
        }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('wpt', JSON.stringify(nextState));
        }

    render(){
    return(
        <div className="_wpt">
        <Container>
        <div className="header"><img className="logo_disc" src="/image/AIT.png" alt="logo"></img><h1>Tes Kecerdasan</h1></div>
        <div className="timer"><b>Sisa waktu : <Timer
    initialTime={60*13000}
    direction="backward"
    checkpoints={[
        {
            time: 60*1000,
            callback: () => alert("Waktu pengerjaan tersisa 1 menit lagi!")
        },
        {
            time: 0*0,
            callback: () => this.submitHandler.bind(this),
        },
    ]}>
    {() => (
        <React.Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
        </React.Fragment>
    )}
</Timer></b></div><br></br>
        <div className="soal_wpt">
        <Form method="post" onSubmit={(e)=> this.onSubmit(e)}>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>1.</b> Bulan lalu pada awal tahun ini adalah<br></br>
                1.Januari 2.Maret 3.Juli 4.Desember 5.Oktober
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w01" type="text" value={this.state.w01} onChange={this.onChange} style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>2.</b> MENANGKAP adalah lawan kata dari<br></br>
                1.meletakkan 2.membebaskan 3.beresiko 4.berusaha 5.turun tingkat
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w02" type="text" value={this.state.w02} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>3.</b> Sebagian besar hal dibawah ini serupa satu sama lain. Manakah salah satu diantaranya yang kurang serupa dengan yang lain?<br></br>
                1.Januari 2.Agustus 3.Rabu 4.Oktober 5.Desember
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w03" type="text" value={this.state.w03} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>4.</b> Jawablah dengan menuliskan YA atau TIDAK. Apakah RSVP berarti 'jawablah yang tidak perlu'?</p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w04" type="text" value={this.state.w04} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>5.</b> Dalam kelompok kata berikut, manakah kata yag berbeda dari kata yang lain?<br></br>
                1.pasukan 2.liga 3.berpartisipasi 4.pak 5.kelompok
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w05" value={this.state.w05} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>6.</b> BIASA adalah lawan kata dari?<br></br>
                1.jarang 2.terbiasa 3.tetap 4.berhenti 5.selalu
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w06" value={this.state.w06} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>7.</b> Gambar manakah yang terbuat dari dua gambar di dalam tanda kurung?<br></br>
                <img className="no7" src="/image/7.jpg" alt="image"/>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w07" value={this.state.w07} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>8.</b> Perhatikan urutan angka berikut. Angka berapa yang selanjutnya muncul? 8 4 2 1 1/2 1/4?<br></br>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w08" value={this.state.w08} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>9.</b> Klien dan Pelanggan  Apakah kata-kata ini: <br></br>
                1.memiliki arti yang sama 2.memiliki arti berlawanan 3.tidak memiliki arti sama atau berlawanan?
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w09" value={this.state.w09} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>10.</b> Manakah kata berikut ini yang berhubungan dengan aroma saat gigi mengunyah?<br></br>
                1.manis 2.bau tak sedap 3.bau wangi 4.hidung 5.bersih
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w10" value={this.state.w10} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>11.</b> MUSIM GUGUR adalah lawan dari:<br></br>
                1.liburan 2.musim panas 3.musim semi 4.musim dingin 5.musim gugur
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w11" value={this.state.w11} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>12.</b> Sebuah pesawat terbang 300 kaki dalam 1/2 detik. Pada kecepatan yang sama berapa kaki ia terbang dalam 10 detik?</p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w12" value={this.state.w12} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>13.</b> Anggaplah dua pernyataan pertama adalah benar. Apakah yang terakhir: 1.benar 2.salah 3.tidak tahu?<br></br>
                Anak-anak lelaki ini adalah anak yang normal. Semua anak normal sifatnya aktif. Anak-anak lelaki ini aktif.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w13" value={this.state.w13} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>14.</b> JAUH adalah lawan kata dari<br></br>
                1.terpencil 2.dekat 3.jauh 4.terburu-buru 5.pasti
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w14" value={this.state.w14} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>15.</b> 3 permen lemon seharga 10 rupiah. Berapa harga 1/2 lusin?</p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w15" value={this.state.w15} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>16.</b> Berapa banyak duplikasi yang sama dari lima pasangan angka dibawah ini?<br></br>
                84721 84721<br></br>
                9210651 9210561<br></br>
                14201201 14210210<br></br>
                96101101 96101161<br></br>
                88884444 88884444<br></br>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w16" value={this.state.w16} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>17.</b> Misalkan Anda menyusun kata-kata berikut sehingga menjadi pernyataan yang benar. Lalu tuliskan huruf terakhir dari kata terakhir sebagai jawaban.<br></br>
                <i>Selalu, sebuah, kata kerja, kalimat, suatu, memiliki</i>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w17" value={this.state.w17} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>18.</b> Anak lelaki berumur 5 tahun dan saudara perempuannya dua kali lebih tua. Ketika anak lelaki itu berumur 8 tahun, berapa umur saudara perempuannya?<br></br>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w18" value={this.state.w18} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>19.</b> ITS ITS  Apakah kata ini?<br></br>
                1.memiliki arti yang sama 2.memiliki arti yang berlawanan 3.tidak memiliki arti yang sama atau berlawanan
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w19" value={this.state.w19} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>20. </b>Anggaplah dua pernyataan pertama adalah benar. Apakah pernyataan terakhir: 1.benar 2.salah 3.tidak tahu<br></br>
                John seusia dengan Sally. Sally lebih muda dari Bill. John lebih muda dari Bill.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w20" value={this.state.w20} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>21. </b>Seorang dealer membeli barrel seharga 4.000 rupiah. Ia menjual barrel dengan harga 5.000 rupiah, mendapat untung 50 rupiah tiap barrel. Berapa banyak barrel yang dijual?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w21" value={this.state.w21} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>22. </b>Misalkan Anda menyusun kata-kata berikut sehingga menjadi kalimat lengkap. Jika kalimat itu benar tulislah (B). Jika salah, tulislah (S). <i>telur menghasilkan semua ayam</i><br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w22" value={this.state.w22} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>23. </b>Dua dari peribahasa berikut memiliki arti sama. Manakah itu?<br></br>
                1. Semakin banyak memiliki sapi, akan memiliki satu anak sapi yang buruk.<br></br>
                2. Anak seperti Ayahnya.<br></br>
                3. Bila tertinggal sama jauhnya dengan satu mil.<br></br>
                4. Seorang dikenal dari persahabatan yang dijalin.<br></br>
                5. Mereka adalah benih dari mangkuk yang sama.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w23" value={this.state.w23} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>24. </b>Sebuah jam terlambat 1 menit 18 detik dalam 39 hari. Berapa detik ia terlambat dalam sehari?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w24" value={this.state.w24} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>25. </b>CANVASS CANVAS  Apakah kata-kata ini:<br></br>
                1.memiliki arti yang sama 2.memiliki arti yang berlawanan 3.tidak memiliki arti sama atau berlawanan?
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w25" value={this.state.w25} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>26. </b>Anggaplah dua pernyataan pertama adalah benar. Pernyataan terakhir: 1.benar 2.salah 3.tidak tahu<br></br>
                Semua siswa mengikuti ujian. Beberapa orang diruangan ini adalah siswa. Beberapa orang diruangan ini mengikuti ujian.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w26" value={this.state.w26} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>27. </b>Dalam 30 hari seseorang menabung 1 dollar. Berapa rata-rata tabungannya setiap hari?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w27" value={this.state.w27} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>28. </b>INGENIOUS INGENUOUS Apakah kata-kata ini<br></br>
                1.memiliki arti yang sama 2.memiliki arti yang berlawanan 3.tidak memiliki arti sama atau berlawanan?
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w28" value={this.state.w28} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>29. </b>Dua orang menangkap 36 ikan. X menangkap 5 kali lebih banyak dari Y. Berapa ikan yang ditangkap Y?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w29" value={this.state.w29} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>30. </b>Sebuah kotak segi empat, yang terisi penuh, memuat 800 kubik kaki gandum. Jika satu kotak lebarnya 8 kaki dan panjangnya 10 kaki, berapa kedalaman kotak itu?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w30" value={this.state.w30} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>31. </b>Satu angka dari rangkaian berikut tidak cocok dengan pola angka lainnya. Angka berapakah itu?<br></br>
                1/2 1/4 1/6 1/8 1/9 1/12
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w31" value={this.state.w31} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>32. </b>Jawablah pertanyaan ini dengan menulis YA atau TIDAK. Apakah P.M. berarti 'post merediem'?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w32" value={this.state.w32} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>33. </b>DAPAT DIPERCAYA  GAMPANG PERCAYA  Apakah kata-kata ini:<br></br>
                1.memiliki arti yang sama 2.memiliki arti yang berlawanan 3.tidak memiliki arti sama atau berlawanan?
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w33" value={this.state.w33} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>34. </b>Sebuah rok membutuhkan 2 1/4 meter kain. Berapa banyak potong yang dihasilkan dari 45 meter kain?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w34" value={this.state.w34} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>35. </b>Sebuah jam menunjuk tepat pada pukul 12 siang hari pada hari Senin. Pada pukul 2 siang,hari Rabu, jam itu terlambat 26 detik. Pada rata-rata yang sama berapa banyak jam itu terlambat dalam 1/2 jam?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w35" value={this.state.w35} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>36. </b>Tim bisbol kami kalah 9 permainan dalam musim ini. Ini merupakan 3/8 bagian dari semua pertandingan mereka. Berapa banyak pertandingan yang mereka mainkan dalam musim kompetisi saat ini?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w36" value={this.state.w36} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>37. </b>Apakah angka selanjutnya dari seri ini? 1 .5 .25 .125<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w37" value={this.state.w37} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>38. </b>Bentuk geometris ini dapat dibagi oleh suatu garis lurus menjadi dua bagian yang dapat disatukan dengan suatu cara hingga membentuk bujur sangkar yang sempurna. Gambarlah garis yang menghubungkan dua dari angka-angka yang ada. Lalu tuliskan angka tersebut sebagai jawaban.<br></br>
                <img className="no38" src="\image\38.jpg" alt="image"/>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w38" value={this.state.w38} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>39. </b>Apakah arti dari kalimat berikut: 1.sama 2.berlawanan 3.tidak sama atau berlawanan<br></br>
                Sebuah sapu yang baru menyapu dengan bersih. Sepatu yang sudah lama sifatnya semakin lunak.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w39" value={this.state.w39} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>40. </b>Berapa duplikasi dari pasangan kata berikut ini?<br></br>
                Rexford, J.D. Rockford, J.D<br></br>
                Singleton, M.O. Simbleten, M.O.<br></br>
                Richards, W.E. Richad, W.E.<br></br>
                Siegel, A.B. Siegel, A.B.<br></br>
                Wood, A.O. Wood, A.O.<br></br>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w40" value={this.state.w40} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>41. </b>Dua dari peribahasa ini memiliki makna serupa. Manakah itu?<br></br>
                1. Anda tidak dapat membuat dompet sutra dari kuping babi betina.<br></br>
                2. Orang yang mencuri telur akan mencuri sapi.<br></br>
                3. Batu yang berguling tidak akan mengumpulkan lumut.<br></br>
                4. Anda tidak mungkin menghancurkan kapal yang sudah rusak.<br></br>
                5. Ini ketidakmungkinan yang terjadi.<br></br>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w41" value={this.state.w41} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>42. </b>Bentuk geometris ini dapat dibagi oleh suatu garis lurus menjadi dua bagian yang dapat disatukan dengan suatu cara hingga membentuk bujur sangkar yang sempurna. Gambarlah garis yang menghubungkan dua dari angka-angka yang ada. Lalu tuliskan angka tersebut sebagai jawaban.<br></br>
                <img className="no42" src="/image/42.jpg" alt="image"/>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w42" value={this.state.w42} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>43. </b>Dalam kelompok angka ini, manakah angka yang terkecil? 10 1 .999 .33 11<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w43" value={this.state.w43} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>44. </b>Apakah makna dari kalimat berikut: 1.sama 2.berlawanan 3. tidak sama atau berlawanan?<br></br>
                Tidak ada orang jujur meminta maaf atas kejujurannya. Kejujuran dihormati dan lapar pujian.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w44" value={this.state.w44} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>45. </b>Dengan harga 1.80 dollar, seorang grosir membeli satu kardus buah yang berisi 12 lusin. Ia tahu dua lusin akan busuk sebelum dia menjualnya. Dengan harga berapa per lusin dia harus menjual jeruk itu untuk mendapat 1/3 dari harga seluruhnya<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w45" value={this.state.w45} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>46. </b>Dalam rangkaian kata berikut ini, manakah kata yang berbeda dari yang lainnya?<br></br>
                1.koloni 2.perkawanan 3.kawanan 4.kru 5.konstelasi
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w46" value={this.state.w46} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>47. </b>Anggaplah dua pernyataan pertama ini benar. Apakah pernyataan terakhir: 1.benar 2.salah 3.tidak tahu<br></br>
                Orang besar dibodohi. Saya dibodohi. Saya adalah orang besar.
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w47" value={this.state.w47} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>48. </b>Tiga orang membentuk kemitraan dan setuju membagi keuntungan secara rata. X menginvestasi 4,500 dollar. Y sebesar 3,500 dollar dan Z sebesar 2,000 dollar. Jika keuntungan mencapai 1,500 dollar, lebih kurang berapa yang akan diperoleh X dibanding jika keuntungan berdasarkan besarnya investasi?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w48" value={this.state.w48} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>49. </b>Empat dari 5 bagian dapat gabungkan untuk membuat segi tiga. Manakah keempat gambar ini?<br></br>
                <img className="no49" src="/image/49.jpg" alt="image"/>
                </p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w49" value={this.state.w49} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm="10">
                <p><b>50. </b>Untuk mencetak sebuah artikel berisi 30.000 kata, sebuah percetakan memutuskan untuk memakai dua ukuran jenis. Dengan menggunakan tipe yang lebih besar, sebuah halaman tercetak akan memuat 1.200 kata. Dengan tipe yang lebih kecil, sebuah halaman memuat 1.500 kata. Artikel ini masuk dalam 22 halaman di majalah. Berapa banyak halaman yang dibutuhkan untuk tipe yang lebih kecil?<br></br></p>
                </Form.Label>
                <Col sm="2">
                    <Form.Control name="w50" value={this.state.w50} onChange={this.onChange} type="text" style={{ borderWidth: 5 }}/>
                </Col>
            </Form.Group>
        </Form>
            <Button onClick={this.submitHandler.bind(this)} shape="round" size="large" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)", marginBottom: "60px"}} type="primary">Submit</Button>
        </div>
        </Container>
        </div>
    )
}
}
