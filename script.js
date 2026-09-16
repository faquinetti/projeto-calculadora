	let campoAtivo = document.getElementById("numero1");

function definirCampoAtivo(campo) {
    campoAtivo = campo;
}

function pegarNumero(id) {
    let valor = document.getElementById(id).value;
    valor = valor.replace(",", ".");
    return Number(valor);
}

function somar() {
    let numero1 = pegarNumero("numero1");
    let numero2 = pegarNumero("numero2");

    let resultado = numero1 + numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtrair() {
    let numero1 = pegarNumero("numero1");
    let numero2 = pegarNumero("numero2");

    let resultado = numero1 - numero2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicar() {
    let numero1 = pegarNumero("numero1");
    let numero2 = pegarNumero("numero2");

    document.getElementById("resultado").innerText =
        "Resultado: " + (numero1 * numero2);
}

function dividir() {
    let numero1 = pegarNumero("numero1");
    let numero2 = pegarNumero("numero2");

    if (numero2 === 0) {
        document.getElementById("resultado").innerText = "Erro: Divisão por zero!";
    } else {
        document.getElementById("resultado").innerText =
            "Resultado: " + (numero1 / numero2);
    }
}

function limparTudo() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerText = "Resultado:";
}

function porcentagem() {
    let numero1 = pegarNumero("numero1");
    let numero2 = pegarNumero("numero2");

    let resultado = (numero1 / 100) * numero2;

    document.getElementById("resultado").innerText =
        numero1 + "% de " + numero2 + " = " + resultado;
}

function adicionarVirgula() {
    if (!campoAtivo.value.includes(",")) {
        campoAtivo.value += ",";
    }
}
