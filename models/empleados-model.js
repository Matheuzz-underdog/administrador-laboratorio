const empleados = require(`../db/empleados-db`);
const { v4: uuidv4 } = require("uuid");

class Empleados {
  static async verTodos() {
    return empleados;
  }

  static async buscarEmpleado(doc, busc) {
    if (busc === "cedula") {
      return empleados.find((empleado) => empleado.cedula === doc) || null;
    }
    return empleados.find((empleado) => empleado.rif === doc) || null;
  }

  static async buscarEmpleadoID(idEnv) {
    return empleados.find((emp) => emp.id.startsWith(idEnv)) || null;
  }

  static async crearEmpleado(data) {
    const nuevoEmpleado = {
      id: uuidv4(),
      cedula: data.cedula,
      rif: data.rif,
      nombre: data.nombre,
      apellido: data.apellido,
      funcion: {
        cargo: data.cargo,
        especialidad: data.especialidad,
        mpps: data.mpps
      },
      telefono: data.telefono || "",
      email: data.email || "",
      direccion: data.direccion || "",
    };

    empleados.push(nuevoEmpleado);
    return nuevoEmpleado;
  }

  static async delete(cedula) {
    const empleadoIndex = empleados.findIndex(
      (empleado) => empleado.cedula === cedula,
    );

    if (empleadoIndex === -1) return null;

    const [empleadoEliminado] = empleados.splice(empleadoIndex, 1);
    return empleadoEliminado;
  }

  static async actualizar(cedulaActual, empleadoData) {
    const empleadoIndex = empleados.findIndex(
      (c) => c.cedula === cedulaActual,
    );

    if (empleadoIndex === -1) return null;

    const empleadoActualizado = {
      ...empleados[empleadoIndex],
      ...empleadoData,
      cedula: empleadoData.cedula || cedulaActual,
    };

    empleados[empleadoIndex] = empleadoActualizado;
    return empleadoActualizado;
  }
  
}

module.exports = Empleados;
