import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"

//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productoActions';




const Producto = ({producto}) => {

    const dispatch = useDispatch();
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
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>

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
