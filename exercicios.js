/*1
const arrayEsparso = [ , 7, , 10, , , , 90, , , ,];

console.log(arrayEsparso);
console.log(arrayEsparso.length);*/

/*2
const fileiras = [9, 5, 7, 1, 12];

console.log(fileiras);

fileiras.pop();
fileiras.pop();
fileiras.pop();
fileiras.pop();
fileiras.pop();

fileiras.push(8);
fileiras.push(5);
fileiras.push(7);
fileiras.push(1);
fileiras.push(12);

console.log(fileiras);*/

/*3const meuArray = [];

meuArray.push(7, 6, 9);

console.log(meuArray);

meuArray[0] = 2 * meuArray[0];

console.log(meuArray);*/

/*4
const pitayas = [];

pitayas.push(8, 5, 9, 7);

console.log(pitayas);

pitayas.push(78, 99, 21);

console.log(pitayas);*/

/*5
const clinica = [];

clinica.push('Hulk', 'Raika', 'Pantera');

console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);

clinica.pop();
console.log(clinica);*/

/*1
function doisArrays (a, b){
    return a.concat(b);
}

let array1 = ['João', 'Chaves', 'Chapolin'];
let array2 = [78, 50, 12];

console.log(doisArrays(array1, array2));*/

/*2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);*/

/*3
const frutas = ['Maça', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);*/

/*4
const menuPrincipal = ['Temaki', 'Sashimi', 'Joy geléia'];
const menuDeSobremesa = ['Sorvete', 'Doce de leite', 'Mousse'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesa);

console.log(menuCompleto);*/

/*5 ,6 ,7
const listaBidimensional = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(listaBidimensional[1] [2]);

listaBidimensional[2][1] = 999;

console.log(listaBidimensional);*/

/*1
const numeros = [10, 20, 30, 40, 50];

for (let numero of numeros){
    console.log(numero);
}*/

/*2
function indiceTimes(arrayTimes){
    for (i = 0; i < arrayTimes.length; i++){
        console.log(i, arrayTimes[i]);
    }
}

const times = ['Corinthians', 'Flamengo', 'Palmeiras', 'Fluminense'];

indiceTimes(times);*/

/*
let soma = 0;

function somaNumeros (arrayNumeros){
    for (let numero of arrayNumeros){
       soma += numero
    }
    
    return soma
}

const listaNumeros = [100, 90, 80, 70, 60, 50];

console.log(somaNumeros(listaNumeros));*/

/*4
const numeros = [-3, 8, 12, 2, 7, 1, 500, -125, 9, 3000];
let maior;
let menor;

function menorMaior (arrayNumeros){

    maior = arrayNumeros[0];

    for (let i = 0; i < arrayNumeros.length; i++){
        
        if (arrayNumeros[i] > maior){
            maior = arrayNumeros[i];
        }
    }

    menor = maior;

    for (let i = 0; i < arrayNumeros.length; i++){
       
        if (arrayNumeros[i] < menor){
            menor = arrayNumeros[i];
        }
    }

    console.log(`o menor número é ${menor} e o maior é ${maior}`);
}

menorMaior(numeros);*/

/*5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let listaPares = [];

function pares (array){
    for (i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            listaPares.push(array[i]);
        }
    }
    console.log(listaPares);
}

pares(numeros);*/

/*
const numeros = [7, 5, 79, 105, 99, 84, 71, 28, 67];
let soma = 0;
let media;

function calculoMedia(array){
    for(let numero of array){
        soma += numero;
    }
    return media = soma / array.length;
}

console.log(calculoMedia(numeros).toFixed(2));*/

/*extra 04.funções callback - item 10
const arrayNums = [1, 2, 3, 4];

const novoArray = arrayNums.map(numero => numero * 10);

console.log(novoArray);*/

/*1
const array = [7, 89, 78, 1, 55, 19, 95];

let i = 0;
array.forEach(elemento => console.log(`O elemento é ${elemento} e seu índice é ${i++}`));*/

/*2
const numeros = [2, 4, 6, 8]
let numerosMultiplicados;

function executaOperacaoEmArray (array, novoArray = array.map(numero => numero * 2)){
    console.log(novoArray);
}

executaOperacaoEmArray(numeros, numerosMultiplicados);*/

/*3
const numeros = [32, 79, 59, 81, 39, 48, 15, 12, 35, 14];

function verificarNumero(array, numeroPesquisa){
    if (array.includes(numeroPesquisa)){
        return array.indexOf(numeroPesquisa); 
    }else{
        return -1;
    }
}

console.log(verificarNumero(numeros, 14));*/

/*4
const nomesTurmaA = ['João Silva', 'Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira', 'Ana Souza', 'Lucas Fernandes'];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

consultaDeNome(todasAsTurmas, 'Maria Santos');

function consultaDeNome (array, nome){
    let pesquisaDeNome = array.find(elemento => elemento === nome);
    if(pesquisaDeNome === nome){
        console.log(pesquisaDeNome);
    }else{
        console.log('Aluno não encontrado');
    }
}*/

/*5
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach (elemento => {
    const resultado = elemento *3; 
    console.log(resultado);
})   

const dezoito = elemento => elemento === 18;
console.log(numeros.findIndex(dezoito));*/

/*1
const letras = ['a', 'b', 'c'];
const numeros = [1, 2, 3];
const nomes = ['Bianca', 'Luana', 'João'];

function arraysJuntos (array1, array2, array3){
    return [...array1, ...array2, ...array3]
}

console.log(arraysJuntos(letras, numeros, nomes));*/

/*2
const valores = [10, 80, 12, 92, 78, 3];

const somaValores = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(somaValores);*/

/*3
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const todasAsCores = coresLista1.concat(coresLista2);

const listaTodasAsCores = [... new Set(todasAsCores)];

console.log(listaTodasAsCores);*/

/*4
const numeros = [2, 4, 6, 5, 3, 1];

const pares = numeros.filter((numero, _) => numero % 2 === 0);

console.log(pares);

//let arrayPares = [];

//function pares (array){
//     for (let i = 0; i < array.length; i++){
//       if(array[i] % 2 === 0){
//            
//            arrayPares.push(array[i]);
//        }
//    }
//    return arrayPares;
//}

//console.log(pares(numeros));*/

/*5
const numeros = [3, 6, 9, 12, 15, 2, 4, 6, 8]

function filtra (array){
    let filtragem = array.filter((numero, _) => numero % 3 === 0 && numero > 5);
    return filtragem;
}

console.log(filtra(numeros));*/

/*6
const numeros = [2, 4, 6, 8, 10];

function somar (array){
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

const somaFeita = somar(numeros);
console.log(somaFeita);


/* Mesmo exercício feito com foreach
const numeros = [2, 4, 6, 8, 10];
let soma = 0;

function somar (array){
    array.forEach(numero => soma += numero)
    return soma
}

const somaFeita = somar(numeros);

console.log(somaFeita);*/

