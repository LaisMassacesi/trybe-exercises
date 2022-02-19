const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

function handleChangeTech(event){                                     //preciso ou não declarar 'event'? Resposta: Existe uma lista que contém uma série de eventos e cada evento recebe um nome e função diferente. Para ter um evento precisamos ter declarado qual foi o evento.
    const changeTech = document.querySelector('tech')             // Declara a constante techElement e atribui a ela a classe tech
    changeTech.classList.add('tech')                          //está removendo a classe tech?
    changeTech.classList.remove('tech')                           //
}

firstLi.addEventListener('click', handleChangeTech)
secondLi.addEventListener('click', handleChangeTech)
thirdLi.addEventListener('click', handleChangeTech)



// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?





// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// function changeTextTech (event){
//     const getList = document.querySelector('tech')
//     getList.classList.    

// }

input.addEventListener(input, function(event){
  const changeTextTech = document.querySelector('.tech')
  changeTextTech.innerText = event.target.value               //Não entendi .target e .value nesta sentença
});



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
webpage.addEventListener('dblclick', function(event){
  window.location.replace('https://shop.mattel.com/pages/barbie')
})
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
webpage.addEventListener('mouseover', function(event){
  event.target.style.color
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.


