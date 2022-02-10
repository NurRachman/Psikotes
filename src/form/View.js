import React, { Component } from 'react';
import { Steps, Button, message, Layout } from 'antd';
import PersonalInformation from './personalInformation';
import Soal from './Soal/soal';
import { useForm, useStep } from 'react-hooks-helper';
import './styles.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Data Diri',
    content: <PersonalInformation/>,
  },
  {
    title: 'Psikotes',
    content:  <Soal/>,
  },
  {
    title: 'Saran & Masukan',
    content: 'Last-content',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      fullName: '',
      pob: '',
      email: '',
      gender: '',
      dateofbirth: '',
      phone: '',
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleChange = input => e =>{
    this.setState({[input]: e.target.value});
  }

  render() {
    const { current } = this.state;
    const { fullName, pob, email, gender, dateofbirth, phone } = this.state;
    const values = { fullName, pob, email, gender, dateofbirth, phone }
    return (
      <>
        <Layout style={{ height: '50vh', padding: 24 }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action" style={{marginBottom:'1px'}}>
            {current < steps.length - 1 && (
              <Button type="primary" style={{float:'right'}} onClick={() => this.next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && ( 
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button type="primary" style={{ margin: '0 8px', marginLeft:'100px' }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}
          </div>
        </Layout>
      </>
    );
  }
}

export default App;
