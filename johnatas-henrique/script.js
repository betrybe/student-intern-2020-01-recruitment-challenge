const imgTakeThis = document.querySelector('#take-this');
const divTakeThis = document.querySelector('#box-take-this');
const caixaGabarito = document.querySelector('#caixa-gabarito');
const divGabarito = document.querySelector('#div-gabarito');
const navLinkGabarito = document.querySelector('#nav-gabarito');

function abreCaixa () {
    divTakeThis.classList.remove('esconder');
}

function mostraGabarito () {
    if(caixaGabarito.value === 'RESPOSTAS'){
        divGabarito.classList.remove('esconder');
        navLinkGabarito.classList.remove('esconder');
    }
}

caixaGabarito.addEventListener('keyup', mostraGabarito);
imgTakeThis.addEventListener('click', abreCaixa);
