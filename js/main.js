
/* ===================MENU================ */

$("#open").click(function(){
  $("#menu").animate({width :'250px'},50)
  $("#homeContent").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#menu").animate({width :'0px'},50)
    $("#homeContent").animate({marginLeft :'0px'},50)
  })

/* ===================SCROLL================ */

$("a[href^='#']").click(function(e){
let aHref = e.target.getAttribute('href');
let sectionOffset = $(aHref).offset().top;
$("html , body").animate({scrollTop:sectionOffset},2000);
})

/* ===================SLIDER================ */
$('#slider .heading').click(function(){
    $('.inner').not($(this).next()).slideUp(500); //any inner 8er inner "next this heading" 
    $(this).next().slideToggle(500); //inner "next this heading"
});

/* ===================COUNTER=============== */
var countDownDate = new Date("25 october 2023 9:59:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)
},1000)


/* ===================TEXT AREA================ */

let maxLength = 100;
$("textarea").keyup(function(){
    let ulength = $(this).val().length;
    let lengthLeft = maxLength - ulength;
    if(lengthLeft <= 0){
        $("#chars").text("your available character finished");
    }else{
        $("#chars").text(lengthLeft)
    }
})
