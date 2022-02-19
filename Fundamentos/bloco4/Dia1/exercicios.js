// Operadores Aritméticos

// Adição


const A = 6
const B = 8                 
const adicao = A + B
console.log(adicao)
// -----------função------------------
function adicao(a, b){
    return a + b
}
console.log(adicao(20,13))


// Subtração

const Y = 8
const X = 9
const subtracao = X - Y
console.log(subtracao)
// -----------função------------------
function subtracao(x, y){
   return x - y 
}
console.log(subtracao(49, 31))

// Multiplicação


const C = 5
const D = 4
const multiplicacao = C*D
console.log(multiplicacao)
// -----------função------------------
function multiplicacao(c, d){
    return c * d
}
console.log(multiplicacao(7,88))


// Divisão

const Q = 8
const E = 24
const divisao = E/Q
console.log(divisao)
// -----------função------------------
function divisao(E, Q){
    return E/Q
}
console.log(divisao(8,4))

// Módulo

const A = 3
const B = 20
const modulo = B % A
console.log(modulo)
// -----------função------------------
function modulo(B, A){
    return B % A
}
console.log(modulo(8,3))

// Lógica Condicional

const v1 = 74
const v2 = 5
if(v1 > v2){
    console.log('O maior valor é: ' + v1)
}else{
    console.log('O maior valor é: ' + v2)
}
// -----------função------------------
function maiorNumero(v1, v2){
    if(v1 > v2){
        return 'O maior valor é: ' + v1
    }else{
        return 'O maior valor é: ' + v2
    } 
}
console.log(maiorNumero(45, 100))




const valA = 5
const valB = 7
const valC = 44
if(valA > valB && valA > valC){
    console.log('O maior valor é: ' + valA)
}
else if (valB > valA && valB > valC){
    console.log('O maior valor é: ' + valB)
}
else{
    console.log('O maior valor é: ' + valC)
}
// -----------função------------------
function MaiorDeTres(valA, valB, valC){
    if(valA > valB && valA > valC){
        return 'O maior valor é: ' + valA
    }
    else if (valB > valA && valB > valC){
        return 'O maior valor é: ' + valB
    }
    else{
        return 'O maior valor é: ' + valC
    }
}
console.log(MaiorDeTres(8,5,9))




const X = -4
const Y = -200
const Z = 60
if(X > 0){
    console.log('O valor de X é positivo')
}
else if(X < 0){
    console.log('O valor de X é negativo')
}
else{
    console.log('zero')
}


if(Y > 0){
    console.log('O valor de Y é positivo')
}
else if(Y < 0){
    console.log('O valor de Y é negativo')
}
else{
    console.log('zero')
}



if(Z > 0){
    console.log('O valor de Z é positivo')
}
else if(Z < 0){
    console.log('O valor de Z é negativo')
}
else{
    console.log('zero')
}
// -----------função------------------
function positivoOuNegativo(x, y, z){
    if(x > 0){
        return 'O valor de X é positivo'
    }
    else if(x < 0){
       return 'O valor de X é negativo'
    }
    else{
        return 'zero'
    }
    
    
    if(y > 0){
        return 'O valor de Y é positivo'
    }
    else if(y < 0){
        return 'O valor de Y é negativo'
    }
    else{
        return 'zero'
    }
    
    
    if(z > 0){
        return 'O valor de Z é positivo'
    }
    else if(z < 0){
        return 'O valor de Z é negativo'
    }
    else{
        return 'zero'
    }
}
console.log(positivoOuNegativo(11,-15,-22))





const ladoA = 80
const ladoB = 50
const ladoC = 50
if(ladoA + ladoB + ladoC === 180){
    console.log('True')
}
else if(!(ladoA + ladoB + ladoC === 180)){
    console.log('False')
}
else{
    console.log('Insira um valor válido')
}
// -----------função------------------
function ladoTriangulo(ladoA, ladoB, ladoC){
    if(ladoA + ladoB + ladoC === 180){
        return 'True'
    }
    else if(!(ladoA + ladoB + ladoC === 180)){
        return 'False'
    }
    else{
        return 'Insira um valor válido'
    }
}
console.log(ladoTriangulo(89,91,0))




const peca = 'bispo'
switch(peca){
    case 'cavalo':
        console.log('cavalo -> move em L');
        break;
    case 'rainha':
        console.log('rainha -> passa por cima e anda em todas as direções');
        break;
    case 'peao':
        console.log('peao -> segue em frente');
        break;
    case 'bispo':
        console.log('bispo -> se move na diagonal');
        break;
   default:
        console.log('insira um valor válido')
}

Function pecaXadrez(peca){
    case 'cavalo':
        return 'cavalo -> move em L';
        break;
    case 'rainha':
        return 'rainha -> passa por cima e anda em todas as direções';
        break;
    case 'peao':
        return 'peao -> segue em frente';
        break;
    case 'bispo':
        return 'bispo -> se move na diagonal';
        break;
   default:
        return 'insira um valor válido'
    }


const nota = 56

if(nota < 0){
    console.log('Digite um valor válido')
}
if(nota < 50){
    console.log('Conceito F')
}
if(nota >= 50){
    console.log('Conceito E')
}
if(nota >= 60){
    console.log('Conceito D')
}
if(nota >= 70){
    console.log('Conceito C')
}
if(nota >= 80){
    console.log('Conceito B')
}
if(nota >= 90){
    console.log('Conceito A')
}
if(nota > 100){
    console.log('Digite um valor válido')
}


const numbA = 47
const numbB = 21
const numbC = 77
if(numbA % 2 === 0 || numbB % 2 === 0 || numbC % 2 === 0){
    console.log('true')
}
else{
    console.log('false')
}







const valorDeFabrica = 20
const  custo = (20/100)*valorDeFabrica
const revenda = 50
const quantidade = 10 
const lucroBruto = ((revenda -  custo)*quantidade)
console.log(lucroBruto)
if(valorDeFabrica < 0){
    console.log('erro 221 - insira um valor válido')
}

//Rever exercicio dia4.1 

const salarioBruto = 2000;
const salarioLiquido = 0
const aliquota1 = ((8/100)*salarioBruto);
const aliquota2 = ((9/100)*salarioBruto);
const aliquota3 = ((11/100)*salarioBruto);
const aliquota4 = salarioBruto - 570.88;

if(salarioBruto <= 1556.95){
    salarioLiquido = salarioBruto - aliquota1
    console.log(salarioLiquido);
}
else if(salarioBruto <= 1556.95 && salarioBruto <= 2594.92){
    salarioLiquido = salarioBruto - aliquota2
    console.log(salarioLiquido);
}
else if(salarioBruto <= 2594.92 && salarioBruto <= 5189.82){
    salarioLiquido = salarioBruto - aliquota3
    console.log(salarioLiquido);
}
else if(salarioBruto > 5189.82){
    salarioLiquido = salarioBruto - aliquota4
    console.log(salarioLiquido);
}






