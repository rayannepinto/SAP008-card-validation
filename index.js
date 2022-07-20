
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

function alertValid () {
    console.log(validator.isValid("651651531315"));
    if (creditCardNumber === "" || creditCardNumber === null) {
        document.getElementById("resultado").innerHTML = "*Campo não pode estar vazio!"
    } else if (validator.isValid(creditCardNumber) === false) {
        document.getElementById("resultado").innerHTML = "Número inválido! Tente novamente."
        document.getElementById("botaoReserva").style.backgroundColor = "gray";
    } else if (validator.isValid(creditCardNumber) === true)
    {
        document.getElementById("resultado").innerHTML = "Seu número é válido!"
        document.getElementById("botaoReserva").style.backgroundColor = "green";
    }
}

let creditCardNumber = "";
let caixa = document.getElementById("numero-cartao");
caixa.addEventListener("change", buscarNumero);
caixa.addEventListener("change", () => validator.maskify(creditCardNumber));
caixa.addEventListener("change", mascarandoNumero);

let botaoVerificar = document.getElementById("botao-verificar");
    botaoVerificar.addEventListener("click", () => {
        if (creditCardNumber === "") {
            document.getElementById("resultado").innerHTML = "*Campo não pode estar vazio!";

        } else {
            validator.isValid(creditCardNumber);
        }
        alertValid();
    });


botaoVerificar.addEventListener("click", alertValid);
 

import validator from './validator.js'; 
console.log(validator);