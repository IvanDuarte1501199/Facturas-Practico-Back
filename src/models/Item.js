import Sequelize from 'sequelize';
import database from '../database/database';

const Item = database.define('items', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING
    },
    pu: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    IVA: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    subtotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    productoId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    facturaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Item;