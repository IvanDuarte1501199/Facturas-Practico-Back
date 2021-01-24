import Cliente from '../models/Cliente';
import { Op } from 'sequelize';

export async function obtenerClientes(req, res) {

    try {
        const clientes = await Cliente.findAll();

        res.json(clientes);
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearCliente(req, res) {
    const {id, nombre, direccion, cuit} = req.body;
    try {
        const cliente = await Cliente.create({
            id,
            nombre,
            direccion,
            cuit
        });

        if (cliente) {
            res.status(201).json({
                data: cliente
            });
        } else {
            res.json(
                {}
            );
        }
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }

}

export async function obtenerCliente(req, res) {

    try {
        const cliente = await Cliente.findOne({
            where: { id: req.params.idCliente }
        });


        if (cliente) {
            res.status(200).json(
                cliente
            );
        } else {
            res.json({
                data: {}
            });
        }
    }

    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function borrarCliente(req, res) {
    const { idCliente } = req.params;
    try {
        const cantidadFilasBorradas = await Cliente.destroy({
            where: { id: idCliente }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} clientes`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarCliente(req, res) {
    const { idCliente } = req.params;
    const { id, nombre, direccion, cuit} = req.body;
    try{
        const cliente = await Cliente.findOne({
            where: { id: idCliente }
        })
        if(cliente) {
            const clienteModificado = await cliente.update({
                id,
                nombre,
                direccion,
                cuit
            });

            res.json({
                data: clienteModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el cliente con el id: ${idCliente}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}