
import clienteAxios from "../config/axios";
import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from "../types";
import Swal from "sweetalert2";



//CREAR NUEVOS PRODUCTOS
export const crearNuevoPRoductoAction=(producto)=>{
    
    return async(dispatch)=>{
        dispatch(agregarProducto());

        try {
            
            //insertar en la API
            await clienteAxios.post("/productos", producto)

            //si todo va bien
            dispatch(agregarProductoExito(producto))

            Swal.fire(
                "Correcto",
                "El producto se agrego correctamente",
                "success"
            )
            
            
            
        } catch (error) {
            console.log(error);
            dispatch(agregarProductoError(true))
            Swal.fire({
                icon:"error",
                title:"Hubo un error",
                text:"Intenta nuevamente"

            })
        }


    }
}

const agregarProducto = ()=>({
    type: AGREGAR_PRODUCTO,
    payload:true
    
})

const agregarProductoExito = (producto)=>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

const agregarProductoError = (estado)=>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:estado
})
