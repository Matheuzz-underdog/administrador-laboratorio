function mapDBToModel(dbRow) {
  if (!dbRow) return null;
  return {
    id: dbRow.id_paciente,
    cedula: dbRow.cedula_paciente,
    nombre: dbRow.nombre_paciente,
    apellido: dbRow.apellido_paciente,
    sexo: dbRow.sexo_paciente,
    fechaNacimiento: dbRow.fecha_nacimiento,
    telefono: dbRow.telefono_paciente,
    email: dbRow.email_paciente,
    direccion: dbRow.direccion_paciente,
    fechaRegistro: dbRow.fecha_registro, 
  };
}

module.exports= mapDBToModel