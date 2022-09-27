import React from 'react';

const EditarProducto = () => {
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card ">
                    <div className="card-body mt-8">
                        <h2 className="text-center mb-4  font-weihgt-bold">Editar producto</h2>

                        <form >
                            <div className="form-group">
                                <label > Nombre Producto</label>
                                <input 
                                    type="text"
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                />
                            </div>

                            <div className="form-group">
                                <label >Precio</label>
                                <input 
                                    type="number"
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                />
                            </div>

                            <button
                            type='submit'
                            className='btm btn-primary font-weight-bold text-uppercase d-block w-100'
                            
                            >
                                Guardar Cambios
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default EditarProducto;