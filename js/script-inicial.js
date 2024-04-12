$(".menu > ul > li").click(function(e) {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideUp();
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active");

    const logo = document.getElementById('logo');

    if (logo.style.display === 'flex') {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'flex';
    }
})

$("#logo").click(function(){
    $("#younique").toggleClass("active");
})

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe .aula
    const aulas = document.querySelectorAll('.aula');

      aulas.forEach(function(aula) {
      aula.addEventListener('click', function() {
        const titulo = document.querySelector('.titulo');
        
        // Define o texto que deseja adicionar
        const texto = aula.textContent;
        
        // Adiciona o texto à classe .conteudo
        titulo.textContent = texto;

        conteudo.classList.add('ativo');
      });
    });
  });
  
