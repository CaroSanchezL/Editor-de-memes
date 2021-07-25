//---------------------------------VARIABLES HTML------------------------------------------//

const body = document.querySelector('body');
const header = document.querySelector('header');
const textButton = document.querySelector('#text-button');
const imgButton = document.querySelector('#img-button');
const lightModeButton = document.querySelector('#light-mode-button')
const darkModeButton = document.querySelector('#dark-mode-button')
const h1 = document.querySelector('h1');
const imgPanel = document.querySelector('.img-panel') 
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3')
// const select = document.querySelector('select');
// const label = document.querySelector('label')
// const input = document.querySelector('input')


//-------------------------------FUNCIONALIDAD MODO OSCURO--------------------------------------//

lightModeButton.style.display = 'block';
darkModeButton.style.display = 'none';

const switchMode = () => {
    body.classList.toggle('dark-mode-workspace');
    header.classList.toggle('dark-mode-header')
    h1.classList.toggle('dark-mode-header');
    textButton.classList.toggle('dark-mode-header');
    imgButton.classList.toggle('dark-mode-header');
    imgPanel.classList.toggle('dark-mode-aside');
    h2.classList.toggle('dark-mode-aside')
    // select.classList.toggle('dark-mode-aside');
    // label.classList.toggle('dark-mode-aside')
    // input.style.backgroundColor = '#393e49'

    if (darkModeButton.style.display === 'none') {
        lightModeButton.style.display = 'none';
        darkModeButton.style.display = 'block';        ;
    } else {
        lightModeButton.style.display = 'block';
        darkModeButton.style.display = 'none';
        
    }
}

lightModeButton.onclick = switchMode;
darkModeButton.onclick = switchMode;



//-------- Funcionalidad Menú Texto---------//

const topTextInput = document.getElementById("top-text-input");
const topTextInMemebox = document.getElementById("top-text-in-memebox")
const bottomTextInput = document.getElementById("bottom-text-input");
const bottomTextInMemebox = document.getElementById("bottom-text-in-memebox");

topTextInput.oninput = () => { 
    topTextInMemebox.textContent = topTextInput.value;
}

bottomTextInput.oninput = () => {
    bottomTextInMemebox.textContent = bottomTextInput.value;
}

