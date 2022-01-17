import React from 'react';
import './App.css';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Content from './Components/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Aside/>
      <Content/>
    </div>
  );
};

export default App;