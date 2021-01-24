import Item from '../models/Item';
import { Op } from 'sequelize';

export async function obtenerItems(req, res) {

    try {
        const items = await Item.findAll();

        res.json(
            items
        );
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearItem(req, res) {
    const {id, cantidad, descripcion, pu, IVA, subtotal, productoId, facturaId } = req.body;
    try {
        const item = await Item.create({
            id,
            cantidad,
            descripcion,
            pu,
            IVA,
            subtotal,
            productoId,
            facturaId
        });

        if (item) {
            res.status(201).json(
                item
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

export async function obtenerItem(req, res) {

    try {
        const item = await Item.findOne({
            where: { id: req.params.idItem }
        });


        if (item) {
            res.status(200).json(
                 item
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

export async function borrarItem(req, res) {
    const { idItem } = req.params;
    try {
        const cantidadFilasBorradas = await Item.destroy({
            where: { id: idItem }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} items`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarItem(req, res) {
    const { idItem } = req.params;
    const { id, cantidad, descripcion, pu, IVA, subtotal, productoId, facturaId } = req.body;
    try{
        const item = await Item.findOne({
            where: { id: req.params.idItem }
        })
        if(item) {
            const itemModificado = await item.update({
                id,
                cantidad,
                descripcion,
                pu,
                IVA,
                subtotal,
                productoId,
                facturaId
            });

            res.json({
                data: itemModificado
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro el item con el id: ${idItem}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}