const divPrincipal = document.querySelector('.principal');
const nuevoBlock = document.querySelector('#clear');


for (let i = 0; i < 154 ; i++){
    const divHorizontal = document.createElement('div');
    divHorizontal.classList.add('horizontales');
    divHorizontal.id = "linea"+i;
    for( let j = 0; j<154;j++){
        const divVertical = document.createElement('div');
        divVertical.classList.add('cuadros');
        divVertical.id = "cuadro"+i+j;
        divHorizontal.appendChild(divVertical);
    }
    divPrincipal.appendChild(divHorizontal);
}

function GenerarColorAleatorioDecimal(){
    let colorAleatorioDecimal = Math.floor(Math.random()*16777216);
    let colorAleatorioHexaDecimal = ConvertirColor2HexaDecimal(colorAleatorioDecimal);
    return colorAleatorioHexaDecimal;
}

function ConvertirColor2HexaDecimal(colorAleatorio){
    const colorHexadecimal = colorAleatorio.toString(16);
    return `#${colorHexadecimal.padStart(6, "0")}`;
}

function detectarMouseMove(div) {
    div.addEventListener("mousemove", function(event) {
    div.style.backgroundColor = GenerarColorAleatorioDecimal();
    });
  }

const divsCuadros = document.querySelectorAll(".cuadros");
for (const div of divsCuadros) {
  detectarMouseMove(div);
}

nuevoBlock.addEventListener('click', function(event){
    nuevoBlock = location.reload();
})
