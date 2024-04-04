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
