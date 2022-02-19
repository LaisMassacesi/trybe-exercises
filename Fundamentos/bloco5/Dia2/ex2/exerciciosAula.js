// Acesse o elemento elementoOndeVoceEsta .
    // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
    // Acesse o primeiroFilho a partir de pai .
    // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
    // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
    // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
    // Agora acesse o terceiroFilho a partir de pai 

    const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta")
    console.log(elementoOndeVoceEsta.parentNode)

    const pai = elementoOndeVoceEsta.parentNode
    pai.style.background = 'red'

    document.getElementById("primeiroFilhoDoFilho").innerText = "adiciona texto aqui"

    document.getElementById("pai").firstChild

    primeiroFilho = pai.firstElementChild
    
    const primeiroFilho = elementoOndeVoceEsta.preveousElementSiblig

    const getText = elementoOndeVoceEsta.nextSibling

    const terceiroFilho = elementoOndeVoceEsta.nextElementSibling

    const terceiroFilho2 = pai.lastElementChild.preveousElementSiblig

    // 1. Crie um irmão para `elementoOndeVoceEsta`.
    const pai = document.getElementById("pai");  // Para criar o elemento irmao, é preciso buscar o elemento pai (que será responsável por armazenar o novo elemento)
    const irmaoElementoOndeVoceEsta = document.createElement('section') // cria-se uma constante (com nome do novo elemento) para armazenar a criação do elemento
    irmaoElementoOndeVoceEsta.id = irmaoElementoOndeVoceEsta; // o elemento filho será uma classe ou id (que é determinada depois do ".")
    pai.appendChild(irmaoElementoOndeVoceEsta) // aqui se faz a conecxão do novo elemento já criado ao elemento pai no html

    // 2. Crie um filho para `elementoOndeVoceEsta`.
    const elementoOndeVoceEsta = getElementById("elementoOndeVoceEsta");
    const terceiroFilhoElementoOndeVoceEsta = document.createElement("section");
    terceiroFilhoElementoOndeVoceEsta.id = terceiroFilhoElementoOndeVoceEsta;
    elementoOndeVoceEsta.appendChild(terceiroFilhoElementoOndeVoceEsta);

    // 3. Crie um filho para 'primeiroFilhoDoFilho' .
    const terceiroFilhoElementoOndeVoceEsta = getElementById("terceiroFilhoElementoOndeVoceEsta")
    const filhoDoTerceiroFilho = document.createElement("section")
    filhoDoTerceiroFilho.id = filhoDoTerceiroFilho
    terceiroFilhoElementoOndeVoceEsta.appendChild(filhoDoTerceiroFilho)

    const terceiroFilho = terceiroFilhoElementoOndeVoceEsta
    console.log(filhoDoTerceiroFilho.previousElementSibling)

    const paiDoPai = document.getElementById("paiDoPai");
    removeChildElements = paiDoPai.lastElementChild.previousSibling.previousSibling.previousSibling;
    paiDoPai.removeChild(removeChildElements)

    
    
    

