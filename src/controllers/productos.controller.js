import Producto from '../models/Producto';
import { Op } from 'sequelize';

export async function obtenerProductos(req, res) {

    try {
        const productos = await Producto.findAll();

        res.json(
            productos
        );
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearProducto(req, res) {
    const {id, codigo, descripcion, pu } = req.body;
    try {
        const producto = await Producto.create({
            id,
            codigo,
            descripcion,
            pu
        });

        if (producto) {
            res.status(201).json(
                producto
            );
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

export async function obtenerProducto(req, res) {

    try {
        const producto = await Producto.findOne({
            where: { id: req.params.idProducto }
        });


        if (producto) {
            res.status(200).json(
                producto
            );
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

export async function borrarProducto(req, res) {
    const { idProducto } = req.params;
    try {
        const cantidadFilasBorradas = await Producto.destroy({
            where: { id: idProducto }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} productos`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarProducto(req, res) {
    const { idProducto } = req.params;
    const { id, codigo, descripcion, pu } = req.body;
    try{
        const producto = await Producto.findOne({
            where: { id: req.params.idProducto }
        })
        if(producto) {
            const productoModificado = await producto.update({
                id,
                codigo,
                descripcion,
                pu
            });

            res.json({
                data: productoModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el producto con el id: ${idProducto}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}