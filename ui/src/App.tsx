import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormPage from './components/FormPage';
import ServiceListPage from './components/ServiceListPage';

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<h2>HOme pAGE</h2>} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/services" element={<ServiceListPage />} />
        </Routes>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
