import React, { Component } from 'react';
import {
    Row,
    Col,
    Input,
    Layout,
    Form,
    Button,
    Select,
    DatePicker,
  } from 'antd';
import { Link } from 'react-router-dom';
import './Biodata.css';


  const { Option } = Select;

  const onFinish = fieldValue => {
    const values = {
      'fullname': fieldValue['fullname'],
      'pob': fieldValue['pob'],
      'email': fieldValue['email'],
      'gender': fieldValue['gender'],
      'dateofBirth': fieldValue['dateofBirth'].format('DD-MM-YYYY'),
      'phone': fieldValue['phone'], 
    }
    console.log(values);
  };


export default class Biodata extends Component {
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
    

  constructor(props) {
    super(props);

    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeDateofBirth = this.onChangeDateofBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePob = this.onChangePob.bind(this);
    this.onChangeNik = this.onChangeNik.bind(this);
    this.onChangeUsia = this.onChangeUsia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullname: '',
      email: '',
      phone: '',
      dateofBirth: '',
      gender: '',
      pob: '',
      nik: '',
      usia: '',
    }
  }

  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeNik(e) {
    this.setState({
      nik: e.target.value
    });
  }

  onChangeUsia(e) {
    this.setState({
      usia: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeDateofBirth(Date) {
    this.setState({
      dateofBirth: Date
    });
  }

  /*onStateChange (selectedOption) {
    this.setState({ value: selectedOption });
  };*/

  onChangeGender(e) {
    this.setState({
      gender: e
    });
  }

  onChangePob(e) {
    this.setState({
      pob: e.target.value
    });
  }

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('biodata'));

    if (localStorage.getItem('biodata')) {
      this.setState({
        fullname: this.userData.fullname,
        email: this.userData.email,
        phone: this.userData.phone,
        dateofBirth: this.userData.dateofBirth,
        gender: this.userData.gender,
        pob: this.userData.pob,
        nik: this.userData.nik,
        usia: this.userData.usia,
      })
    } else {
      this.setState({
        fullname: '',
        email: '',
        phone: '',
        dateofBirth: '',
        gender: '',
        pob: '',
        nik: '',
        usia: '',
      })
    }
    console.log(this.hasilData)
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('biodata', JSON.stringify(nextState));
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.fullname !== '' && this.state.email !== '' && this.state.pob !== '' && this.state.phone !== '' &&
    this.state.usia !== '' && this.state.nik !== '' && this.state.dateofBirth !== '' && this.state.gender !== '') {
      window.location.replace("/InstruksiDisc");
    }else {
      alert("Silahkan lengkapi data diri Anda.");
    };
  }

    render(){
    return (
        <div className="bio_main">
      <div className="jdl_bio"><img className="logo_bio" src="/image/AIT.png" alt="logo"></img><h3><b>Data Diri</b></h3><br></br></div>
      <Form name="biodata" layout='vertical' method="post" onSubmit={this.onSubmit}>
      <Row gutter={[32,32]}>
        <Col span={12}>
          <Form.Item name="fullname" label="Full Name (sesuai KTP)" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "35%" }}>
            <Input placeholder="Nama Lengkap" rules={[{ required: true, message: 'Wajib diisi!' }]} value={this.state.fullname} onChange={this.onChangeFullname} style={{ borderRadius: 6, width: 300, borderWidth: 2 }} />
          </Form.Item>
          <Form.Item name="nik" label="ID Number" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "35%" }}>
            <Input placeholder="Nomor KTP" rules={[{ required: true, message: 'Wajib diisi!' }]} value={this.state.nik} onChange={this.onChangeNik} style={{ borderRadius: 6, width: 300, borderWidth: 2 }} />
          </Form.Item>
          <Form.Item name="pob" label="Place of Birth" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "35%" }}>
            <Input placeholder="Tempat Lahir" value={this.state.pob} onChange={this.onChangePob} style={{ borderRadius: 6, width: 300, borderWidth: 2 }} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "35%" }}>
            <Input placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} style={{ borderRadius: 6, width: 300, borderWidth: 2 }} />
          </Form.Item>
        </Col>
        <Col span={12}> 
          <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "13%" }}>
            <Select value={this.state.gender} onChange={this.onChangeGender} placeholder="Jenis Kelamin" style={{ borderRadius: 6, width: 250, borderWidth: 2 }}>
              <Option value="Pria">Pria</Option>
              <Option value="Wanita">Wanita</Option>
            </Select>
          </Form.Item>
          <Form.Item name="dateofBirth" label="Date of Birth" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "13%" }}>
              <DatePicker value={this.state.dateofBirth} onChange={this.onChangeDateofBirth} style={{ borderRadius: 6, width: 250, borderWidth: 2 }}/>
          </Form.Item>
          <Form.Item name="usia" label="Age" rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "13%" }}>
            <Input value={this.state.usia} onChange={this.onChangeUsia} placeholder="Usia" style={{ borderRadius: 6, width: 250, borderWidth: 2 }} /> 
          </Form.Item>
          <Form.Item name="phone" label="Phone Number " rules={[{ required: true, message: 'Wajib diisi!' }]} style={{ paddingLeft: "13%" }}>
            <Input value={this.state.phone} onChange={this.onChangePhone} placeholder="No Telp" style={{ borderRadius: 6, width: 250, borderWidth: 2 }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <div className="bio_btn">
                <Button onClick={this.onSubmit} shape="round" size="large" style={{background: "rgb(0, 63, 110)", borderColor: "rgb(0, 63, 110)"}} type="primary">Submit</Button>
          </div>
      </Form.Item>
      </Form>
        </div>
    )
}
}