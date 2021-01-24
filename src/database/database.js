import Sequelize from 'sequelize';

//constructor de database/sequelize generico: new Sequelize(nombreDeLaBaseDeDatos, Usuario, Contraseña, y sequelizeConfig)
const database = new Sequelize(
    'lab4-prueba','postgres','admin', {
        dialect: 'postgres',
        host: 'localhost',
        port: 5433
    }
);

//exportamos la base de datos
export default database;
