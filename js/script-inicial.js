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
    const progress = document.getElementById('progressBar');
    const progresso = document.getElementById('progresso');

    if (logo.style.display === 'flex') {
        progress.style.display = 'none';
        logo.style.display = 'none';
        progresso.style.display = 'none';
    } else {
        progress.style.display = 'flex';
        logo.style.display = 'flex';
        progresso.style.display = 'flex';
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
        const inicio = document.querySelector('.inicio');
        inicio.style.display = "none";

        const titulo = document.querySelector('.titulo');
        const conteudo = document.querySelector('.conteudo');
        conteudo.classList.add('ativo');

        // Define o texto que deseja adicionar
        const cont = aula.textContent;

        // Adiciona o texto à classe .conteudo
        titulo.textContent = cont;
        titulo.style.marginTop = "10px";

        const videoExistente = document.querySelector('.video iframe');
        if (videoExistente) {
          videoExistente.remove();
        } 

        const novoIframe = document.createElement('iframe');
        novoIframe.height = "300px";
        novoIframe.width = "60%";
        novoIframe.title = "YouTube video player";
        novoIframe.frameBorder = "0";
        novoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        novoIframe.referrerPolicy = "strict-origin-when-cross-origin";
        novoIframe.allowFullscreen = true;
        novoIframe.style.marginTop = "20px";
        novoIframe.style.borderRadius = "15px";

        const videoLink = aula.getAttribute('data-video');
        if(videoLink != ""){
          novoIframe.src = videoLink;
          document.querySelector('.video').appendChild(novoIframe);
        } 

        const texto = aula.getAttribute('data-texto');

        // Limpa o conteúdo anterior
        const textoElement = conteudo.querySelector('.texto');
        textoElement.innerHTML = '';
  
        // Divide o texto em parágrafos
        const paragrafos = texto.split('\n');
  
        // Adiciona cada parágrafo como um elemento <p>
        if (texto != ""){
          paragrafos.forEach(paragrafo => {
          const paragrafoElement = document.createElement('p');
          paragrafoElement.textContent = paragrafo;
          textoElement.appendChild(paragrafoElement);
        });
        }
        

      });
    });
  });

  function showForm(formId) {
    // Oculta todos os formulários
    var forms = document.querySelectorAll('.form-container');
    const tituloForms = document.querySelector('#tituloForms');
    forms.forEach(function(form) {
        form.style.display = 'none';
        tituloForms.style.display = 'none';
    });
    // Mostra apenas o formulário correspondente ao ID clicado
    var selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'flex';
    tituloForms.style.display = 'block'
   
}

  
