const express = require("express");
const router = express.Router();
const control = require("../controllers/empleados.controller");

// Mostrar todos los empleados

router.get("/", async (req, res) => {
  try {
    const datos = await control.mostrarTodos();

    if (datos.length === 0) {
      return res.status(200).json({
        message: "Actualmente no hay datos de empleados guardados",
        data: [],
        total: 0,
      });
    }

    res.status(200).json({
      message: `${datos.length} empleados encontrados`,
      total: datos.length,
      data: datos,
    });
  } catch (err) {
    res.status(500).json({
      error: "Ocurrio un error al obtener la lista de empleados",
      detalle: err.message,
    });
  }
});

// Ruta para llamar a buscar por Cedula

router.post("/buscar", async (req, res) => {
  try {
    const empleado = await control.buscarPorCedula(req.body.cedula);

    res.status(200).json({
      message: "Empleado encontrado",
      data: empleado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }

    res.status(500).json({
      error: "Error al buscar empleados",
      detalle: err.message,
    });
  }
});

// Buscar por id, id, id, id, id, id, id

router.get("/:id", async (req, res) => {
  try {
    const empleado = await control.buscarPorID(req.params.id);

    res.status(200).json({
      message: "Empleado encontrado",
      data: empleado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }

    res.status(500).json({
      error: "Error al buscar empleado",
      detalle: err.message,
    });
  }
});

// Crear un nuevo esclavo asalariado

router.post("/", async (req, res) => {
  try {
    const empleadoCreado = await control.crearEmpleado(req.body);

    res.status(201).json({
      message: "Empleado creado exitosamente",
      data: empleadoCreado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }

    res.status(500).json({
      error: "Error al crear empleado",
      detalle: err.message,
    });
  }
});

// Actualizar informacion de empleado

router.put("/:cedula", async (req, res) => {
  try {
    const empleadoActualizado = await control.actualizarEmpleado(
      req.params.cedula,
      req.body,
    );

    res.status(200).json({
      message: "Empleado actualizado exitosamente",
      data: empleadoActualizado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }

    res.status(500).json({
      error: "Error al actualizar empleado",
      detalle: err.message,
    });
  }
});

// Eliminar de la faz de la tierra al empleado que menos te guste

router.delete("/", async (req, res) => {
  try {
    const empleadoEliminado = await control.eliminarEmpleado(req.body.cedula);

    res.status(200).json({
      message: "Empleado eliminado exitosamente",
      data: empleadoEliminado,
    });
  } catch (err) {
    if (err.status) {
      return res.status(err.status).json({
        error: err.error,
        detalle: err.detalle,
      });
    }

    res.status(500).json({
      error: "Error al eliminar empleado",
      detalle: err.message,
    });
  }
});

module.exports = router;
