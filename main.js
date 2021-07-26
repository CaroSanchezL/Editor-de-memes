//---------------------------------VARIABLES HTML------------------------------------------//

const body = document.querySelector('body');

// VARIABLES HEADER
const header = document.querySelector('header');
const textButton = document.querySelector('#text-button');
const imgButton = document.querySelector('#img-button');
const lightModeButton = document.querySelector('#light-mode-button')
const darkModeButton = document.querySelector('#dark-mode-button')
const h1 = document.querySelector('h1');

// VARIABLES PANEL IMAGEN
const imgPanel = document.querySelector('.img-panel'); 

// Variables títulos

const ImgTitle = document.querySelector('#img-title');
const urlTitle = document.querySelector('#url-title');
const filterTitle = document.querySelector('#filter-title');
const backgroundImgTitle = document.querySelector('#background-img-title');

//Variables inputs



// VARIABLES PANEL TEXTO

const textPanel = document.querySelector('.text-panel');
// Variables títulos

const TextTitle = document.querySelector('#text-title');
const topTextTitle = document.querySelector('#top-text-title');
const bottomTextTitle = document.querySelector('#bottom-text-title');
const fontTitle = document.querySelector('#font-title');
const textColorTitle = document.querySelector('#text-color-title');
const textBackgroundTitle = document.querySelector('#text-background-title');
const textOutlineTitle = document.querySelector('#text-outline-title');
const paddingTitle = document.querySelector('#padding-title');
const lineSpacingTitle = document.querySelector('#line-spacing-title');

// Variables input

const topTextInput = document.getElementById("top-text-input");
const topTextInMemebox = document.getElementById("top-text-in-memebox")
const bottomTextInput = document.getElementById("bottom-text-input");
const bottomTextInMemebox = document.getElementById("bottom-text-in-memebox");
const memeBox = document.getElementById("meme-box")
const hideTopText = document.getElementById("hide-top-text");
const containerTopText = document.getElementById("container-top-text");
const containerBottomText = document.getElementById("container-bottom-text")
const hideBottomText = document.getElementById("hide-bottom-text");
const fontSizeInput = document.getElementById("font-size-input");


//-------------------------------FUNCIONALIDAD MODO OSCURO--------------------------------------//

lightModeButton.style.display = 'none';
darkModeButton.style.display = 'block';

const switchMode = () => {
    body.classList.toggle('light-mode')

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

topTextInput.oninput = () => { 
    topTextInMemebox.textContent = topTextInput.value;
}

bottomTextInput.oninput = () => {
    bottomTextInMemebox.textContent = bottomTextInput.value;
}

const memeBox = document.getElementById("meme-box")
const hideTopText = document.getElementById("hide-top-text");
const containerTopText = document.getElementById("container-top-text");
const containerBottomText = document.getElementById("container-bottom-text")

hideTopText.onclick = () => {
    if (containerTopText.style.display === "none") {
    containerTopText.style.display = "block";
    memeBox.style.justifyContent = "space-between";

    }
    else {
        memeBox.style.justifyContent = "flex-end";
        containerTopText.style.display = "none";
    } 
}

const hideBottomText = document.getElementById("hide-bottom-text");

hideBottomText.onclick = () => {
    if (containerBottomText.style.display === "none") {
        containerBottomText.style.display = "block";
        memeBox.style.justifyContent = "space-between"
    }

    else {
        memeBox.style.justifyContent = "flex-start";
        containerBottomText.style.display = "none";
    }
}

// acá falta lo del tipo de fuente pero es domingo quiero hacer cosas no tan difíciles//

const fontSizeInput = document.getElementById("font-size-input");


fontSizeInput.oninput = () => {
    topTextInMemebox.style.fontSize = fontSizeInput.value + "px";
    bottomTextInMemebox.style.fontSize = fontSizeInput.value + "px";
}





