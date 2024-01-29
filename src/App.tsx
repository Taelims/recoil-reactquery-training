import React from 'react';
import './App.css';
import NavBarCom from './components/NavBarCom'
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.css';
import ReactRoute from './routes/Route'

function App() {
  return (
    <>
      <RecoilRoot>
        <NavBarCom/>
        <ReactRoute/>
      </RecoilRoot>
    </>
  );
}

export default App;
