// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e a lista de sinais
    const btnRevelar = document.getElementById("btn-revelar");
    const listaSinais = document.getElementById("lista-sinais");

    // Adiciona o evento de clique ao botão
    btnRevelar.addEventListener("click", function() {
        // Verifica se a lista está escondida
        if (listaSinais.classList.contains("hidden")) {
            listaSinais.classList.remove("hidden");
            btnRevelar.textContent = "Ocultar Sinais";
            btnRevelar.style.backgroundColor = "#e74c3c"; // Muda a cor do botão para vermelho
        } else {
            listaSinais.classList.add("hidden");
            btnRevelar.textContent = "Revelar Sinais";
            btnRevelar.style.backgroundColor = "#3498db"; // Retorna para a cor original azul
        }
    });

});