const validator = {

    maskify: (creditCardNumber) => {
        let cardLength = creditCardNumber.length;
        let esconder = creditCardNumber.substring(0, cardLength - 4);
        esconder = esconder.replace(/./g, '#');

        let texto = creditCardNumber.substring(cardLength -4); 
        let novoNumeroCartao = esconder + texto
        return novoNumeroCartao;
    },

        
    isValid: (creditCardNumber) => {
        let cardNumber = 0
        let condition = false;

        
        for (let n = creditCardNumber.length - 1; n >= 0; n--) {
            let cDigit = creditCardNumber.charAt(n); 
            let nDigit = parseInt(cDigit, 10); 

            
            if (condition && (nDigit *= 2) > 9) {
                nDigit -= 9;
            }

            
            cardNumber += nDigit; 
            condition = !condition; 
        }
        
        return (cardNumber % 10) == 0; 
    }

};



export default validator;


