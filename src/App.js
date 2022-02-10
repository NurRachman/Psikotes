import React from 'react';
import Introduction from './form/Introduction.js';
import Biodata from './form/Biodata.js';
import InstruksiDisc from './form/InstruksiDisc.js';
import TesDisc from './form/TesDisc.js';
import InstruksiWpt from './form/InstruksiWpt.js';
import TesWpt from './form/TesWpt.js';
import Finish from './form/Finish.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return(
  <Router>
    <div>
      <Switch> 
        <Introduction path="/" exact component={Introduction}/>
        <Biodata path="/biodata" component={Biodata}/>
        <InstruksiDisc path="/InstruksiDisc" component={InstruksiDisc}/>
        <TesDisc path="/TesDisc" component={TesDisc} />
        <InstruksiWpt path="/InstruksiWpt" component={InstruksiWpt}/>
        <TesWpt path="/TesWpt" component={TesWpt}/>
        <Finish path="/Finish" component={Finish}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
