document.getElementById('btn1').addEventListener('click', () => {
    const titulo = document.querySelector('h1');
    titulo.innerHTML = "Trybe";
    titulo.style.backgroundColor = '#0fa36b';
})
document.getElementById('btn2').addEventListener('click', () => {
    const valorMinimo = document.getElementsByTagName('strong')[0];
    valorMinimo.innerHTML = '$ 3.500,00';
    valorMinimo.style.textDecoration = 'underline';
})
document.getElementById('btn3').addEventListener('click', () => {
    const listaRequisitos = document.getElementsByClassName('requisitos');
    listaRequisitos[1].style.color = 'red';
    listaRequisitos[3].style.color = 'red';
})
document.getElementById('btn4').addEventListener('click', () => {
    const flex = document.getElementById('flex');
    flex.style.display = 'flex';
})
document.getElementById('btn5').addEventListener('click', () => {
    const nCurriculo = document.querySelectorAll('.circulo').length;
    const novaLinguagem = document.getElementsByClassName('circulo')[nCurriculo - 1];
    novaLinguagem.innerHTML = 'Python';
})
document.getElementById('btn6').addEventListener('click', () => {
    const maisImportante = document.getElementsByClassName('circulo')[3];
    maisImportante.style.borderRadius = 0;

})
document.getElementById('btn7').addEventListener('click', () => {
    const selecionarCurriculo = document.querySelectorAll('.circulo');
    const nCurriculo = document.querySelectorAll('.circulo').length;
    for (let i = 0; i < nCurriculo; i++) {
        if ((i + 1) % 2 == 0) document.querySelectorAll('.circulo')[i].style.backgroundColor = 'blue';
        else {
            document.querySelectorAll('.circulo')[i].style.backgroundColor = 'red';
        }
    }
})
document.getElementById('btn8').addEventListener('click', () => {
    const alberto = document.querySelectorAll('.professores')[2]
    alberto.style.fontSize = '35px'
})
document.getElementById('btn9').addEventListener('click', () => {
    const titulo = document.querySelector('h1');
    titulo.style.textAlign = 'center'
    titulo.style.fontSize = '50px'
})
document.getElementById('btn10').addEventListener('click', () => {
    const subtitulos = document.querySelectorAll('h2')
    for (let i = 0; i < subtitulos.length; i++) {
        subtitulos[i].style.backgroundColor = '#0fa36b';
    }
})
document.getElementById('btn11').addEventListener('click', () => {
    const nomesDevs = document.querySelectorAll('.professores')
    for (let i = 0; nomesDevs.length; i++) {
        nomesDevs[i].style.fontSize = '35px'
    }
})
