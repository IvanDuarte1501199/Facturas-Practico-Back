import Sequelize from 'sequelize';
import database from '../database/database';

const Producto = database.define('productos', {
 
     id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
    },
    pu: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

export default Producto;