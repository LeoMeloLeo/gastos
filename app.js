/**
 * @author Samuelgadelha
 * @version 1.0
 */

// Variáveis
let salario, agua, luz, saldo, dispesas, mensalidade;

function calcular() {
    // Validação dos campos obrigatórios (todos)
    if (frmSaldo.txtSalario.value === "") {
        alert("Informe quanto é seu salário");
        frmSaldo.txtSalario.focus();
        return;
    } 
    if (frmSaldo.txtAgua.value === "") {
        alert("Informe quanto paga de Água");
        frmSaldo.txtAgua.focus();
        return;
    } 
    if (frmSaldo.txtLuz.value === "") {
        alert("Informe quanto paga de Luz");
        frmSaldo.txtLuz.focus();
        return;
    } 
    if (frmSaldo.txtDispesas.value === "") {
        alert("Informe quanto paga em Despesas");
        frmSaldo.txtDispesas.focus();
        return;
    } 
    if (!document.getElementById("b").checked && !document.getElementById("n").checked) {
        alert("Selecione se é bolsista ou não");
        return;
    } else if (frmSaldo.nivel.value === "") {
        alert("Selecione o curso ");
        return;
    } 

    // Captura das variáveis salário, água, luz e despesas
    salario = parseFloat(frmSaldo.txtSalario.value);
    agua = parseFloat(frmSaldo.txtAgua.value);
    luz = parseFloat(frmSaldo.txtLuz.value);
    dispesas = parseFloat(frmSaldo.txtDispesas.value);

    // Mensalidade valor
    mensalidade = document.getElementById("b").checked ? 0 : 99;

    // Cálculo do Saldo
    saldo = salario - (luz + agua + dispesas + mensalidade);
    document.getElementById("saldo").innerHTML = `Saldo: ${saldo.toFixed(2)}`;

    // Verificação de status financeiro
    if (saldo >= 2000) {
        document.getElementById("status").innerHTML = "Tá esbanjando grana";
        document.getElementById("grafico").src = "img/esbanjando.jpg";
    } else if (saldo >= 900) {
        document.getElementById("status").innerHTML = "Sobra dinheiro pra um churrasquinho";
        document.getElementById("grafico").src = "img/churrasco.jpg";
    } else if (saldo >= 0) {
        document.getElementById("status").innerHTML = "Tá em dia";
        document.getElementById("grafico").src = "img/emdia.jpg";
    } else if (saldo >= -2000) {
        document.getElementById("status").innerHTML = "Devendo";
        document.getElementById("grafico").src = "img/demais.jpeg";
    } else {
        document.getElementById("status").innerHTML = "Devendo Demais";
        document.getElementById("grafico").src = "img/devendo.jpg";
    } 

}

function limpar() {
    document.getElementById("saldo").innerHTML = "Saldo";
    document.getElementById("status").innerHTML = "Status";
    document.getElementById("grafico").src = "img/reset.jpg";
}
