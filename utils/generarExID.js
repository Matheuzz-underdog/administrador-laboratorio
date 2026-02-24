const generar = (listaExamenes) => {
  if (listaExamenes.length === 0) return "EX0001";

  const numeros = listaExamenes.map((ex) => {
    const match = ex.id_examen.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  });
  const maxNumero = Math.max(...numeros);

  const nuevoNumero = maxNumero + 1;
  return `EX${nuevoNumero.toString().padStart(4, "0")}`;
}

module.exports = generar;
