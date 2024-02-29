let bgColorInput = document.getElementById('bgColorInput');
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let brinput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById('customButton');

function applyButton() {
    let bgValue = bgColorInput.value;
    let fcValue = fontColorInput.value;
    let fsValue = fontSizeInput.value;
    let fwValue = fontWeightInput.value;
    let paddingValue = paddingInput.value;
    let brValue = brinput.value;
    customButton.style.backgroundColor = bgValue;
    customButton.style.fontSize = fsValue;
    customButton.style.fontWeight = fwValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = brValue;
    customButton.style.color = fcValue;
}
applyButton()