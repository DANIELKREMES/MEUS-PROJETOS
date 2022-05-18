function calculadora() {
    var choiceOption = Number(prompt(`Escolha a opção de escola ${"\n"} (1) somar ${"\n"} (2) subtrair  ${"\n"} (3) multiplicar ${"\n"} (4) dividir ${"\n"} (5) potênciação`));

    if (!choiceOption || choiceOption >= 6) {
        alert("ALGO ERRADO");
        calculadora();

    } else {
        var numero1 = Number(prompt("Digite o número 1"));

        if (!numero1) {
            alert("ERRO");
            calculadora();
        }

        var numero2 = Number(prompt("Digite o número 2"));

        if (!numero2) {
            alert("ERRO");
            calculadora();
        }


        switch (choiceOption) {
            case 1:
                soma(numero1, numero2);
                break;
            case 2:
                subtraction(numero1, numero2);
                break;

            case 3:
                multiplication(numero1, numero2);
                break;

            case 4:
                division(numero1, numero2);
                break;

            case 5:
                potency(numero1, numero2);
                break;
        }
    }


    function soma(numero1, numero2) {
        let somar = numero1 + numero2;
        mensagem(`O resultado da conta de soma é ${somar}`);
    }

    function subtraction(numero1, numero2) {
        let subtraction = numero1 - numero2;
        mensagem(`O resultado da conta de menos é ${subtraction}`);
    }

    function multiplication(numero1, numero2) {
        let multiplication = numero1 * numero2;
        mensagem(`O resultado da conta de multiplication é ${multiplication}`);
    }

    function division(numero1, numero2) {
        let division = numero1 / numero2;
        mensagem(`O resultado da conta de divisão é ${division}`);
    }

    function potency(numero1, numero2) {
        let potency = numero1 ** numero2;
        mensagem(`O resultado da conta de potenciação é ${potency}`);
    }

    function mensagem(mensagem) {
        return alert(mensagem);
    }

    
    menuDeEscolhaContinuarOuSair();

    function menuDeEscolhaContinuarOuSair() {
        var choice = prompt(`Deseja continuar no programa ${"\n"} (S):sim ${"\n"} (N):não`);
        if (choice == 'S' || choice == 's') {
            calculadora();
        } else if(choice == 'n' || choice == 'N'){
            alert("Tchau até breve");
        }  else {
            alert("Algo saiu errado");
            menuDeEscolhaContinuarOuSair();
        }     

    }
}

calculadora();