const express = require("express");
const router = express.Router();

const pacientesControl = require("../controllers/pacientes-controller");
const empleadosControl = require("../controllers/empleados-controller");
const examenesControl = require("../controllers/examenes-controller");

// Vista de pacientes
router.get("/pacientes", async (req, res) => {
  try {
    const datos = await pacientesControl.mostrarTodos();
    res.render("pacientes", { pacientes: datos });
  } catch (err) {
    res.status(500).json({
      error: "Error al cargar la vista de pacientes",
      detalle: err.message,
    });
  }
});

// Vista de empleados
router.get("/empleados", async (req, res) => {
  try {
    const datos = await empleadosControl.mostrarTodos();
    res.render("empleados", { empleados: datos });
  } catch (err) {
    res.status(500).json({
      error: "Error al cargar la vista de empleados",
      detalle: err.message,
    });
  }
});

// Vista de exámenes
router.get("/examenes", async (req, res) => {
  try {
    const datos = await examenesControl.mostrarTodos();
    res.render("examenes", { examenes: datos });
  } catch (err) {
    res.status(500).json({
      error: "Error al cargar la vista de exámenes",
      detalle: err.message,
    });
  }
});

module.exports = router;
