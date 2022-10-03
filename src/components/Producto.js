import React from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2"

//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';




const Producto = ({producto}) => {
    let navigate = useNavigate()

    const dispatch = useDispatch();
    //funcion para redireccion
    const redireccionarEdicion = producto=>{
        dispatch(obtenerProductoEditar(producto));
        navigate(`/productos/editar/${producto.id}`)
    }


    //Confirmar si desea Eliminarlo
    const confirmarEliminarProducto = id =>{
        //preguntar al usuario 
        Swal.fire({
            title: '¿Estas seguro?',
            text: "El producto eliminado no se podra recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            
          }).then((result) => {
            if (result.isConfirmed) {

            //y pasarlo al action
              dispatch(borrarProductoAction(id))
              
            }
          })

        
    }
   
    const {nombre,precio,id}= producto
    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'>${precio}</span></td>
            <td className='acciones'>
                <button type='button'
                onClick={()=>redireccionarEdicion(producto)}
                 className="btn btn-primary mr-2">Editar
                 </button>

                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={()=>confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default Producto;
