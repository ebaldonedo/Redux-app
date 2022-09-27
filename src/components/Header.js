import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between mb-4'>
                <div>
                    <h1>
                        <Link to={"/"} className="text-light">Home</Link>
                    </h1>
                </div>

                <Link to={"productos/nuevo"} className='btn btn-danger nuevo-post d-block d-md-inline-block'
                >Agregar Producto &#43;</Link>
            </nav>
        </div>
    );
}

export default Header;
