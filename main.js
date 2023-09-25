function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        var resultado = "";

        if (imc < 18.5) {
            resultado = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            resultado = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            resultado = "Obesidade grau I";
        } else if (imc >= 35 && imc < 39.9) {
            resultado = "Obesidade grau II";
        } else {
            resultado = "Obesidade grau III";
        }

        document.getElementById('resultado').innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>Classificação: " + resultado;
  
}
}