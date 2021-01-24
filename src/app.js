import express from 'express';
import morgan from 'morgan';
import database from './database/database';
import facturasRuta from './routes/facturas.route';
import clientesRuta from './routes/clientes.route';
import productosRuta from './routes/productos.route';
import itemsRuta from './routes/items.route';


//inicializar express
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/facturas', facturasRuta);
app.use('/api/clientes', clientesRuta);
app.use('/api/productos', productosRuta);
app.use('/api/items', itemsRuta);

//sincronizacion con la db
database.sync()
.then(() => console.log('Base actualizada'));

//exportamos la app
export default app;