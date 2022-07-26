
let form = document.getElementById("form-cartao");
form.addEventListener("submit", (e) => {
    e.preventDefault()
});

const buscarNumero = () => {
    let creditCard = document.getElementById("numero-cartao");  
    
    creditCardNumber = creditCard.value;
};


const mascarandoNumero = () => {
    let novoNumeroCartao = validator.maskify(creditCardNumber);
    let numeroTransformado = document.getElementById("numero-cartao");

    numeroTransformado.type = "text";
    return(document.getElementById("numero-cartao").value = novoNumeroCartao);
};


function cardValid () {
    if (creditCardNumber === "" || creditCardNumber === null) {
        document.getElementById("resultado").innerHTML = "*Campo não pode estar vazio!"
    } else if (isNaN(creditCardNumber)){
        document.getElementById("resultado").innerHTML = "Digite apenas números!"
    } else if (validator.isValid(creditCardNumber) === false) {
        document.getElementById("resultado").innerHTML = "Cartão inválido! Tente novamente."
        document.getElementById("botaoReserva").style.backgroundColor = "gray";
    } else if (validator.isValid(creditCardNumber) === true)
    {
        document.getElementById("resultado").innerHTML = "Seu cartão é válido!"
        document.getElementById("botaoReserva").style.backgroundColor = "green";
    }
}

let creditCardNumber = "";
let caixaDoCartao = document.getElementById("numero-cartao");
caixaDoCartao.addEventListener("change", buscarNumero);
caixaDoCartao.addEventListener("change", () => validator.maskify(creditCardNumber));
caixaDoCartao.addEventListener("change", mascarandoNumero);

let botaoVerificar = document.getElementById("botao-verificar");
    botaoVerificar.addEventListener("click", () => {
        if (creditCardNumber === "") {
            document.getElementById("resultado").innerHTML = "*Campo não pode estar vazio!";

        } else {
            validator.isValid(creditCardNumber);
        }
        cardValid();
    });


botaoVerificar.addEventListener("click", cardValid);
 

import validator from './validator.js'; 
console.log(validator);


