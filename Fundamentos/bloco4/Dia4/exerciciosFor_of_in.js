let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'quarta',
    4: 'quinta',
    5: 'sexta',
    6: 'sabado',
};
diasDaSemana.1;
console.log(diasDaSemana['1']) 






let conta = {
    agencia : '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'trybeBank'
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]);
console.log(conta[infoDoBanco]['nome']);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod);
console.log(conta['banco']['id']);






let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereço: {
            rua: 'smith street',
            bairro: 'brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        }
    }
}

console.log(usuario['id']);
console.log(usuario.email);

console.log(usuario.infoPessoal.endereço.rua);
console.log(usuario['infoPessoal']['endereco']['cidade']);







let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: ' Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento:804,
    },
    {
        nome: 'Zoey',
        sobrenome:'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador);
console.log(primeiroMorador['andar']);

let ultimoMorador = moradores[moradores.length -1];
console.log(ultimoMorador);
console.log(ultimoMorador.nome);




let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora' + ' ' + player.name + ' ' +player.lastName + ' tem ' + player.age + ' anos de idade')
console.log('A jogadora' + ' ' + player.name + ' ' +player.lastName + ' foi eleita a melhor do Mundo por ' + player.bestInTheWorld.length + ' vezes')
console.log('A jogadora' + ' ' + player.name + ' ' +player.lastName + ' possui ' + player['medals']['golden'] + ' de ouro ' + player['medals']['silver'] + ' de prata')



let cars = ['saab', 'volvo', 'bmw'];
for (let index in cars){
    console.log(index, cars[index])
}



let names = {
    person1 = 'Joao',
    person2 = 'Maria',
    person3 = 'Jorge',
}
for (let value in names){
    console.log('Olá ' + names[value])
}




let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
    for(let infos in car){
       
    console.log(infos + ':' + car[infos])
}
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  
// console.log('Boas vindas' + ' ' + info['personagem']) 


info.recorrente = 'sim'
console.log(info)



for(let properties in info){
    console.log(properties)
}



for( let key in info){
    console.log(info[key])
}


let info2 = {
personagem = 'Tio Patinhas',
origem = 'Christmas on Bear Mountain, Dells Four Color Comics #178',
nota = 'O último MacPatinhas',
recorrente = 'sim',
};
for(let properties in info){
    if(properties === 'sim' && ){
        console.log('Ambos são recorrentes')
    }
    else{
        console.log('Não são recorrentes')
    }



let leitor = {
    nome: 'raissa',
    sobrenome: 'pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O pior dia de todos',
            autor: 'Daniela Kopsch',
            editora: 'tordesilhas',
        }
    ]

// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + leitor.livrosFavoritos[0].titulo + " ");

    leitor.livrosFavoritos.push (
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco'
}
)
console.log(leitor['nome'] + 'tem dois livros favoritos: ' + leitor['livrosFavoritos'].length)