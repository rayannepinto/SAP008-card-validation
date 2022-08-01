
let form = document.getElementById("form-cartao");
form.addEventListener("submit", (e) => {
    e.preventDefault()
});

const buscarNumero = () => {
    let creditCard = document.getElementById("numero-cartao");  
    
    creditCardNumber = creditCard.value;
};


function cartaoValidacao () {
    if (creditCardNumber === "") {
        document.getElementById("resultado").innerText = "*Campo não pode estar vazio!"
    } else if (isNaN(creditCardNumber)){
        document.getElementById("resultado").innerText = "Digite apenas números!"
    } else if (validator.isValid(creditCardNumber) === false) {
        document.getElementById("resultado").innerText = "Cartão inválido! Tente novamente."
        document.getElementById("botaoReserva").style.backgroundColor = "gray";
    } else if (validator.isValid(creditCardNumber) === true)
    {
        document.getElementById("resultado").innerText = "Seu cartão é válido!"
        document.getElementById("botaoReserva").style.backgroundColor = "green";
    }
}

const mascarandoNumero = () => {
    let novoNumeroCartao = validator.maskify(creditCardNumber);
    let numeroTransformado = document.getElementById("numero-cartao");

    numeroTransformado.type = "texto";
    return(document.getElementById("numero-cartao").value = novoNumeroCartao);
};

let creditCardNumber = "";
let chamadaNumeroCartao = document.getElementById("numero-cartao");
chamadaNumeroCartao.addEventListener("change", buscarNumero);
chamadaNumeroCartao.addEventListener("change", () => validator.maskify(creditCardNumber));
chamadaNumeroCartao.addEventListener("change", mascarandoNumero);

let botaoVerificar = document.getElementById("botao-verificar");
    botaoVerificar.addEventListener("click", () => {
        if (creditCardNumber === "") {
            document.getElementById("resultado").innerHTML = "*Campo não pode estar vazio!";

        } else {
            validator.isValid(creditCardNumber);
        }
        cartaoValidacao();
    });


botaoVerificar.addEventListener("click", cartaoValidacao);
 

import validator from './validator.js'; 
console.log(validator);


