$(".menu > ul > li").click(function(e) {
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideUp();
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active");
})

function cliquei(){
    var logo = document.getElementById("logo");
    var side = document.getElementsByClassName("sidebar")[0];

    var sideWidth = window.getComputedStyle(side).width;

    if(sideWidth === "92px") {
        logo.style.display = "flex";
    } else {
        logo.style.display = "none";
    }
}