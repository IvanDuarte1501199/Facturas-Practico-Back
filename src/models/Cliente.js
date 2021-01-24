import Sequelize from 'sequelize';
import database from '../database/database';

const Cliente = database.define('clientes', {
 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING,
    },
    cuit: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Cliente;