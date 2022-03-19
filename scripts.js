function eventListener() {
    const elementsList = document.querySelectorAll("li");

    elementsList.forEach(elemento => {
        elemento.addEventListener('click', () => { copyToClipboard(elemento);});
    });
}

eventListener();

function copyToClipboard(elemento) {
    console.log(elemento.innerText);
    if(elemento.innerText == "if/else") {
        navigator.clipboard.writeText(
`if() {}
else {}`
        );
    } else if(elemento.innerText == "if") {
        navigator.clipboard.writeText(`if() {}`);
    } else if(elemento.innerText == "else if") {
        navigator.clipboard.writeText(`else if() {}`);
    } else if(elemento.innerText == "switch") {
        navigator.clipboard.writeText(
`switch() {
    case :
        break;
    case :
        break;
    case :
        break;
    case :
        break;
    default:
        break;
}`
        );
    } else if(elemento.innerText == "AND") {
        navigator.clipboard.writeText(`() && ()`);
    } else if(elemento.innerText == "OR") {
        navigator.clipboard.writeText(`() || ()`);
    } else if(elemento.innerText == "for") {
        navigator.clipboard.writeText(`for(let i=0; i < .length; i++) {}`);
    } else if(elemento.innerText == "while") {
        navigator.clipboard.writeText(`while() {}`);
    } else if(elemento.innerText == "forEach") {
        navigator.clipboard.writeText(`.forEach(() => {})`);
    } else if(elemento.innerText == "map") {
        navigator.clipboard.writeText(`.map(() => {})`);
    } else if(elemento.innerText == "filter") {
        navigator.clipboard.writeText(`.filter(() => {})`);
    } else if(elemento.innerText == "function") {
        navigator.clipboard.writeText(`function () {}`);
    } else if(elemento.innerText == "arrowfunc") {
        navigator.clipboard.writeText(`() => {}`);
    } else if(elemento.innerText == "import") {
        navigator.clipboard.writeText(`import  from "./";`);
    } else if(elemento.innerText == "export") {
        navigator.clipboard.writeText(`export default function () {}`);
    }
}