


import './App.css';
import './client/main.css'
import React, { useEffect, useState } from "react";
import Dashboard from './client/main.js'
import { connect } from "react-redux";
import Chat from '/mnt/d/answer/projects/src/client/chat.js';
import KommunicateChat from '/mnt/d/answer/projects/src/client/chat.js';
import Change from '/mnt/d/answer/projects/src/client/change.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route exact path="info" element={<Change/>}/>
      </Routes>
      </BrowserRouter>
      <KommunicateChat/>
      </React.Fragment>
  );
}

export default App;
