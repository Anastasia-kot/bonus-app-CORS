import { useEffect, useState } from 'react';
// import { getToken } from './api/api.ts';
import './styles/index.css';
import { Bonus } from './components/Bonus/Bonus';
import { Lead } from './components/Lead/Lead';
import { StatusBar } from './components/StatusBar/StatusBar';
import { requestOptions } from './api/api';

export const App = () => {

 
  return (
    <div className="app">
      <header className="App-header">
        <StatusBar/>
      </header>
      <div>
        <Lead/>
        <Bonus/>
      </div>
    </div>
  );
}

