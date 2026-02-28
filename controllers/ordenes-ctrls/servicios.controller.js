const ordenesModel = require("../../models/ordenes-model");

class Controller {
    static async todasOrdenes() {
        const ordenes = await ordenesModel.todos();
        return ordenes; 
    }
    static async buscarOrden(id) {
        console.log(id.typeOf());
        const ordenDeseada = await ordenesModel.buscarID(id);
    }
}

module.exports = Controller;