/**
 * Realiza o cálculo exato antidesperdício para a pulverização
 * e exibe o resultado estruturado em tela.
 */
function calcularDosagem() {
    // Captura e conversão dos valores digitados pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    const dose = parseFloat(document.getElementById('dose').value);
    const unidadeDose = document.getElementById('unidade-dose').value;
    const caldaPorHa = parseFloat(document.getElementById('calda').value);

    // Validação lógica para impedir campos em branco ou valores negativos/nulos
    if (isNaN(area) || isNaN(dose) || isNaN(caldaPorHa) || area <= 0 || dose <= 0 || caldaPorHa <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos maiores que zero.");
        return;
    }

    // Processamento matemático exato antidesperdício
    const produtoTotal = area * dose;
    const caldaTotal = area * caldaPorHa;

    // Atualização dos elementos de resposta no DOM com formatação decimal fixa
    document.getElementById('res-produto').innerText = produtoTotal.toFixed(2) + " " + unidadeDose;
    document.getElementById('res-calda').innerText = caldaTotal.toFixed(2);
    
    // Altera a propriedade CSS para tornar o painel de resultados visível
    document.getElementById('resultado').style.display = 'block';
}