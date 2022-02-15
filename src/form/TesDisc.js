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

    constructor(){
        super()
        this.state={
            contoh: [
                {
                    noSoal: 1,
                    detail: [
                        'Gampangan, Mudah setuju',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                    selected: null,
                },
                {
                    noSoal: 2,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                    selected: null,
                },
            ],
            soal: [
                {
                    noSoal: 1,
                    detail: [
                        'Gampangan, Mudah setuju',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 2,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 3,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 4,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 5,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 6,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 7,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 8,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 9,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 10,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 11,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 12,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 13,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 14,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 15,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 16,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 17,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 18,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 19,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 20,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 21,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 22,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 23,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
                {
                    noSoal: 24,
                    detail: [
                        'Lembut Suara, Pendiam',
                        'Percaya, Mudah percaya pada orang',
                        'Petualang, Mengambil resiko',
                        'Toleran, Menghormati',
                    ],
                },
            ]
        }
    }

    renderContoh() {
        return (
            <Container style={{ textAlign: 'left', marginTop: '10px', }}>
                <Row className="container">
                    <Col>
                        <h4>
                            DISC Personality Profile
                        </h4>
                        <label>
                            <h5>Instructions:</h5>
                        </label>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0px', fontSize: '13px' }}>  <h6>Setiap nomor dibawah ini memuat 4 (Empat) kalimat. <br></br>Tugas anda adalah...</h6>
                            </p>
                            <p style={{ margin: '0px', fontSize: '13px' }}>  1 : Berilah 1 saja tada "X" di kolom P pada kalimat yang paling sesuai dengan diri anda
                            </p>
                            <p style={{ margin: '0px', fontSize: '13px' }}>  2 : Berilah 1 saja tanda "X" di kolom K pada kalimat yang paling tidak sesuai dengan diri anda
                            </p>
                            <p style={{ margin: '0px', fontSize: '13px' }}>  3 : Di tiap kotak hanya boleh memilih (satu) P dan 1 (satu) K
                            </p>
                            <p style={{ margin: '0px', fontSize: '13px' }}>  4 : Usahakan seluruh pertanyaan diselesaikan sebelum waktu habis
                            </p>
                        </div>
                    </Col>


                    <Col><Table bordered>
                        <tbody>

                            <tr style={{ border: 'none' }} >
                                <th style={{ width: '50px', verticalAlign: 'middle', border: 'none', padding: '0px' }} rowSpan="5" >
                                    < div style={{ fontWeight: 'bold', textAlign: 'center', padding: '0px', transform: 'rotate(270deg)' }}>
                                        <label>Example</label>
                                    </div>
                                </th>
                                <th style={{ width: '40px', fontWeight: 'bold', padding: 5 }}> P </th>
                                <th style={{ width: '40px', fontWeight: 'bold', padding: 5 }}> K </th>
                                <th style={{ backgroundColor: '#969190', minWidth: '150px' }}> </th>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td style={{ padding: '0px', fontSize: '13px', fontWeight: 'bold'}}> X </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}>Mudah bergaul, ramah</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0px', fontSize: '13px' }}> </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}> </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}>Penuh kepercayaan, percaya pada orang lain</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0px', fontSize: '13px', fontWeight: 'bold'}}> X </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}> </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}>Petualang, pengambil resiko</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0px', fontSize: '13px' }}> </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}> </td>
                                <td style={{ padding: '0px', fontSize: '13px' }}>Toleran, penuh hormat</td>
                            </tr>
                        </tbody>
                    </Table>

                    </Col>

                </Row>
                
            </Container>
        );
    };

    renderHeaderSectionTab(noSoal) {
        return (
            <tr style={{ border: 'none', textAlign: 'center' }} >
                <td style={{ width: '50px', border: 'none', padding: '10px', verticalAlign: 'middle' }} rowSpan="5" >
                    < div style={{ fontWeight: 'bold', textAlign: 'center', padding: '0px', }}>{noSoal}</div>
                </td>
                <th style={{ width: '40px', fontWeight: 'bold', padding: 5 }}> P </th>
                <th style={{ width: '40px', fontWeight: 'bold', padding: 5 }}> K </th>
                <th style={{ backgroundColor: '#969190', minWidth: '150px', padding: 5 }}> </th>
            </tr>
        );
    }

    render() {

        const arrSoal = [
            {
                noSoal: 1,
                detail: [
                    'Gampangan, Mudah setuju',
                    'Percaya, Mudah percaya pada orang',
                    'Petualang, Mengambil resiko',
                    'Toleran, Menghormati',
                ],
            },
            {
                noSoal: 2,
                detail: [
                    'Lembut Suara, Pendiam',
                    'Percaya, Mudah percaya pada orang',
                    'Petualang, Mengambil resiko',
                    'Toleran, Menghormati',
                ],
            },
            {
                noSoal: 3,
                detail: [
                    'Menyemangati orang',
                    'Berusaha sempurna',
                    'Bagian dari kelompok',
                    'Ingin membuat tujuan',
                ],
            },
            {
                noSoal: 4,
                detail: [
                    'Menjadi frustrasi',
                    'Menyimpan perasaan saya',
                    'Menceritakan sisi saya',
                    'Siap beroposisi',
                ],
            },
            {
                noSoal: 5,
                detail: [
                    'Hodup, suka bicara',
                    'Gerak cepat, tekun',
                    'Usaha menjaga keseimbangan',
                    'Usaha mengikuti aturan',
                ],
            },
            {
                noSoal: 6,
                detail: [
                    'Kelola waktu secara efisien',
                    'Sering terburu-buru, merasa tertekan',
                    'Masalah sosial itu penting',
                    'Suka selesaikan apa yang saya mulai',
                ],
            },
            {
                noSoal: 7,
                detail: [
                    'Tolak perubahan mendadak',
                    'Cenderung janji berlebihan',
                    'Tarik diri ditengah tekanan',
                    'Tidak takut bertempur',
                ],
            },
            {
                noSoal: 8,
                detail: [
                    'Penyemangat yang baik',
                    'Pendengar yang baik',
                    'Penganalisa yang baik',
                    'Delegator yang baik',
                ],
            },
            {
                noSoal: 9,
                detail: [
                    'Hasil adalah penting',
                    'Lakukan dengan benar, akurasi penting',
                    'Dibuat menyenangkan',
                    'Mari kerjakan bersama',
                ],
            },
            {
                noSoal: 10,
                detail: [
                    'Aku berjalan terus tanpa kontrol diri',
                    'Akan membeli sesuai dorongan hati',
                    'Akan menunggu, tanpa tekanan',
                    'Akan mengusahakan yang kuinginkan',
                ],
            },
            {
                noSoal: 11,
                detail: [
                    'Ramah, mudah bergabung',
                    'Unik, bosan rutinitas',
                    'Aktif mengubah sesuatu',
                    'Ingin hal-hal yang pasti',
                ],
            },
            {
                noSoal: 12,
                detail: [
                    'Non-konfrontasi, menyerah',
                    'Dipenuhi hal detail',
                    'Perubahan pada menit terakhir',
                    'Menuntut, kasar',
                ],
            },
            {
                noSoal: 13,
                detail: [
                    'Ingin kemajuan',
                    'Puas dengan segalanya',
                    'Terbuka memperlihatkan perasaan',
                    'Rendah hati, sederhana',
                ],
            },
            {
                noSoal: 14,
                detail: [
                    'Tenang, pendiam',
                    'Bahagia, tanpa beban',
                    'Menyenangkan, baik hati',
                    'Tak gentar, berani',
                ],
            },
            {
                noSoal: 15,
                detail: [
                    'Menggunakan waktu berkualitas dgn teman',
                    'Rencanakan masa depan, bersiap',
                    'Bepergian demi petualangan baru',
                    'Menerima ganjaran atas tujuan yg dicapai',
                ],
            },
            {
                noSoal: 16,
                detail: [
                    'Aturan perlu dipertanyakan',
                    'Aturan membuat adil',
                    'Aturan membuat bosan',
                    'Aturan membuat aman',
                ],
            },
            {
                noSoal: 17,
                detail: [
                    'Pendidikan, kebudayaan',
                    'Prestasi, ganjaran',
                    'Keselamatan, keamanan',
                    'Sosial, perkumpulan kelompok',
                ],
            },
            {
                noSoal: 18,
                detail: [
                    'Memimpin, pendekatan langsung',
                    'Suka bergaul, antusias',
                    'Dapat diramal, konsisten',
                    'Waspada, hati-hati',
                ],
            },
            {
                noSoal: 19,
                detail: [
                    'Tidak mudah dikalahkan',
                    'Kerjakan sesuai perintah, ikuti pimpinan',
                    'Mudah terangsang, riang',
                    'Ingin segalanya teratur, rapi',
                ],
            },
            {
                noSoal: 20,
                detail: [
                    'Saya akan pimpin mereka',
                    'Saya akan melaksanakan',
                    'Saya akan meyakinkan mereka',
                    'Saya dapat fakta',
                ],
            },
            {
                noSoal: 21,
                detail: [
                    'Memikirkan orang dahulu',
                    'Kompetitif, suka tantangan',
                    'Optimis, positif',
                    'Pemikir logis, sistematik',
                ],
            },
            {
                noSoal: 22,
                detail: [
                    'Menyenangkan orang, mudah setuju',
                    'Tertawa lepas, hidup',
                    'Berani, tak gentar',
                    'Tenang, pendiam',
                ],
            },
            {
                noSoal: 23,
                detail: [
                    'Ingin otoritas lebih',
                    'Ingin kesempatan baru',
                    'Menghindari konfik',
                    'Ingin petunjuk yang jelas',
                ],
            },
            {
                noSoal: 24,
                detail: [
                    'Dapat diandalkan, dapat dipercaya',
                    'Kreatif, unik',
                    'Garis dasar, orientasi hasil',
                    'Jalankan standar yang tinggi, akurat',
                ],
            },
        ];

        return (
            <React.Fragment>
                {this.renderContoh()}
                <Container style={{ textAlign: 'left', marginTop: '20px' }}>
                    <Row>
                            {
                                arrSoal.map((soal) => {
                                    return (
                                        <Col md={6}>
                                            <Table bordered>
                                                <tbody>
                                                    {this.renderHeaderSectionTab(soal.noSoal)}
                                                    {
                                                        soal.detail.map((optional) => {
                                                            return (
                                                                <tr>
                                                                    <td style={{ padding: '0px', fontSize: '13px', textAlign: 'center', verticalAlign: 'middle', height: '25px' }}>
                                                                        <input 
                                                                        name={`${soal.noSoal}P`}
                                                                            type="radio" 
                                                                            value="option2"
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: '0px', fontSize: '13px', textAlign: 'center' , verticalAlign: 'middle', height: '25px'}}>
                                                                        <input name={`${soal.noSoal}K`}
                                                                            type="radio" 
                                                                            value="option2" 
                                                                        />
                                                                    </td>
                                                                    <td style={{ padding: '0px', paddingLeft: '5px', fontSize: '13px' }}>{optional}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </Col>
                                    );
                                })
                            }               
             </Row>
             <Button shape="round" size="large" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)", marginBottom: "60px"}} type="primary">Submit</Button>
             </Container>   
             </React.Fragment>
             
        )
    }
}