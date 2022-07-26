const validator = {

    maskify: (creditCardNumber) => {
        /*aqui estará cardLegth, ela definirá o tamanho da string de creditCardNumber*/
        let cardLength = creditCardNumber.length;

        //*esconder nos diz que o primeiro dígito a ser levado em conta seria o 0 (primeiro número digitado na posição 0), até o -4 da string. para isso, temos que saber que só serão permitidos 16 números aqui.*// - indo do 0 até a posição tamanho -4
        let esconder = creditCardNumber.substring(0, cardLength - 4);
        /*aqui substituiremos todos os números por #, menos os 4 últimos*/
        esconder = esconder.replace(/./g, '#'); /*expressão regular*/

        let text = creditCardNumber.substring(cardLength -4); /*12 primeiros números*/
        let novoNumeroCartao = esconder + text
        return novoNumeroCartao;
    },

        //*aqui a var cardNumber começa com 0 e no momento de completar cada loop, o número muda e a var que definimos como condition começará com false, pois a primeira posição é 1(número ímpar)*//
    isValid: (creditCardNumber) => {
        let cardNumber = 0
        let condition = false;

        //*o for inverso - esta regra está implícita no algoritmo de Luhn*//
        //*n-- para cada vez que a variável roda diminuir uma posição*//
        for (let n = creditCardNumber.length - 1; n >= 0; n--) {
            let cDigit = creditCardNumber.charAt(n); //*retorna o caractere especificado em uma string*//
            let nDigit = parseInt(cDigit, 10); //*retorna o número como inteiro*//

            //*outra regrinha de Luhn = se o número selecionado for multiplicado por 2 for maior que 9, teremos que diminuir 9 da conta. exemplo: 18-9 = 9 ou 1+8=9*//
            if (condition && (nDigit *= 2) > 9) {
                nDigit -= 9;
            }

            //*aqui para toda vez que o loop é iniciado e concluído*//
            cardNumber += nDigit; //*para somar o número ao cardNumber*//
            condition = !condition; //*toda vez que o loop terminar, a condição irá mudar*//
        }
        //* retornaremos a função um true, porque se fizermos a divisão 10 mod 0, o resultado seria 0 (o que queremos) e o número do cartão seria válido, caso contrário, o número daria inválido*//
        return (cardNumber % 10) == 0;
    }

};



export default validator;


