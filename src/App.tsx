import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Head } from './components/Head';
import { Foot } from './components/Foot';
import { Contents } from './components/Contents';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Head />
      </header>
      <main>
        <Contents />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
