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

// Variables títulos
const imgPanel = document.querySelector('.img-panel'); 
const ImgTitle = document.querySelector('#img-title');
const urlTitle = document.querySelector('#url-title');
const filterTitle = document.querySelector('#filter-title');
const backgroundImgTitle = document.querySelector('#background-img-title');

//Variables inputs


// VARIABLES PANEL TEXTO

// Variables títulos

const TextTitle = document.querySelector('#text-title');
const topTextTitle = document.querySelector('#top-text-title');
const bottomTextTitle = document.querySelector('#bottom-text-title');
const fontTitle = document.querySelector('#font-title');
const textColorTitle = document.querySelector('#text-color-title');
const textBackgroundTitle = document.querySelector('#text-background-title');
const textOutlineTitle = document.querySelector('#text-outline-title');
const paddingTitle = document.querySelector('#padding-title');
const lineSpacingTitle = document.querySelector('line-spacing-title');


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
    ImgTitle.classList.toggle('dark-mode-aside');
    urlTitle.classList.toggle('dark-mode-aside')
    filterTitle.classList.toggle('dark-mode-aside')
    backgroundImgTitle.classList.toggle('dark-mode-aside')
    TextTitle.classList.toggle('dark-mode-aside')
    topTextTitle.classList.toggle('dark-mode-aside')
    bottomTextTitle.classList.toggle('dark-mode-aside')
    fontTitle.classList.toggle('dark-mode-aside')
    textColorTitle.classList.toggle('dark-mode-aside')
    textBackgroundTitle.classList.toggle('dark-mode-aside')
    textOutlineTitle.classList.toggle('dark-mode-aside')
    paddingTitle.classList.toggle('dark-mode-aside')
    lineSpacingTitle.classList.toggle('dark-mode-aside')

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

