import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoPRoductoAction } from '../actions/productoActions';
import { useNavigate, Navigate } from "react-router-dom";
//Actions de redux


const NuevoProducto = () => {
    let navigate = useNavigate()

    //state del componente
    const [nombre,guardarnombre]= useState("")
    const [precio,guardarPrecio]=useState("")

    //1.-use Dispatch para crear una funcion
    const dispatch= useDispatch()

    //acceder al state del store
    const cargando = useSelector((state)=>state.productos.loading)
    const error =useSelector(state =>state.productos.error)
    console.log(cargando);


    //2.-llamar el action de productoAction
    const agregarProducto= (producto)=> dispatch(crearNuevoPRoductoAction(producto))

    

    //3.-cuando el usuario haga submit

    const submitNuevoProducto=e =>{
        e.preventDefault();
        
        //validar formulario
        if (nombre.trim()=== ""|| precio<=0) {
          return;  
        }
        //revisar que no hay errores 

        //crear nuevo producto

        agregarProducto({
            nombre,
            precio
        })

        //redireccion
        navigate("/")
    }
    return (
        <div className='row justify-content-center'>
            <div className="col-md-8">
                <div className="card ">
                    <div className="card-body mt-8">
                        <h2 className="text-center mb-4  font-weihgt-bold">Agregar nuevo producto</h2>

                        <form 
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label > Nombre Producto</label>
                                <input 
                                    type="text"
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={e=>guardarnombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label > Precio</label>
                                <input 
                                    type="number"
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                    value={precio}
                                    onChange={e=>guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button
                            type='submit'
                            className='btm btn-primary font-weight-bold text-uppercase d-block w-100'
                            
                            >
                                Agregar
                            </button>
                        </form>
                        {cargando ? <p>Cargando...</p>:null}
                        {error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p>:null }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default NuevoProducto;


