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
    const aulas = document.querySelectorAll('.link');

    aulas.forEach(function(aula) {
      aula.addEventListener('click', function() {
        const titulo = document.querySelector('.titulo');
        const conteudo = document.querySelector('.conteudo');

        // Define o texto que deseja adicionar
        const cont = aula.textContent;

        // Adiciona o texto à classe .conteudo
        titulo.textContent = cont;
        titulo.style.marginTop = "10px";

        const texto = aula.getAttribute('data-texto');

        // Limpa o conteúdo anterior
        const textoElement = conteudo.querySelector('.texto');
        textoElement.innerHTML = '';
  
        // Divide o texto em parágrafos
        const paragrafos = texto.split('\n');
  
        // Adiciona cada parágrafo como um elemento <p>
        paragrafos.forEach(paragrafo => {
          const paragrafoElement = document.createElement('p');
          paragrafoElement.textContent = paragrafo;
          textoElement.appendChild(paragrafoElement);
        });

        // Remove qualquer iframe existente
        const videoExistente = document.querySelector('.video iframe');
        if (videoExistente) {
          videoExistente.remove();
        }

        // Cria um novo iframe
        const novoIframe = document.createElement('iframe');
        novoIframe.width = "560";
        novoIframe.height = "315";
        novoIframe.title = "YouTube video player";
        novoIframe.frameBorder = "0";
        novoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        novoIframe.referrerPolicy = "strict-origin-when-cross-origin";
        novoIframe.allowFullscreen = true;
        novoIframe.style.marginTop = "20px";
        novoIframe.style.borderRadius = "15px";

        // Define o link do vídeo a ser exibido
        const videoLink = aula.getAttribute('data-video');
        novoIframe.src = videoLink;

        // Adiciona o novo iframe à classe .video
        document.querySelector('.video').appendChild(novoIframe);

        conteudo.classList.add('ativo');
      });
    });
  });

  function showForm(formId) {
    // Oculta todos os formulários
    var forms = document.querySelectorAll('.form-container');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
    // Mostra apenas o formulário correspondente ao ID clicado
    var selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';
}

  
