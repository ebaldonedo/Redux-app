import React from 'react';


import Header from './components/Header';

import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Producto from './components/Producto';
import NuevoProducto from './components/NuevoProducto';

function App() {
  return (
    <div>
     
        <Header/>

        <div className="container">
        <Router>
              <Routes>
                <Route path="/" element={<Producto />} />
                <Route path="/productos/nuevo" element={<NuevoProducto/>} />
                
              </Routes>
            </Router>
        </div>
      
      
    </div>
  );
}

export default App;
