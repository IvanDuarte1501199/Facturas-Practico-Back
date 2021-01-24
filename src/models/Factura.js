import Sequelize from 'sequelize';
import database from '../database/database';

const Factura = database.define('facturas', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.INTEGER,
    },
    ptoventa: {
        type: Sequelize.INTEGER,
    },
    clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total: {
        type: Sequelize.DOUBLE
    }

});

export default Factura;