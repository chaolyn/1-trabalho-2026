// ============================================================
// SISTEMA DE INTERAÇÃO DE VENDAS - AUTO ELITE BRASIL
// ============================================================

// 1. SELEÇÃO DE ELEMENTOS
// Selecionamos TODOS os botões que possuem a classe 'btn-comprar'.
// Isso torna o código escalável (funciona para 1 ou 100 carros).
const botoesComprar = document.querySelectorAll('.btn-comprar');

// 2. ADICIONAR EVENT LISTENER
// Iteramos sobre cada botão encontrado e adicionamos um ouvinte de clique.
botoesComprar.forEach(botao => {
    botao.addEventListener('click', handleInteresseClick);
});

// 3. FUNÇÃO PRINCIPAL (Manipulação do Clique)
function handleInteresseClick(event) {
    // 'event.target' é o botão exato que foi clicado.
    const botaoClicado = event.target;

    // CAPTURA DINÂMICA DE DADOS
    // Lemos os valores dos 'data-attributes' que você colocou no HTML.
    const nomeCarro = botaoClicado.getAttribute('data-nome');
    const precoCru = botaoClicado.getAttribute('data-preco');

    // FORMATAÇÃO DE MOEDA (Dica de profissional)
    // Convertemos o preço cru (ex: 280000) para formato Real (R$ 280.000,00).
    // Isso mostra atenção aos detalhes na apresentação.
    const precoFormatado = Number(precoCru).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // FEEDBACK VISUAL IMEDIATO (UI/UX)
    // Mudamos o estado do botão para o usuário saber que algo está acontecendo.
    botaoClicado.innerText = "⏳ Validando...";
    botaoClicado.style.backgroundColor = "#ffc107"; // Amarelo (Aviso/Processando)
    botaoClicado.style.color = "black";
    botaoClicado.disabled = true; // Impede duplo clique acidental

    // LOG NO CONSOLE (Para mostrar na apresentação com F12)
    console.log(`[SISTEMA] Iniciando simulação de proposta para: ${nomeCarro} (${precoFormatado})...`);

    // SIMULAÇÃO DE PROCESSAMENTO (O toque criativo)
    // Usamos setTimeout para simular uma resposta do servidor após 1.8 segundos.
    setTimeout(() => {
        
        // MENSAGEM FINAL (Alert Personalizado com Template Literals)
        // Usamos a crase (`) para conseguir quebrar linhas na mensagem.
        alert(
`🎉 EXCELENTE ESCOLHA!

Sua intenção de compra para a ${nomeCarro} foi registrada.

Resumo da Proposta:
-----------------------------------
Veículo: ${nomeCarro}
Valor: ${precoFormatado}
-----------------------------------

Um de nossos consultores especializados entrará em contato 
com você via e-mail nas próximas 2 horas para finalizar o processo.

Obrigado por escolher a Redline motors, onde a excelência é nossa paixão! 🚗💨`
        );

        // FEEDBACK VISUAL DE SUCESSO
        // Atualizamos o botão para o estado final positivo.
        botaoClicado.innerText = "✅ Proposta Enviada!";
        botaoClicado.style.backgroundColor = "#28a745"; // Verde (Sucesso)
        botaoClicado.style.color = "white";
        // Mantemos desabilitado para simular que a proposta já foi feita.
        
        console.log(`[SISTEMA] Proposta para ${nomeCarro} enviada com sucesso!`);

    }, 1800); // Tempo de espera: 1800 milissegundos (1.8 segundos)
}