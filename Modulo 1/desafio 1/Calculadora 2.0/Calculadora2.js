class calculadora {
    Somando() {
        var n1 = parseFloat(document.getElementById("num1").value);
        var n2 = parseFloat(document.getElementById("num2").value);

        var soma = n1 + n2;
        if (soma < 0) {
            document.getElementById("result").textContent = "Soma invalida";
        }
        else
            document.getElementById("result").textContent = (soma);
    }
    multiplicar() {
        var n1 = parseFloat(document.getElementById("num1").value);
        var n2 = parseFloat(document.getElementById("num2").value);
        var multip = n1 * n2;
        document.getElementById("result").textContent = (multip);
    }
    dividor() {
        var n1 = parseFloat(document.getElementById("num1").value);
        var n2 = parseFloat(document.getElementById("num2").value);
        var divi = n1 / n2;
        document.getElementById("result").textContent = (divi);
    }
    diminuir() {
        var n1 = parseFloat(document.getElementById("num1").value);
        var n2 = parseFloat(document.getElementById("num2").value);
        var dimi = n1 - n2;
        document.getElementById("result").textContent = (dimi);
    }
    porcentagem() {
        var n1 = parseFloat(document.getElementById('num1').value);
        var n2 = parseFloat(document.getElementById('num2').value);
        var resultado = (n1 * n2) / 100;
        document.getElementById('result').textContent = (n2 + "% de " + n1 + " é: " + resultado)
    }

}
var Calculadora = new calculadora()
