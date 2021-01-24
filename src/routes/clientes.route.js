import { Router } from 'express';

import { obtenerClientes, crearCliente, obtenerCliente, borrarCliente, modificarCliente } from '../controllers/clientes.controller';

const clientesRuta = Router();

clientesRuta.get('/', obtenerClientes);

clientesRuta.get('/:idCliente', obtenerCliente);

clientesRuta.post('/', crearCliente);

clientesRuta.put('/:idCliente', modificarCliente);

clientesRuta.delete('/:idCliente', borrarCliente);

export default clientesRuta;