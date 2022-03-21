import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Content from './Components/Content/Content';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Aside/>
      <div className='app-wrapper-content'>
        <Routes>
            <Route path="/profile" element={<Content/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
            <Route path="/news/" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;