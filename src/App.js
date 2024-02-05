// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<EmployeeDashboard />} />
            <Route path="/employee-form" element={<EmployeeForm />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
