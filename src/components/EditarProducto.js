import React, {useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';
import { useNavigate } from 'react-router-dom';

const EditarProducto = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [producto,setProducto]= useState({
        producto:"",
        precio:""
    })

    //poducto a editar
    const productoeditar = useSelector(state=>state.productos.productoeditar);
    
    //Llenado automatico del state
    useEffect(() => {
    setProducto(productoeditar) 
    }, [productoeditar])
    
    //Leer los datos del formulario
    const onChangeFormulario = e =>{
        setProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }

    const submitEditarProducto = e =>{
        e.preventDefault();

        dispatch(editarProductoAction(producto)) 
        navigate("/")
    }
    const {nombre,precio}= producto
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card ">
                    <div className="card-body mt-8">
                        <h2 className="text-center mb-4  font-weihgt-bold">Editar producto</h2>

                        <form 
                        onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label > Nombre Producto</label>
                                <input 
                                    type="text"
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <div className="form-group">
                                <label >Precio</label>
                                <input 
                                    type="number"
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                    value={precio}
                                    onChange={onChangeFormulario}
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
