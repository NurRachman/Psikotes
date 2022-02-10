import React, { Component } from 'react'
import { Steps, Button, message, Layout, Row } from 'antd';
import { ContainerRow, Col, Table, Container } from 'react-bootstrap'
export default class soal extends Component {
    render() {
        return (
            <React.Fragment>
            <Container style={{ textAlign: 'left', marginTop: '10px' }}>
                <Row className="justify-content-md-left">
                    <Col>
                        <h6>

                            DISC Personality Profile

</h6>
                        <label>
                            Instructions:
               </label>
                        <p style={{ margin: '0px', fontSize: '13px' }}>  Langkah 1 : Pilih salah satu jawaban pada kolom tersedia
            </p>
                        <p style={{ margin: '0px', fontSize: '13px' }}>  Langkah 2 : Tiap Kotak terdiri dari 4 kalimat, perhatikan dengan seksama pada setiap kalimat
            </p>
                        <p style={{ margin: '0px', fontSize: '13px' }}>  langkah 3 : Berilah 1 saja tada "X" di kolom M pada kalimat yang paling sesuai dengan diri anda
            </p>
                        <p style={{ margin: '0px', fontSize: '13px' }}>  Langkah 4 : Berilah 1 saja tanda "X" di kolom L pada kalimat yang paling tidak sesuai dengan diri anda
                 </p>
                        <p style={{ margin: '0px', fontSize: '13px' }}> Langkah 5 : Di tiap kotak hanya boleh memilih (satu) M dan 1 (satu) 
                        </p>
                        <p style={{ margin: '0px', fontSize: '13px' }}> Langkah 6 : Usahakan seluruh pertanyaan diselesaikan dalam waktu tidak lebih dari 7 menit
                        </p>
                 </Col>
                       

                    <Col><Table bordered>
                    <tbody>

                            <tr style={{border:'none'}} >
                                <th style={{border:'none', padding:'0px'}} rowSpan="5" >
                                < div style={{fontWeight:'bold', marginTop:'50%', textAlign:'center', padding:'0px', transform:'rotate(270deg)'}}>
                                    <label>Example</label>
                                </div>
                                </th>
                                <th style={{ fontWeight:'bold', Height:'7px' }}> M </th>
                                <th style={{fontWeight:'bold'}}> L </th>
                                <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                            </tr>
                            <tr>
                                <td > 
                               </td>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                            </tr>
                            <tr>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                            </tr>
                            <tr>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                            </tr>
                            <tr>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}> </td>
                                <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                            </tr>
                        </tbody>
                    </Table>
                    
                    
                    </Col>
                    
                </Row>
               
            </Container>
             <Container style={{textAlign: 'left', marginTop:'20px'}}>
             <Row>
             <Col><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Gampangan, Mudah setuju</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Percaya, Mudah percaya pada orang</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, Mengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, Menghormati</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>2</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Lembut Suara, Pendiam</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Optimistik, Visioner</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Pusat Perhatian, Suka gaul</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Pendamai, Membawa harmoni</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>3</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Menyemangati orang</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Berusaha sempurna</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Bagian dari kelompok</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Ingin membuat tujuan</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}> 4</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Menjadi frustrasi</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Menyimpan perasaan saya</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Menceritakan sisi saya</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Siap beroposisi</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table>
                 
                 
                 
                 </Col>
                 <Col><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table>
                 <Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table>
                 
                 
                 </Col>
                 <Col><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table>
                 <Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table><Table bordered>
                 <tbody>

                         <tr style={{border:'none'}} >
                             <td style={{border:'none', padding:'10px'}} rowSpan="5" >
                             < div style={{fontWeight:'bold', marginTop:'140%', textAlign:'center', padding:'0px',}}>1</div>
                             </td>
                             <th style={{ fontWeight:'bold' }}> M </th>
                             <th style={{fontWeight:'bold'}}> L </th>
                             <th style={{backgroundColor:'#969190',minWidth:'150px'}}> </th>
                         </tr>
                         <tr>
                             <td > 
                            </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Mudah bergaul, ramah</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Penuh kepercayaan, percaya pada orang lain</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Petualang, pengambil resiko</td>
                         </tr>
                         <tr>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}> </td>
                             <td style={{padding:'0px', fontSize:'13px'}}>Toleran, penuh hormat</td>
                         </tr>
                     </tbody>
                 </Table>
                 
                 
                 </Col>
             </Row>
             </Container>
             </React.Fragment>
        )
    }
}
