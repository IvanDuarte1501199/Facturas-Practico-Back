import { Router } from 'express';

import { obtenerProductos, crearProducto, obtenerProducto, borrarProducto, modificarProducto } from '../controllers/productos.controller';

const productosRuta = Router();

productosRuta.get('/', obtenerProductos);

productosRuta.get('/:idProducto', obtenerProducto);

productosRuta.post('/', crearProducto);

productosRuta.put('/:idProducto', modificarProducto);

productosRuta.delete('/:idProducto', borrarProducto);

export default productosRuta;