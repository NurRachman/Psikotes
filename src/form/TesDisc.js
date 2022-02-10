import React, { Component } from 'react';
import { Button, Select} from 'antd';
import { Form, ContainerRow, Row, Col, Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TesDisc.css';
import Timer from 'react-compound-timer';

const { Option } = Select;

export default class TesDisc extends Component {
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
    hasilData = [this.firstData, this.secondData, this.thirdData];

    constructor(props){
        super(props);

        this.onChangep1 = this.onChangep1.bind(this)
        this.onChangek1 = this.onChangek1.bind(this)
        this.onChangep2 = this.onChangep2.bind(this)

        this.state = {
            d01_p: '---------Pernyataan----------',
            d01_k: '---------Pernyataan----------',
        }
    }

    onChangep1(e) {
        this.setState({d01_p: e});
      }
    onChangek1(e) {
        this.setState({d01_k: e});
      }
    onChangep2(e) {
        this.setState({d02_p: e});
      }
    onChangek2(e) {
        this.setState({d02_k: e});
      }
    onChangep3(e) {
        this.setState({d03_p: e});
      }
    onChangek3(e) {
        this.setState({d03_k: e});
      }
      onChangep4(e) {
        this.setState({d04_p: e});
      }
    onChangek4(e) {
        this.setState({d04_k: e});
      }
    onChangep5(e) {
        this.setState({d05_p: e});
      }
    onChangek5(e) {
        this.setState({d05_k: e});
      }
    onChangep6(e) {
        this.setState({d06_p: e});
      }
    onChangek6(e) {
        this.setState({d06_k: e});
      }
      onChangep7(e) {
        this.setState({d07_p: e});
      }
    onChangek7(e) {
        this.setState({d07_k: e});
      }
    onChangep8(e) {
        this.setState({d08_p: e});
      }
    onChangek8(e) {
        this.setState({d08_k: e});
      }
    onChangep9(e) {
        this.setState({d09_p: e});
      }
    onChangek9(e) {
        this.setState({d09_k: e});
      }
      onChangep10(e) {
        this.setState({d10_p: e});
      }
    onChangek10(e) {
        this.setState({d10_k: e});
      }
    onChangep11(e) {
        this.setState({d11_p: e});
      }
    onChangek11(e) {
        this.setState({d11_k: e});
      }
    onChangep12(e) {
        this.setState({d12_p: e});
      }
    onChangek12(e) {
        this.setState({d12_k: e});
      }
      onChangep13(e) {
        this.setState({d13_p: e});
      }
    onChangek13(e) {
        this.setState({d13_k: e});
      }
    onChangep14(e) {
        this.setState({d14_p: e});
      }
    onChangek14(e) {
        this.setState({d14_k: e});
      }
    onChangep15(e) {
        this.setState({d15_p: e});
      }
    onChangek15(e) {
        this.setState({d15_k: e});
      }
      onChangep16(e) {
        this.setState({d16_p: e});
      }
    onChangek16(e) {
        this.setState({d16_k: e});
      }
    onChangep17(e) {
        this.setState({d17_p: e});
      }
    onChangek17(e) {
        this.setState({d17_k: e});
      }
    onChangep18(e) {
        this.setState({d18_p: e});
      }
    onChangek18(e) {
        this.setState({d18_k: e});
      }
      onChangep19(e) {
        this.setState({d19_p: e});
      }
    onChangek19(e) {
        this.setState({d19_k: e});
      }
    onChangep20(e) {
        this.setState({d20_p: e});
      }
    onChangek20(e) {
        this.setState({d20_k: e});
      }
    onChangep21(e) {
        this.setState({d21_p: e});
      }
    onChangek21(e) {
        this.setState({d21_k: e});
      }
      onChangep22(e) {
        this.setState({d22_p: e});
      }
    onChangek22(e) {
        this.setState({d22_k: e});
      }
    onChangep23(e) {
        this.setState({d23_p: e});
      }
    onChangek23(e) {
        this.setState({d23_k: e});
      }
    onChangep24(e) {
        this.setState({d24_p: e});
      }
    onChangek24(e) {
        this.setState({d24_k: e});
      }
      
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('disc'));

        if (localStorage.getItem('disc')) {
            this.setState({
              d01_p: this.userData.d01_p,
              d01_k: this.userData.d01_k,
              d02_p: this.userData.d02_p,
              d02_k: this.userData.d02_k,
              d03_p: this.userData.d03_p,
              d03_k: this.userData.d03_k,
              d04_p: this.userData.d04_p,
              d04_k: this.userData.d04_k,
              d05_p: this.userData.d05_p,
              d05_k: this.userData.d05_k,
              d06_p: this.userData.d06_p,
              d06_k: this.userData.d06_k,
              d07_p: this.userData.d07_p,
              d07_k: this.userData.d07_k,
              d08_p: this.userData.d08_p,
              d08_k: this.userData.d08_k,
              d09_p: this.userData.d09_p,
              d09_k: this.userData.d09_k,
              d10_p: this.userData.d10_p,
              d10_k: this.userData.d10_k,
              d11_p: this.userData.d11_p,
              d11_k: this.userData.d11_k,
              d12_p: this.userData.d12_p,
              d12_k: this.userData.d12_k,
              d13_p: this.userData.d13_p,
              d13_k: this.userData.d13_k,
              d14_p: this.userData.d14_p,
              d14_k: this.userData.d14_k,
              d15_p: this.userData.d15_p,
              d15_k: this.userData.d15_k,
              d16_p: this.userData.d16_p,
              d16_k: this.userData.d16_k,
              d17_p: this.userData.d17_p,
              d17_k: this.userData.d17_k,
              d18_p: this.userData.d18_p,
              d18_k: this.userData.d18_k,
              d19_p: this.userData.d19_p,
              d19_k: this.userData.d19_k,
              d20_p: this.userData.d20_p,
              d20_k: this.userData.d20_k,
              d21_p: this.userData.d21_p,
              d21_k: this.userData.d21_k,
              d22_p: this.userData.d22_p,
              d22_k: this.userData.d22_k,
              d23_p: this.userData.d23_p,
              d23_k: this.userData.d23_k,
              d24_p: this.userData.d24_p,
              d24_k: this.userData.d24_k,
            })
          } else {
            this.setState({
              d01_p: '---------Pernyataan----------',
              d01_k: '---------Pernyataan----------',
              d02_p: '---------Pernyataan----------',
              d02_k: '---------Pernyataan----------',
              d03_p: '---------Pernyataan----------',
              d03_k: '---------Pernyataan----------',
              d04_p: '---------Pernyataan----------',
              d04_k: '---------Pernyataan----------',
              d05_p: '---------Pernyataan----------',
              d05_k: '---------Pernyataan----------',
              d06_p: '---------Pernyataan----------',
              d06_k: '---------Pernyataan----------',
              d07_p: '---------Pernyataan----------',
              d07_k: '---------Pernyataan----------',
              d08_p: '---------Pernyataan----------',
              d08_k: '---------Pernyataan----------',
              d09_p: '---------Pernyataan----------',
              d09_k: '---------Pernyataan----------',
              d10_p: '---------Pernyataan----------',
              d10_k: '---------Pernyataan----------',
              d11_p: '---------Pernyataan----------',
              d11_k: '---------Pernyataan----------',
              d12_p: '---------Pernyataan----------',
              d12_k: '---------Pernyataan----------',
              d13_p: '---------Pernyataan----------',
              d13_k: '---------Pernyataan----------',
              d14_p: '---------Pernyataan----------',
              d14_k: '---------Pernyataan----------',
              d15_p: '---------Pernyataan----------',
              d15_k: '---------Pernyataan----------',
              d16_p: '---------Pernyataan----------',
              d16_k: '---------Pernyataan----------',
              d17_p: '---------Pernyataan----------',
              d17_k: '---------Pernyataan----------',
              d18_p: '---------Pernyataan----------',
              d18_k: '---------Pernyataan----------',
              d19_p: '---------Pernyataan----------',
              d19_k: '---------Pernyataan----------',
              d20_p: '---------Pernyataan----------',
              d20_k: '---------Pernyataan----------',
              d21_p: '---------Pernyataan----------',
              d21_k: '---------Pernyataan----------',
              d22_p: '---------Pernyataan----------',
              d22_k: '---------Pernyataan----------',
              d23_p: '---------Pernyataan----------',
              d23_k: '---------Pernyataan----------',
              d24_p: '---------Pernyataan----------',
              d24_k: '---------Pernyataan----------',
            })
          }
        }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('disc', JSON.stringify(nextState));
        }
    
    onSubmit(e) {
        e.preventDefault();
        
        if (localStorage.getItem('disc').includes("---------Pernyataan----------")) {
            alert("Silahkan isi semua pertanyaan.");
        } else {
            window.location.replace("/InstruksiWpt");
        }
    }



    render (){
    window.history.forward(1);
    return (
        <div className="_disc">
            <Container style={{ textAlign: 'left'}} >
            <div className="header"><img className="logo_disc" src="/image/buana.png" alt="logo"></img><h1>Tes Kepribadian</h1></div>
            <div className="timer"><b>Sisa waktu : <Timer
    initialTime={600*1000}
    direction="backward"
    checkpoints={[
        {
            time: 60*1000,
            callback: () => alert("Waktu pengerjaan tersisa 1 menit lagi!")
        },
        { 
            time: 0*0,
            callback: () => window.location.replace("http://localhost:3000/InstruksiWpt"),
        },
    ]}>
    {() => (
        <React.Fragment>
            <Timer.Minutes />:
            <Timer.Seconds />
        </React.Fragment>
    )}
</Timer></b></div><br></br>
        <Form method="post" onSubmit={this.onSubmit}>
            <Row>
                <Col>
                <Form.Group>
                <Form.Label>
                    <b>1. </b>P : 
                </Form.Label>
                <Select name="d01_p" value={this.state.d01_p} onChange={this.onChangep1} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Gampangan, Mudah setuju">Gampangan, Mudah setuju</Option>
                    <Option value="Percaya, Mudah percaya pada orang">Percaya, Mudah percaya pada orang</Option>
                    <Option value="Petualang, Mengambil resiko">Petualang, Mengambil resiko</Option>
                    <Option value="Toleran, Menghormati">Toleran, Menghormati</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>1. </b>K : 
                </Form.Label>
                <Select name="d01_k" value={this.state.d01_k} onChange={this.onChangek1} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Gampangan, Mudah setuju">Gampangan, Mudah setuju</Option>
                    <Option value="Percaya, Mudah percaya pada orang">Percaya, Mudah percaya pada orang</Option>
                    <Option value="Petualang, Mengambil resiko">Petualang, Mengambil resiko</Option>
                    <Option value="Toleran, Menghormati">Toleran, Menghormati</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>2. </b>P : 
                </Form.Label>
                <Select name="d02_p" value={this.state.d02_p} onChange={this.onChangep2} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Lembut suara, Pendiam">Lembut suara, Pendiam</Option>
                    <Option value="Optimistik, Visioner">Optimistik, Visioner</Option>
                    <Option value="Pusat perhatian, Suka bergaul">Pusat perhatian, Suka bergaul</Option>
                    <Option value="Pendamai, Membawa harmoni">Pendamai, Membawa harmoni</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>2. </b>K : 
                </Form.Label>
                <Select name="d02_k" value={this.state.d02_k} onChange={this.onChangek2.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Lembut suara, Pendiam">Lembut suara, Pendiam</Option>
                    <Option value="Optimistik, Visioner">Optimistik, Visioner</Option>
                    <Option value="Pusat perhatian, Suka bergaul">Pusat perhatian, Suka bergaul</Option>
                    <Option value="Pendamai, Membawa harmoni">Pendamai, Membawa harmoni</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>3. </b>P : 
                </Form.Label>
                <Select name="d03_p" value={this.state.d03_p} onChange={this.onChangep3.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menyemangati orang">Menyemangati orang</Option>
                    <Option value="Berusaha sempurna">Berusaha sempurna</Option>
                    <Option value="Bagian dari kelompok">Bagian dari kelompok</Option>
                    <Option value="Ingin membuat tujuan">Ingin membuat tujuan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>3. </b>K : 
                </Form.Label>
                <Select name="d03_k" value={this.state.d03_k} onChange={this.onChangek3.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menyemangati orang">Menyemangati orang</Option>
                    <Option value="Berusaha sempurna">Berusaha sempurna</Option>
                    <Option value="Bagian dari kelompok">Bagian dari kelompok</Option>
                    <Option value="Ingin membuat tujuan">Ingin membuat tujuan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>4. </b>P : 
                </Form.Label>
                <Select name="d04_p" value={this.state.d04_p} onChange={this.onChangep4.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menjadi frustasi">Menjadi frustasi</Option>
                    <Option value="Menyimpan perasaan saya">Menyimpan perasaan saya</Option>
                    <Option value="Menceritakan sisi saya">Menceritakan sisi saya</Option>
                    <Option value="Siap beroposisi">Siap beroposisi</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>4. </b>K : 
                </Form.Label>
                <Select name="d04_k" value={this.state.d04_k} onChange={this.onChangek4.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menjadi frustasi">Menjadi frustasi</Option>
                    <Option value="Menyimpan perasaan saya">Menyimpan perasaan saya</Option>
                    <Option value="Menceritakan sisi saya">Menceritakan sisi saya</Option>
                    <Option value="Siap beroposisi">Siap beroposisi</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>5. </b>P : 
                </Form.Label>
                <Select name="d05_p" value={this.state.d05_p} onChange={this.onChangep5.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Hidup, Suka bicara">Hidup, Suka bicara</Option>
                    <Option value="Gerak cepat, Tekun">Gerak cepat, Tekun</Option>
                    <Option value="Usaha menjaga keseimbangan">Usaha menjaga keseimbangan</Option>
                    <Option value="Usaha mengikuti aturan">Usaha mengikuti aturan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>5. </b>K : 
                </Form.Label>
                <Select name="d05_k" value={this.state.d05_k} onChange={this.onChangek5.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Hidup, Suka bicara">Hidup, Suka bicara</Option>
                    <Option value="Gerak cepat, Tekun">Gerak cepat, Tekun</Option>
                    <Option value="Usaha menjaga keseimbangan">Usaha menjaga keseimbangan</Option>
                    <Option value="Usaha mengikuti aturan">Usaha mengikuti aturan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>6. </b>P : 
                </Form.Label>
                <Select name="d06_p" value={this.state.d06_p} onChange={this.onChangep6.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Kelola waktu secara efisien">Kelola waktu secara efisien</Option>
                    <Option value="Sering terburu-buru, Merasa tertekan">Sering terburu-buru, Merasa tertekan</Option>
                    <Option value="Masalah sosial itu penting">Masalah sosial itu penting</Option>
                    <Option value="Suka selesaikan apa yang saya mulai">Suka selesaikan apa yang saya mulai</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>6. </b>K : 
                </Form.Label>
                <Select name="d06_k" value={this.state.d06_k} onChange={this.onChangek6.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Kelola waktu secara efisien">Kelola waktu secara efisien</Option>
                    <Option value="Sering terburu-buru, Merasa tertekan">Sering terburu-buru, Merasa tertekan</Option>
                    <Option value="Masalah sosial itu penting">Masalah sosial itu penting</Option>
                    <Option value="Suka selesaikan apa yang saya mulai">Suka selesaikan apa yang saya mulai</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>7. </b>P : 
                </Form.Label>
                <Select name="d07_p" value={this.state.d07_p} onChange={this.onChangep7.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tolak perubahan mendadak">Tolak perubahan mendadak</Option>
                    <Option value="Cenderung janji berlebihan">Cenderung janji berlebihan</Option>
                    <Option value="Tarik diri di tengah tekanan">Tarik diri di tengah tekanan</Option>
                    <Option value="Tidak takut bertempur">Tidak takut bertempur</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>7. </b>K : 
                </Form.Label>
                <Select name="d07_k" value={this.state.d07_k} onChange={this.onChangek7.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tolak perubahan mendadak">Tolak perubahan mendadak</Option>
                    <Option value="Cenderung janji berlebihan">Cenderung janji berlebihan</Option>
                    <Option value="Tarik diri di tengah tekanan">Tarik diri di tengah tekanan</Option>
                    <Option value="Tidak takut bertempur">Tidak takut bertempur</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>8. </b>P : 
                </Form.Label>
                <Select name="d08_p" value={this.state.d08_p} onChange={this.onChangep8.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Penyemangat yang baik">Penyemangat yang baik</Option>
                    <Option value="Pendengar yang baik">Pendengar yang baik</Option>
                    <Option value="Penganalisis yang baik">Penganalisis yang baik</Option>
                    <Option value="Delegator yang baik">Delegator yang baik</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>8. </b>K : 
                </Form.Label>
                <Select name="d08_k" value={this.state.d08_k} onChange={this.onChangek8.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Penyemangat yang baik">Penyemangat yang baik</Option>
                    <Option value="Pendengar yang baik">Pendengar yang baik</Option>
                    <Option value="Penganalisis yang baik">Penganalisis yang baik</Option>
                    <Option value="Delegator yang baik">Delegator yang baik</Option>
                </Select>
            </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                <Form.Label>
                    <b> 9. </b>P : 
                </Form.Label>
                <Select name="d09_p" value={this.state.d09_p} onChange={this.onChangep9.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 18 }}>
                    <Option value="Hasil adalah penting">Hasil adalah penting</Option>
                    <Option value="Lakukan dengan benar, Akurasi penting">Lakukan dengan benar, Akurasi penting</Option>
                    <Option value="Dibuat menyenangkan">Dibuat menyenangkan</Option>
                    <Option value="Mari kerjakan bersama">Mari kerjakan bersama</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b> 9. </b>K : 
                </Form.Label>
                <Select name="d09_k" value={this.state.d09_k} onChange={this.onChangek9.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 18 }}>
                    <Option value="Hasil adalah penting">Hasil adalah penting</Option>
                    <Option value="Lakukan dengan benar, Akurasi penting">Lakukan dengan benar, Akurasi penting</Option>
                    <Option value="Dibuat menyenangkan">Dibuat menyenangkan</Option>
                    <Option value="Mari kerjakan bersama">Mari kerjakan bersama</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>10. </b>P : 
                </Form.Label>
                <Select name="d10_p" value={this.state.d10_p} onChange={this.onChangep10.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Akan berjalan terus tanpa kontrol diri">Akan berjalan terus tanpa kontrol diri</Option>
                    <Option value="Akan membeli sesuai dorongan hati">Akan membeli sesuai dorongan hati</Option>
                    <Option value="Akan menunggu, Tanpa tertekan">Akan menunggu, Tanpa tertekan</Option>
                    <Option value="Akan mengusahakan yang kuinginkan">Akan mengusahakan yang kuinginkan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>10. </b>K : 
                </Form.Label>
                <Select name="d10_k" value={this.state.d10_k} onChange={this.onChangek10.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Akan berjalan terus tanpa kontrol diri">Akan berjalan terus tanpa kontrol diri</Option>
                    <Option value="Akan membeli sesuai dorongan hati">Akan membeli sesuai dorongan hati</Option>
                    <Option value="Akan menunggu, Tanpa tertekan">Akan menunggu, Tanpa tertekan</Option>
                    <Option value="Akan mengusahakan yang kuinginkan">Akan mengusahakan yang kuinginkan</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>11. </b>P : 
                </Form.Label>
                <Select name="d11_p" value={this.state.d11_p} onChange={this.onChangep11.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ramah, Mudah bergabung">Ramah, Mudah bergabung</Option>
                    <Option value="Unik, Bosan rutinitas">Unik, Bosan rutinitas</Option>
                    <Option value="Aktif mengubah sesuatu">Aktif mengubah sesuatu</Option>
                    <Option value="Ingin hal-hal yang pasti">Ingin hal-hal yang pasti</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>11. </b>K : 
                </Form.Label>
                <Select name="d11_k" value={this.state.d11_k} onChange={this.onChangek11.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ramah, Mudah bergabung">Ramah, Mudah bergabung</Option>
                    <Option value="Unik, Bosan rutinitas">Unik, Bosan rutinitas</Option>
                    <Option value="Aktif mengubah sesuatu">Aktif mengubah sesuatu</Option>
                    <Option value="Ingin hal-hal yang pasti">Ingin hal-hal yang pasti</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>12. </b>P : 
                </Form.Label>
                <Select name="d12_p" value={this.state.d12_p} onChange={this.onChangep12.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Non-konfrontasi, Menyerah">Non-konfrontasi, Menyerah</Option>
                    <Option value="Dipenuhi hal detail">Dipenuhi hal detail</Option>
                    <Option value="Perubahan pada menit terakhir">Perubahan pada menit terakhir</Option>
                    <Option value="Menuntut, Kasar">Menuntut, Kasar</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>12. </b>K : 
                </Form.Label>
                <Select name="d12_k" value={this.state.d12_k} onChange={this.onChangek12.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Non-konfrontasi, Menyerah">Non-konfrontasi, Menyerah</Option>
                    <Option value="Dipenuhi hal detail">Dipenuhi hal detail</Option>
                    <Option value="Perubahan pada menit terakhir">Perubahan pada menit terakhir</Option>
                    <Option value="Menuntut, Kasar">Menuntut, Kasar</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>13. </b>P : 
                </Form.Label>
                <Select name="d13_p" value={this.state.d13_p} onChange={this.onChangep13.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ingin kemajuan">Ingin kemajuan</Option>
                    <Option value="Puas dengan segalanya">Puas dengan segalanya</Option>
                    <Option value="Terbuka memperlihatkan perasaan">Terbuka memperlihatkan perasaan</Option>
                    <Option value="Rendah hati, Sederhana">Rendah hati, Sederhana</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>13. </b>K : 
                </Form.Label>
                <Select name="d13_k" value={this.state.d13_k} onChange={this.onChangek13.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ingin kemajuan">Ingin kemajuan</Option>
                    <Option value="Puas dengan segalanya">Puas dengan segalanya</Option>
                    <Option value="Terbuka memperlihatkan perasaan">Terbuka memperlihatkan perasaan</Option>
                    <Option value="Rendah hati, Sederhana">Rendah hati, Sederhana</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>14. </b>P : 
                </Form.Label>
                <Select name="d14_p" value={this.state.d14_p} onChange={this.onChangep14.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tenang, Pendiam">Tenang, Pendiam</Option>
                    <Option value="Bahagia, Tanpa beban">Bahagia, Tanpa beban</Option>
                    <Option value="Menyenangkan, Baik hati">Menyenangkan, Baik hati</Option>
                    <Option value="Tak gentar, Berani">Tak gentar, Berani</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>14. </b>K : 
                </Form.Label>
                <Select name="d14_k" value={this.state.d14_k} onChange={this.onChangek14.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tenang, Pendiam">Tenang, Pendiam</Option>
                    <Option value="Bahagia, Tanpa beban">Bahagia, Tanpa beban</Option>
                    <Option value="Menyenangkan, Baik hati">Menyenangkan, Baik hati</Option>
                    <Option value="Tak gentar, Berani">Tak gentar, Berani</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>15. </b>P : 
                </Form.Label>
                <Select name="d15_p" value={this.state.d15_p} onChange={this.onChangep15.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menggunakan waktu berkualitas dengan teman">Menggunakan waktu berkualitas dengan teman</Option>
                    <Option value="Rencanakan masa depan, Bersiap">Rencanakan masa depan, Bersiap</Option>
                    <Option value="Berpergian demi petualangan baru">Berpergian demi petualangan baru</Option>
                    <Option value="Menerima ganjaran atas tujuan yang dicapai">Menerima ganjaran atas tujuan yang dicapai</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>15. </b>K : 
                </Form.Label>
                <Select name="d13_k" value={this.state.d15_k} onChange={this.onChangek15.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menggunakan waktu berkualitas dengan teman">Menggunakan waktu berkualitas dengan teman</Option>
                    <Option value="Rencanakan masa depan, Bersiap">Rencanakan masa depan, Bersiap</Option>
                    <Option value="Berpergian demi petualangan baru">Berpergian demi petualangan baru</Option>
                    <Option value="Menerima ganjaran atas tujuan yang dicapai">Menerima ganjaran atas tujuan yang dicapai</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>16. </b>P : 
                </Form.Label>
                <Select name="d16_p" value={this.state.d16_p} onChange={this.onChangep16.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Aturan perlu dipertanyakan">Aturan perlu dipertanyakan</Option>
                    <Option value="Aturan membuat adil">Aturan membuat adil</Option>
                    <Option value="Aturan membuat bosan">Aturan membuat bosan</Option>
                    <Option value="Aturan membuat aman">Aturan membuat aman</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>16. </b>K : 
                </Form.Label>
                <Select name="d16_k" value={this.state.d16_k} onChange={this.onChangek16.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Aturan perlu dipertanyakan">Aturan perlu dipertanyakan</Option>
                    <Option value="Aturan membuat adil">Aturan membuat adil</Option>
                    <Option value="Aturan membuat bosan">Aturan membuat bosan</Option>
                    <Option value="Aturan membuat aman">Aturan membuat aman</Option>
                </Select>
            </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                <Form.Label>
                    <b>17. </b>P : 
                </Form.Label>
                <Select name="d17_p" value={this.state.d17_p} onChange={this.onChangep17.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Pendidikan, Kebudayaan">Pendidikan, Kebudayaan</Option>
                    <Option value="Prestasi, Ganjaran">Prestasi, Ganjaran</Option>
                    <Option value="Keselamatan, keamanan">Keselamatan, keamanan</Option>
                    <Option value="Sosial, Perkumpulan kelompok">Sosial, Perkumpulan kelompok</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>17. </b>K : 
                </Form.Label>
                <Select name="d17_k" value={this.state.d17_k} onChange={this.onChangek17.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Pendidikan, Kebudayaan">Pendidikan, Kebudayaan</Option>
                    <Option value="Prestasi, Ganjaran">Prestasi, Ganjaran</Option>
                    <Option value="Keselamatan, keamanan">Keselamatan, keamanan</Option>
                    <Option value="Sosial, Perkumpulan kelompok">Sosial, Perkumpulan kelompok</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>18. </b>P : 
                </Form.Label>
                <Select name="d18_p" value={this.state.d18_p} onChange={this.onChangep18.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Memimpin, Pendekatan langsung">Memimpin, Pendekatan langsung</Option>
                    <Option value="Suka bergaul, Antusias">Suka bergaul, Antusias</Option>
                    <Option value="Dapat diramal, Konsisten">Dapat diramal, Konsisten</Option>
                    <Option value="Waspada, Hati-hati">Waspada, Hati-hati</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>18. </b>K : 
                </Form.Label>
                <Select name="d18_k" value={this.state.d18_k} onChange={this.onChangek18.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Memimpin, Pendekatan langsung">Memimpin, Pendekatan langsung</Option>
                    <Option value="Suka bergaul, Antusias">Suka bergaul, Antusias</Option>
                    <Option value="Dapat diramal, Konsisten">Dapat diramal, Konsisten</Option>
                    <Option value="Waspada, Hati-hati">Waspada, Hati-hati</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>19. </b>P : 
                </Form.Label>
                <Select name="d19_p" value={this.state.d19_p} onChange={this.onChangep19.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tidak mudah dikalahkan">Tidak mudah dikalahkan</Option>
                    <Option value="Kerjakan sesuai perintah, Ikut pimpinan">Kerjakan sesuai perintah, Ikut pimpinan</Option>
                    <Option value="Mudah terangsang, Riang">Mudah terangsang, Riang</Option>
                    <Option value="Ingin segalanya teratur, Rapi">Ingin segalanya teratur, Rapi</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>19. </b>K : 
                </Form.Label>
                <Select name="d19_k" value={this.state.d19_k} onChange={this.onChangek19.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Tidak mudah dikalahkan">Tidak mudah dikalahkan</Option>
                    <Option value="Kerjakan sesuai perintah, Ikut pimpinan">Kerjakan sesuai perintah, Ikut pimpinan</Option>
                    <Option value="Mudah terangsang, Riang">Mudah terangsang, Riang</Option>
                    <Option value="Ingin segalanya teratur, Rapi">Ingin segalanya teratur, Rapi</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>20. </b>P : 
                </Form.Label>
                <Select name="d20_p" value={this.state.d20_p} onChange={this.onChangep20.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Saya akan pimpin mereka">Saya akan pimpin mereka</Option>
                    <Option value="Saya akan melaksanakan">Saya akan melaksanakan</Option>
                    <Option value="Saya akan meyakinkan mereka">Saya akan meyakinkan mereka</Option>
                    <Option value="Saya dapatkan fakta">Saya dapatkan fakta</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>20. </b>K : 
                </Form.Label>
                <Select name="d20_k" value={this.state.d20_k} onChange={this.onChangek20.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Saya akan pimpin mereka">Saya akan pimpin mereka</Option>
                    <Option value="Saya akan melaksanakan">Saya akan melaksanakan</Option>
                    <Option value="Saya akan meyakinkan mereka">Saya akan meyakinkan mereka</Option>
                    <Option value="Saya dapatkan fakta">Saya dapatkan fakta</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>21. </b>P : 
                </Form.Label>
                <Select name="d21_p" value={this.state.d21_p} onChange={this.onChangep21.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Memikirkan orang dahulu">Memikirkan orang dahulu</Option>
                    <Option value="Kompetitif, Suka tantangan">Kompetitif, Suka tantangan</Option>
                    <Option value="Optimis, Positif">Optimis, Positif</Option>
                    <Option value="Pemikir logis, sistematik">Pemikir logis, sistematik</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>21. </b>K : 
                </Form.Label>
                <Select name="d21_k" value={this.state.d21_k} onChange={this.onChangek21.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Memikirkan orang dahulu">Memikirkan orang dahulu</Option>
                    <Option value="Kompetitif, Suka tantangan">Kompetitif, Suka tantangan</Option>
                    <Option value="Optimis, Positif">Optimis, Positif</Option>
                    <Option value="Pemikir logis, sistematik">Pemikir logis, sistematik</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>22. </b>P : 
                </Form.Label>
                <Select name="d22_p" value={this.state.d22_p} onChange={this.onChangep22.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menyenangkan orang, Mudah setuju">Menyenangkan orang, Mudah setuju</Option>
                    <Option value="Tertawa lepas, Hidup">Tertawa lepas, Hidup</Option>
                    <Option value="Berani, Tak gentar">Berani, Tak gentar</Option>
                    <Option value="Tenang, Pendiam">Tenang, Pendiam</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>22. </b>K : 
                </Form.Label>
                <Select name="d22_k" value={this.state.d22_k} onChange={this.onChangek22.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Menyenangkan orang, Mudah setuju">Menyenangkan orang, Mudah setuju</Option>
                    <Option value="Tertawa lepas, Hidup">Tertawa lepas, Hidup</Option>
                    <Option value="Berani, Tak gentar">Berani, Tak gentar</Option>
                    <Option value="Tenang, Pendiam">Tenang, Pendiam</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>23. </b>P : 
                </Form.Label>
                <Select name="d23_p" value={this.state.d23_p} onChange={this.onChangep23.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ingin otoritas lebih">Ingin otoritas lebih</Option>
                    <Option value="Ingin kesempatan baru">Ingin kesempatan baru</Option>
                    <Option value="Menghindari konflik">Menghindari konflik</Option>
                    <Option value="Ingin petunjuk yang jelas">Ingin petunjuk yang jelas</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>23. </b>K : 
                </Form.Label>
                <Select name="d23_k" value={this.state.d23_k} onChange={this.onChangek23.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Ingin otoritas lebih">Ingin otoritas lebih</Option>
                    <Option value="Ingin kesempatan baru">Ingin kesempatan baru</Option>
                    <Option value="Menghindari konflik">Menghindari konflik</Option>
                    <Option value="Ingin petunjuk yang jelas">Ingin petunjuk yang jelas</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>24. </b>P : 
                </Form.Label>
                <Select name="d24_p" value={this.state.d24_p} onChange={this.onChangep24.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Dapat diandalkan, Dapat dipercaya">Dapat diandalkan, Dapat dipercaya</Option>
                    <Option value="Kreatif, Unik">Kreatif, Unik</Option>
                    <Option value="Garis dasar, Orientasi hasil">Garis dasar, Orientasi hasil</Option>
                    <Option value="Jalankan standar yang tinggi, Akurat">Jalankan standar yang tinggi, Akurat</Option>
                </Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    <b>24. </b>K : 
                </Form.Label>
                <Select name="d24_k" value={this.state.d24_k} onChange={this.onChangek24.bind(this)} placeholder="---------Pernyataan----------" style={{ borderRadius: 6, paddingLeft: 10 }}>
                    <Option value="Dapat diandalkan, Dapat dipercaya">Dapat diandalkan, Dapat dipercaya</Option>
                    <Option value="Kreatif, Unik">Kreatif, Unik</Option>
                    <Option value="Garis dasar, Orientasi hasil">Garis dasar, Orientasi hasil</Option>
                    <Option value="Jalankan standar yang tinggi, Akurat">Jalankan standar yang tinggi, Akurat</Option>
                </Select>
            </Form.Group>
                </Col>
            </Row>
        </Form>
            <Button onClick={this.onSubmit.bind(this)} size="large" shape="round" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)", marginBottom: 20}} type="primary">Submit</Button>
            <br></br>
            </Container>
            </div>
    )
}
}