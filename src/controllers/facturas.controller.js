import Factura from '../models/Factura';
import { Op } from 'sequelize';

export async function obtenerFacturas(req, res) {

    try {
        const facturas = await Factura.findAll();

        res.json(
            facturas
        );
    }
    catch (e) {
        res.json({
            error: e.message
        })
    }
}

export async function crearFactura(req, res) {
    const {id, tipo, fecha, numero, ptoventa, clienteId, total} = req.body;
    try {
        const factura = await Factura.create({
            id,
            tipo,
            fecha,
            numero,
            ptoventa,
            clienteId,
            total
        });

        if (factura) {
            res.status(201).json({
                data: factura
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

export async function obtenerFactura(req, res) {

    try {
        const factura = await Factura.findOne({
            where: { id: req.params.idFactura }
        });


        if (factura) {
            res.status(200).json(
                factura
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

export async function borrarFactura(req, res) {
    const { idFactura } = req.params;
    try {
        const cantidadFilasBorradas = await Factura.destroy({
            where: { id: idFactura }
        });

            res.json({
                data: {},
                message: `Se eliminaron ${cantidadFilasBorradas} facturas`    
            })
        } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

export async function modificarFactura(req, res) {
    const { idFactura } = req.params;
    const { id, tipo, fecha, numero, ptoventa, clienteId, total } = req.body;
    try{
        const factura = await Factura.findOne({
            where: { id: req.params.idFactura }
        })
        if(factura) {
            const facturaModificada = await factura.update({
                id,
                tipo,
                fecha,
                numero,
                ptoventa,
                clienteId,
                total
            });

            res.json({
                data: facturaModificada
            })
        } else {
            res.status(404).json({
                data: {},
                message: `No se encontro la factura con el id: ${idFactura}`
            })
        }
    } catch(e) {
        res.status(500).json({
            error: e.message
        })
    }
}