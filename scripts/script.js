// Função para a animação de revelação ao rolar a página
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; // Distância para o elemento aparecer
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  // Adiciona o listener para o evento de scroll
  window.addEventListener("scroll", reveal);
  
  // Roda a função uma vez no carregamento para checar elementos já visíveis
  reveal();