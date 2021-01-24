import { Router } from 'express';

import { obtenerFacturas, crearFactura, obtenerFactura, borrarFactura, modificarFactura } from '../controllers/facturas.controller'

const facturasRuta = Router();

facturasRuta.get('/', obtenerFacturas);

facturasRuta.get('/:idFactura', obtenerFactura);

facturasRuta.post('/', crearFactura);

facturasRuta.put('/:idFactura', modificarFactura);

facturasRuta.delete('/:idFactura', borrarFactura);

export default facturasRuta;