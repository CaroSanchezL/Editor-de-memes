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
const filterButton = document.querySelector('.filter-button')

// Variable input imagen

const brightness = document.querySelector('#brightness');
const opacity = document.querySelector('#opacity');
const contrast = document.querySelector('#contrast');
const inputBlur = document.querySelector('#blur');
const grayscale = document.querySelector('#grayscale');
const sepia = document.querySelector('#sepia');
const hueRotate = document.querySelector('#hue');
const saturate = document.querySelector('#saturate');
const invert = document.querySelector('#invert');

// Variables títulos

const ImgTitle = document.querySelector('#img-title');
const urlTitle = document.querySelector('#url-title');
const filterTitle = document.querySelector('#filter-title');
const backgroundImgTitle = document.querySelector('#background-img-title');

//Variables inputs

const urlInput = document.querySelector('#url-input')
const selectBackground = document.querySelector('#select-background');
const colorBackground = document.querySelector('#color-background');
const colorBackgroundText = document.querySelector('#input-background-text');

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
const asidePanel = document.getElementById("aside-panel");
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
const textAlignLeft = document.getElementById("text-align-left");
const textAlignCenter = document.getElementById("text-align-center");
const textAlignRight = document.getElementById("text-align-right");
const paddingInput = document.getElementById("padding-input");
const selectFont = document.getElementById("select-font");
const textColorInput = document.getElementById("font-color-input");
const textBackgroundInput = document.getElementById("text-background-input");
const textBackgroundTransparent = document.getElementById("transparent-background-checkbox");
const spaceLineInput = document.getElementById("spaceline-input")


//-----------------------------------VARIABLES MAIN------------------------------------------------//

const imgMeme = document.querySelector('#meme-img');


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
    topTextInMemebox.innerText = topTextInput.value;
}
bottomTextInput.oninput = () => {
    bottomTextInMemebox.innerText = bottomTextInput.value;
}

hideTopText.onclick = () => {
    if (containerTopText.style.display === "none") {
    containerTopText.style.display = "block";
    memeBox.style.justifyContent = "space-between";
    }
    else {
        memeBox.style.justifyContent = "center";
        containerTopText.style.display = "none";
    } 
}

hideBottomText.onclick = () => {
    if (containerBottomText.style.display === "none") {
        containerBottomText.style.display = "block";
        memeBox.style.justifyContent = "space-between"
    }
    else {
        memeBox.style.justifyContent = "center";
        containerBottomText.style.display = "none";
    }
}

selectFont.oninput = () => {
    topTextInMemebox.style.fontFamily = selectFont.value;
    bottomTextInMemebox.style.fontFamily = selectFont.value;
}

fontSizeInput.oninput = () => {
    topTextInMemebox.style.fontSize = fontSizeInput.value + "px";
    bottomTextInMemebox.style.fontSize = fontSizeInput.value + "px";
}

textAlignLeft.onclick = () => {
    topTextInMemebox.style.textAlign = "left";
    bottomTextInMemebox.style.textAlign = "left";
}
textAlignCenter.onclick = () => {
    topTextInMemebox.style.textAlign = "center";
    bottomTextInMemebox.style.textAlign = "center";
}
textAlignRight.onclick = () => {
    topTextInMemebox.style.textAlign = "right";
    bottomTextInMemebox.style.textAlign = "right";
}

textColorInput.oninput = () => {
    topTextInMemebox.style.color = textColorInput.value;
    bottomTextInMemebox.style.color = textColorInput.value;
}

textBackgroundInput.oninput = () => {
    containerTopText.style.backgroundColor = textBackgroundInput.value;
    topTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    containerBottomText.style.backgroundColor = textBackgroundInput.value;
    bottomTextInMemebox.style.backgroundColor = textBackgroundInput.value;
}

textBackgroundTransparent.onclick = () => {
    containerTopText.style.backgroundColor = "inherit";
    topTextInMemebox.style.backgroundColor = "inherit";
    containerBottomText.style.backgroundColor = "inherit";
    bottomTextInMemebox.style.backgroundColor = "inherit";
}


// no tengo la menor idea qué es el contorno//

paddingInput.oninput = () => {
    topTextInMemebox.style.padding = paddingInput.value + "px";
    bottomTextInMemebox.style.padding = paddingInput.value + "px";
}

spaceLineInput.oninput = () => {
    topTextInMemebox.style.lineHeight = spaceLineInput.value;
    bottomTextInMemebox.style.lineHeight = spaceLineInput.value;  

}


//-------------------------------------FUNCIONALIDAD BOTONES TEXTO/IMAGEN--------------------------------------//

// textButton.onclick = () => {
//     asidePanel.style.top = "inherit";
//     asidePanel.style.bottom = "0";
// }

// imgButton.onclick = () => {
//     asidePanel.style.bottom = "inherit";
//     asidePanel.style.top = "0";
// }

textButton.onclick = () => {
    asidePanel.classList.add("menu-text");
}

imgButton.onclick = () => {
    asidePanel.classList.remove("menu-text");
}


//----------------------------------FUNCIONALIDAD INPUT URL/IMAGEN MEME---------------------------------------//

urlInput.oninput = () => {
    imgMeme.style.backgroundImage = `url("${urlInput.value}")`
}

//---------------------------------FUNCIONALIDAD INPUT COLOR FONDO-------------------------------------------//

let colorBackgroundValue = colorBackground.value.toUpperCase();
colorBackgroundText.textContent = `${colorBackgroundValue}`

colorBackground.oninput = () => {
    imgMeme.style.backgroundColor = `${colorBackground.value}`;
    colorBackgroundValue = colorBackground.value.toUpperCase()
    colorBackgroundText.textContent = `${colorBackgroundValue}`;
}

//----------------------------------FUNCIONALIDAD FONDO - PRESETS--------------------------------------------//

selectBackground.onchange = () => {
    imgMeme.style.backgroundBlendMode = `${selectBackground.value}`;
}


//brillo
const changeValueBrightness = () => {
    const valueBrightness = brightness.value;
    imgMeme.style.filter = "brightness(" + valueBrightness + ")";
}

brightness.onchange = changeValueBrightness
 
//opacidad
const changeValueOpacity = () => {
    const valueOpacity = opacity.value;
    imgMeme.style.filter = "opacity(" + valueOpacity + ")";
}

opacity.onchange = changeValueOpacity

//contraste
const changeValueContrast = () => {
    const valueContrast = contrast.value;
    imgMeme.style.filter = "contrast(" + valueContrast + "%)";
}

contrast.onchange = changeValueContrast

//desenfoque
const changeValueBlur = () => {
    const valueBlur = inputBlur.value;
    imgMeme.style.filter = "blur(" + valueBlur + "px)";
}

inputBlur.onchange = changeValueBlur

//escala de grises
const changeValueGrayscale = () => {
    const valueGrayscale = grayscale.value;
    imgMeme.style.filter = "grayscale(" + valueGrayscale + "%)";
}

grayscale.onchange = changeValueGrayscale

//sepia
const changeValueSepia = () => {
    const valueSepia = sepia.value;
    imgMeme.style.filter = "sepia(" + valueSepia + "%)";
}

sepia.onchange = changeValueSepia

//hue
const changeValueHueRotate = () => {
    const valueHueRotate = hueRotate.value;
    imgMeme.style.filter = "hue-rotate(" + valueHueRotate + "deg)";
}

hueRotate.onchange = changeValueHueRotate

//saturado
const changeValueSaturate = () => {
    const valueSaturate = saturate.value;
    imgMeme.style.filter = "saturate(" + valueSaturate + "%)";
}

saturate.onchange = changeValueSaturate

//negativo
const changeValueInvert = () => {
    const valueInvert = invert.value;
    imgMeme.style.filter = "invert(" + valueInvert + ")";
}

invert.onchange = changeValueInvert

//boton reestablecer

const restore = () => {
    brightness.value = "1";
    imgMeme.style.filter = "brightness(1)";
    opacity.value = "1";
    imgMeme.style.filter = "opacity(1)";
    contrast.value = "100";
    imgMeme.style.filter = "contrast(100%)";
    inputBlur.value = "0";
    imgMeme.style.filter = "blur(0px)";
    grayscale.value = "0"
    imgMeme.style.filter = "grayscale(0%)";
    sepia.value = "0";
    imgMeme.style.filter = "sepia(0%)";
    hueRotate.value = "0";
    imgMeme.style.filter = "hue-rotate(0deg)";
    saturate.value = "100";
    imgMeme.style.filter = "saturate(100%)";
    invert.value = "0";
    imgMeme.style.filter = "invert(0)";
}

filterButton.onclick = restore

