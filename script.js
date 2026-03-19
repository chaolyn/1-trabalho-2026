
const botoes = document.querySelectorAll('.btn-comprar');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      
        const carro = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');

       
        botao.innerHTML = "⏳ Validando...";
        botao.style.opacity = "0.7";
        botao.disabled = true;

       
        setTimeout(() => {
            alert(`✅ PROPOSTA ENVIADA!\n\nVeículo: ${carro}\nValor: R$ ${preco}\n\nNossa equipe entrará em contato em breve.`);
            
            botao.innerHTML = "Proposta Enviada!";
            botao.style.backgroundColor = "#2ecc71"; 
            botao.style.color = "white";
            botao.style.opacity = "1";
        }, 1200);
    });
});