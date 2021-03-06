 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
              


        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

       //  1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
       document.getElementById('p1').innerText = 'Descrição sobre mim';

       // 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      function colorMainContent(){
             let yellowContent = document.getElementsByClassName('main-content')[0];
              yellowContent.style.background = 'rgb(76,164,109)';
      }
      colorMainContent();

       //3. Crie uma função que mude a cor do quadrado vermelho para branco.
      function colorSquare(){
             let centerContent = document.getElementsByClassName('center-content')[0];
              centerContent.style.background = 'white';
      }
      colorSquare();
       
      //4. Crie uma função que corrija o texto da tag <h1>.
      const title = document.getElementsByClassName('title')[0];
      title.innerText = 'Exercicios 5.1 - JavaScript';
       
      //5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
      function upperCaseP (){
      let paragraph = document.getElementsByTagName('p')[1];
      paragraph.innerText = paragraph.innerText.toUpperCase();
      }
      upperCaseP ();

       // 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
       const paragraph = document.getElementsByTagName('p');
       console.log(paragraph)