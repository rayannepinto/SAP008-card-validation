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
        let numeroCartao = 0
        let condition = false;

        
        for (let n = creditCardNumber.length - 1; n >= 0; n--) {
            let digitoCapturado = creditCardNumber.charAt(n); 
            let digitoN = parseInt(digitoCapturado, 10); 

            
            if (condition && (digitoN *= 2) > 9) {
                digitoN -= 9;
            }

            
            numeroCartao += digitoN; 
            condition = !condition; 
        }
        
        return (numeroCartao % 10) == 0; 
    }

}; 



export default validator;


