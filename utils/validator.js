class Validador {
  static cedula(cedEnv) {
    const formato = /^[VE]-\d{6,8}$/;
    return formato.test(cedEnv);
  }

  static rif(rifEnv) {
    const formato = /^[VJPG]-\d{8,9}$/;;
    return formato.test(rifEnv);
  }

  static fecha(fechaEnv) {
    const formato = /^\d{4}-\d{2}-\d{2}$/;
    if (!formato.test(fechaEnv)) return false;

    const fechaObj = new Date(fechaEnv);
    return fechaObj instanceof Date && !isNaN(fechaObj);
  }

  static email(emailEnv) {
    if (!emailEnv) return true;
    const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formato.test(emailEnv);
  }
}

module.exports = Validador;
