
const botoesComprar = document.querySelectorAll('.btn-comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', handleInteresseClick);
});


function handleInteresseClick(event) {
    
    const botaoClicado = event.target;

   
    const nomeCarro = botaoClicado.getAttribute('data-nome');
    const precoCru = botaoClicado.getAttribute('data-preco');

    
    const precoFormatado = Number(precoCru).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    
    botaoClicado.innerText = "⏳ Validando...";
    botaoClicado.style.backgroundColor = "#ffc107"; 
    botaoClicado.style.color = "black";
    botaoClicado.disabled = true; 

    
    console.log(`[SISTEMA] Iniciando simulação de proposta para: ${nomeCarro} (${precoFormatado})...`);

   
    setTimeout(() => {
        
       
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

        
       
        botaoClicado.innerText = "✅ Proposta Enviada!";
        botaoClicado.style.backgroundColor = "#28a745"; 
        botaoClicado.style.color = "white";
       
        
        console.log(`[SISTEMA] Proposta para ${nomeCarro} enviada com sucesso!`);

    }, 1800); 