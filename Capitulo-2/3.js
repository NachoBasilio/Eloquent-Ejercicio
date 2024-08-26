let tablero = "";
let alto = 8;
let ancho = 8;
for (let i = 1; i <= alto; i++) {

  if (i % 2 === 0) {
    for (let j = 1; j <= ancho; j++) {
      if (j % 2 === 0) {
        tablero += " ";
      } else {
        tablero += "#";
      }
      if (j === ancho) {
        tablero += "\n";
      }
    }
  } else {
    for (let j = 1; j <= ancho; j++) {
      if (j % 2 === 0) {
        tablero += "#";
      } else {
        tablero += " ";
      }
      if (j === ancho) {
        tablero += "\n";
      }
    }
  }
}
console.log(tablero);
