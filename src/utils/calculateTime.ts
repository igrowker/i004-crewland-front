export const calculateTime = (creationDate: string): string => {
  // Dividimos el formato DD/MM/YYYY
  const [day, month, year] = creationDate.split("/").map(Number);

  // Crear una fecha válida en JavaScript
  const fechaCreacion = new Date(year, month - 1, day); // Meses en JS van de 0 a 11
  const ahora = new Date();

  if (isNaN(fechaCreacion.getTime())) {
    throw new Error("La fecha proporcionada no es válida");
  }

  const diferenciaMilisegundos = ahora.getTime() - fechaCreacion.getTime();
  const segundos = Math.floor(diferenciaMilisegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30); // Aproximado (mes = 30 días)

  if (meses > 0) {
    return `${meses}m`; // Meses
  } else if (semanas > 0) {
    return `${semanas}sem`; // Semanas
  } else if (dias > 0) {
    return `${dias}d`; // Días
  } else if (horas > 0) {
    return `${horas}h`; // Horas
  } else if (minutos > 0) {
    return `${minutos}min`; // Minutos
  } else {
    return `${segundos}s`; // Segundos
  }
};

export const logicTime = (time: string) => {
  return time.split(":").slice(0, 2).join(":");
}
