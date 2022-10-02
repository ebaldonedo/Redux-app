import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";
import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consultar la Api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
    console.log("render useEffect Productos");
  }, []);

  //OBTENIENDO STATE
  const productos = useSelector(state=>state.productos.productos)
  const error = useSelector(state=>state.productos.error)
  const cargando = useSelector(state=>state.productos.loading)
 

  return (
    <div className="">
      <h2 className="text-center my-5">Listado de Productos</h2>
        {error? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>
        :
        null}

        {cargando ? <p className="text-center">Cargando...</p>: null }
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
            {productos.length===0 ?<tr><td>No hay productos</td></tr>
            
            
            :(
                productos.map(producto =>(
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
