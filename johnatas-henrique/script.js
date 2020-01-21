const imgTakeThis = document.querySelector('#take-this');
const divTakeThis = document.querySelector('#box-take-this');

function abreCaixa () {
    divTakeThis.classList.remove('esconder');
}

imgTakeThis.addEventListener('click', abreCaixa);
