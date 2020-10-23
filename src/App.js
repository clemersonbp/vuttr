import React from 'react';
import Input from './components/Search';
import InputTag from './components/InputTag';
import AddTool from './components/AddTool';
import Tools from './components/Tools';

import logo from './assets/logo.jpg';

import './styles/app.css'

function App() {

  return (
    <div className="App">
      <div className="center">
        <header>
          <h1>VUTTR<p>Very Useful Tools to Remember</p></h1>
          <img src={logo} className="logo" alt="V4" />
        </header>
        <main className="search-tools">
          <Input />
          <InputTag />
          <p>search tags only</p>
          <AddTool />
        </main>
        <div className="tools">
          <Tools />
        </div>
      </div>
    </div>
  );
}

export default App;
