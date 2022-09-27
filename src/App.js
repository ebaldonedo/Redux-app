import React from 'react';


import Header from './components/Header';

import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

function App() {
  return (

        <Router>
          <Header/>
            <div className="container mb-5">
                <Routes>
                  <Route path="/" element={<Productos />} />
                  <Route path="/productos/nuevo" element={<NuevoProducto/>} />
                  <Route path="/productos/editar/:id" element={<EditarProducto/>} />
                  
                </Routes>
            </div>
        </Router>
       
      
      
    
  );
}

export default App;
