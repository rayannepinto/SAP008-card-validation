# **Chalé Magic Place**


![Logo do Projeto](https://github.com/rayannepinto/SAP008-card-validation/blob/3843638d26d43b918959ce625070db92626d9bb7/src/imagens/magicplace.png)

## **O Projeto (Algoritmo de Luhn)**

A fórmula compara um número com seu dígito de verificação incluído , que geralmente é anexado a um número de conta parcial para gerar o número de conta completo. Este número deve passar no seguinte teste:

- Do dígito mais à direita (excluindo o dígito de verificação) e movendo para a esquerda, dobre o valor de cada segundo dígito. O dígito de verificação não é duplicado nem incluído neste cálculo; o primeiro dígito duplicado é o dígito localizado imediatamente à esquerda do dígito de verificação. Se o resultado desta operação de duplicação for maior que 9 (por exemplo, 8 × 2 = 16), então adicione os dígitos do resultado (por exemplo, 16: 1 + 6 = 7, 18: 1 + 8 = 9) ou, equivalentemente , subtraia 9 do resultado (por exemplo, 16: 16 - 9 = 7, 18: 18 - 9 = 9).
- Faça a soma de todos os dígitos (incluindo o dígito de verificação).
- Se o módulo total 10 for igual a 0 (se o total terminar em zero), o número é válido de acordo com a fórmula de Luhn; caso contrário, não é válido.

## **Usuários**

O usuário poderá inserir apenas números, caso contrário, uma mensagem dizendo "Digite apenas números aparecerá". Também não poderá deixar o campo de preenchimento em branco. Caso digite um número válido, uma mensagem o avisará e o botão de reserva ficará verde, caso o número seja inválido, o botão permanecerá cinza. 


## **Definição do Produto**

O Chalé Magic Place foi desenvolvido para usuários que queiram acomodar-se em um lugar aconchegante para aproveitar com a família. O Chalé Magic Place oferece café da manhã, Wi-Fi, lareira e jacuzzi. O clima é agradável para relaxar e aproveitar da melhor forma possível: nas montanhas.


## **Projeto Final**

![imagem1.png](https://github.com/rayannepinto/SAP008-card-validation/blob/0a181b90942036f9f44da99f6d7dd09a07b4a7eb/src/imagens/site1.png)



![imagem2.png](https://github.com/rayannepinto/SAP008-card-validation/blob/0a181b90942036f9f44da99f6d7dd09a07b4a7eb/src/imagens/site2.png)



![imagem3.png](https://github.com/rayannepinto/SAP008-card-validation/blob/0a181b90942036f9f44da99f6d7dd09a07b4a7eb/src/imagens/site3.png)



## **Primeiro Protótipo**


![prot1.jpg](https://github.com/rayannepinto/SAP008-card-validation/blob/3843638d26d43b918959ce625070db92626d9bb7/src/imagens/prot1.jpg)


![prot2.jpg](https://github.com/rayannepinto/SAP008-card-validation/blob/3843638d26d43b918959ce625070db92626d9bb7/src/imagens/prot2.jpg)



### **Material Utilizado**

* [Algoritmo de Luhn](https://www.linkedin.com/pulse/algoritmo-de-luhn-valida%C3%A7%C3%A3o-n%C3%BAmero-cart%C3%A3o-cr%C3%A9dito-pdi-hudson-martins-/?originalSubdomain=pt) 
* [Estruturas Condicionais e Repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
* [Tomando Decisões No Seu Código](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
* [Trabalhando Com Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

