import logo from './logo.svg';
import './App.css';
import React,{Provider} from 'react';
import Home from './pages/home/Home';
import Header from './component/Header/Header';
import SideBar from './component/sidebar/SideBar';

function App() {
  
  return (
  
    <Provider  >
      <div className="main-container">
      <Header />
      <div className='main-container-wrapper'>
        <SideBar />
        <Home />
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
