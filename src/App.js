import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Home from './pages/home/Home';
import Header from './component/header/Header';
import SideBar from './component/sidebar/SideBar';
import Atish, { ButtonTest } from './component/buttons/CustomButton';
import A from './component/A';
import B from './component/B';


function App() {

  const [name, setName] = useState('')



  const Htag = () => {
    return <h1>No data</h1>
  }

  return (
    <div className="main-container">
      <Header />
      <div className='main-container-wrapper'>
        <SideBar />
        <Home />
      </div>
      {/* <A updatedValue={(d) => {
        setName(d)
        alert(` app ${d}`)
      }} />
      <br />
      <br />
      <B name={name} /> */}
    </div>
  );
}

export default App;
