const listaEstudante = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 , 14, 15, 16, 17, 18, 19];

const sala1 = listaEstudante.slice(0, listaEstudante.length/2);
const sala2 = listaEstudante.slice(listaEstudante.length/2);

console.log(sala1);
console.log(sala2);