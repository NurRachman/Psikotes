import React from 'react';
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

export const PersonalInformation = ({formData, setForm, navigation}) => {
  const { fullname, pob, email, gender, dateofBirth, phone } = FormData ;
  return (
    <Layout style={{ background: '#fafafa', padding: 32, margin: 'auto', width: 'auto'}}>
      <h3>Isi Biodata</h3>
      <Form layout='vertical' onFinish={onFinish}>
      <Row gutter={32,32}>
        <Col span={12}>
          <Form.Item name="fullname" label="Full Name" rules={[{ required: true, message: 'Wajib diisi!' }]}>
            <Input placeholder="Nama Lengkap" value={fullname} style={{ borderRadius: 6 }} />
          </Form.Item>
          <Form.Item name="pob" label="Place Birth" rules={[{ required: true, message: 'Wajib diisi!' }]}>
            <Input placeholder="Tempat Lahir" value={pob} style={{ borderRadius: 6 }} />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Wajib diisi!' }]}>
            <Input placeholder="Email" value={email} style={{ borderRadius: 6 }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Wajib diisi!' }]}>
            <Select placeholder="Jenis Kelamin" value={gender} style={{ borderRadius: 6 }}>
              <Option value="Pria">Pria</Option>
              <Option value="Wanita">Wanita</Option>
            </Select>
          </Form.Item>
          <Form.Item name="dateofBirth" label="Date of Birth" rules={[{ required: true, message: 'Wajib diisi!' }]}>
              <DatePicker value={dateofBirth} format="DD-MM-YYYY"/>
          </Form.Item>
          <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Wajib diisi!' }]}>
            <Input placeholder="No Telp" value={phone} style={{ borderRadius: 6 }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Simpan Biodata</Button>
      </Form.Item>
      </Form>
    </Layout>
  );
};

export default PersonalInformation;