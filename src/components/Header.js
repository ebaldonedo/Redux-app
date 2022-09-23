import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
                <div>
                    <h1>Redux</h1>
                </div>

                <a href="/productos/nuevo"
                    className='btn btn-danger nuevo-post d-block d-md-inline-block'
                >Agregar Producto &#43;</a>
            </nav>
        </div>
    );
}

export default Header;
