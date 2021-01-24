import { Router } from 'express';

//import { obtenerProductos, crearProducto, obtenerProducto, borrarProducto, modificarProducto } from '../controllers/productos.controller';

import { obtenerItems, crearItem, obtenerItem, borrarItem, modificarItem } from '../controllers/items.controller';

const itemsRuta = Router();

itemsRuta.get('/', obtenerItems);

itemsRuta.get('/:idItem', obtenerItem);

itemsRuta.post('/', crearItem);

itemsRuta.put('/:idItem', modificarItem);

itemsRuta.delete('/:idItem', borrarItem);

export default itemsRuta;