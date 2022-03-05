import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import Content from './Components/Content/Content';
import Dialogs from './Components/Dialogs/Dialogs';
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
            <Route path="/profile" element={<Content profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
            <Route path="/news/" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;