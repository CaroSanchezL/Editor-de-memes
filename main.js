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

const imgClosePanel = document.querySelector('.img-panel-close')

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
const colorBackgroundImage = document.querySelector('#input-background-image');
const inputBackgroundTextSpan = document.getElementById("input-background-text");
const colorInputFontTextSpan = document.getElementById("input-font-color-text-span")

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

const imgMeme = document.getElementById('meme-img');


//-------------------------------FUNCIONALIDAD MODO OSCURO--------------------------------------//


const switchMode = () => {
    body.classList.toggle('light-mode');
    darkModeButton.classList.toggle('disappear');
    lightModeButton.classList.toggle('disappear');
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
    topTextInMemebox.classList.toggle("disappear");
}

hideBottomText.onclick = () => {
    bottomTextInMemebox.classList.toggle("disappear");
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

colorInputFontTextSpan.textContent = textColorInput.value.toUpperCase();

textColorInput.oninput = () => {
    topTextInMemebox.style.color = textColorInput.value;
    bottomTextInMemebox.style.color = textColorInput.value;
    colorInputFontTextSpan.textContent = textColorInput.value.toUpperCase();
}


inputBackgroundTextSpan.textContent = textBackgroundInput.value.toUpperCase();

textBackgroundInput.oninput = () => {
    if (textBackgroundTransparent.checked) {
        topTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.backgroundColor = "transparent";
    } else {
    topTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    bottomTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    }

inputBackgroundTextSpan.textContent = textBackgroundInput.value.toUpperCase();
}

textBackgroundTransparent.onclick = () => {
    if (textBackgroundTransparent.checked) {
        topTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.position = "absolute";
        topTextInMemebox.style.position = "absolute";
        bottomTextInMemebox.style.bottom = "0";

    } else {
        bottomTextInMemebox.style.position = "static";
        topTextInMemebox.style.position = "static";
        topTextInMemebox.style.backgroundColor = textBackgroundInput.value;
        bottomTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    }

}

paddingInput.oninput = () => {
    topTextInMemebox.style.padding = paddingInput.value + "px";
    bottomTextInMemebox.style.padding = paddingInput.value + "px";
}

spaceLineInput.oninput = () => {
    topTextInMemebox.style.lineHeight = spaceLineInput.value;
    bottomTextInMemebox.style.lineHeight = spaceLineInput.value;  

}


//-------------------------------------FUNCIONALIDAD BOTONES TEXTO/IMAGEN--------------------------------------//

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
colorBackgroundImage.textContent = `${colorBackgroundValue}`

colorBackground.oninput = () => {
    imgMeme.style.backgroundColor = `${colorBackground.value}`;
    colorBackgroundValue = colorBackground.value.toUpperCase()
    colorBackgroundImage.textContent = `${colorBackgroundValue}`;
}

//----------------------------------FUNCIONALIDAD FONDO - PRESETS--------------------------------------------//

selectBackground.onchange = () => {
    imgMeme.style.backgroundBlendMode = `${selectBackground.value}`;
}

//----------Abrir Paneles Responsive------------//

const imgPanelOpen = () => {
    if (asidePanel.style.display = "none") {
        asidePanel.style.display = "block"
        asidePanel.classList.remove("menu-text");
    }
}

imgButton.onclick = imgPanelOpen


const textPanelOpen = () => {
    if (asidePanel.style.display = "none") {
        asidePanel.style.display = "block"
        asidePanel.classList.add("menu-text");
        
    }
}

textButton.onclick = textPanelOpen

//---------Funcionalidad Cerrar Paneles Responsive----------//
const imgPanelOculto = () => {
    asidePanel.style.display = "none" 
}
imgClosePanel.onclick = imgPanelOculto

//---------------Responsive Area de trabajo-------------------//

const medidaMemeBox = document.querySelector(".meme-box")
const clientWidth = medidaMemeBox.clientWidth


const clientHeight = medidaMemeBox.clientHeight
console.log(clientWidth + "px");
console.log(clientHeight + "px");

window.onresize = resize;

function resize()
{
    const clientWidth = medidaMemeBox.clientWidth
    const clientHeight = medidaMemeBox.clientHeight
    medidaMemeBox.style.height = clientWidth + "px"
    containerTopText.style.height = "15%"
    containerBottomText.style.height = "15%"
    
}

//----------------------------FILTROS IMAGEN------------------------//

const changeValueBrightness = () => {
    const valueBrightness = brightness.value;
    imgMeme.style.filter = "brightness(" + valueBrightness + ")";
}

brightness.onchange = changeValueBrightness
 

const changeValueOpacity = () => {
    const valueOpacity = opacity.value;
    imgMeme.style.filter = "opacity(" + valueOpacity + ")";
}

opacity.onchange = changeValueOpacity


const changeValueContrast = () => {
    const valueContrast = contrast.value;
    imgMeme.style.filter = "contrast(" + valueContrast + "%)";
}

contrast.onchange = changeValueContrast


const changeValueBlur = () => {
    const valueBlur = inputBlur.value;
    imgMeme.style.filter = "blur(" + valueBlur + "px)";
}

inputBlur.onchange = changeValueBlur


const changeValueGrayscale = () => {
    const valueGrayscale = grayscale.value;
    imgMeme.style.filter = "grayscale(" + valueGrayscale + "%)";
}

grayscale.onchange = changeValueGrayscale


const changeValueSepia = () => {
    const valueSepia = sepia.value;
    imgMeme.style.filter = "sepia(" + valueSepia + "%)";
}

sepia.onchange = changeValueSepia


const changeValueHueRotate = () => {
    const valueHueRotate = hueRotate.value;
    imgMeme.style.filter = "hue-rotate(" + valueHueRotate + "deg)";
}

hueRotate.onchange = changeValueHueRotate


const changeValueSaturate = () => {
    const valueSaturate = saturate.value;
    imgMeme.style.filter = "saturate(" + valueSaturate + "%)";
}

saturate.onchange = changeValueSaturate


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

//----------------------CONTORNO-------------------------//


const buttonNoOutline = document.querySelector('#button-no-outline');
const buttonLightOutline = document.querySelector('#button-light-outline');
const buttonDarkOutline = document.querySelector('#button-dark-outline');

const noOutline = () => {
    topTextInMemebox.style.textShadow = ("none")
    bottomTextInMemebox.style.textShadow = ("none")   
}
buttonNoOutline.onclick = noOutline

const lightOutline = () => {
    topTextInMemebox.style.textShadow = ("2px 2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, -2px -2px 0 #FFFFFF, 2px 0px 0 #FFFFFF, 0px 2px 0 #FFFFFF, -2px 0px 0 #FFFFFF, 0px -2px 0 #FFFFFF")
    bottomTextInMemebox.style.textShadow = ("2px 2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, -2px -2px 0 #FFFFFF, 2px 0px 0 #FFFFFF, 0px 2px 0 #FFFFFF, -2px 0px 0 #FFFFFF, 0px -2px 0 #FFFFFF")   
}
buttonLightOutline.onclick = lightOutline

const darkOutline = () => {
    topTextInMemebox.style.textShadow = ("2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000")
    bottomTextInMemebox.style.textShadow = ("2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000")   
}
buttonDarkOutline.onclick = darkOutline


