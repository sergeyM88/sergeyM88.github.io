   $(document).ready(function() {

/*Portfolio*/


/*mixitab впереди*/
$("#portfolio_grid").mixItUp();


$(".s_portfolio li").click(function() {
  $(".s_portfolio li").removeClass("active");
  $(this).addClass("active");

});





/*popup*/

$('.popup').magnificPopup({type:'image'}); /*for images*/
/*for portfolio*/
$('.popup_content').magnificPopup({
  type:"inline",
  midClick: true

});

/*Анимация имени и профессии*/

$(".top_name h1").animated("fadeInDown","fadeInUp");
$(".top_name p, .section_header").animated("fadeInUp","fadeInDown");

/*Anover animation*/
$(".animation_1").animated("fadeInLeft","fadeOutLeft");
$(".animation_3").animated("fadeInRight","fadeOutRight");
$(".animation_2").animated("flipInY","flipOutY");

$(".left .resume_item").animated("fadeInLeft","fadeOutDown");
$(".right .resume_item").animated("fadeInRight","fadeOutDown");
  /*Будет делаться высота header по высоте экрана*/
/*от инспектора кода остается след*/
function heightDetect() {
  	$(".main_head").css("height", $(window).height());
}
heightDetect();
$(window).resize(function() {
  heightDetect();
});

/*jquery resize height end */

$(".toggle_menu").click(function() {
  $(".sandwich").toggleClass("active");
});

/*open close menu*/
$(".toggle_menu").click(function() {
  if($(".top_menu").is(":visible")) {
    $(".top_name").removeClass("h_opacity");
    $(".top_menu").fadeOut(600);
    $(".top_menu li a").removeClass("fadeInUp animated");
  }
  else {
    $(".top_name").addClass("h_opacity");
    $(".top_menu").fadeIn(600);
    $(".top_menu li a").addClass("fadeInUp animated");
  }

});
//end

/*on click in menu*/
  $(".top_menu ul a").click(function() {
    $(".top_menu").fadeOut(600);
    $(".sandwich").toggleClass("active");
    $(".top_name").css("opacity","1");

  }).append("<span>");
  //end


/*portfolio item*/

  $(".portfolio_item").each(function(i) {

    $(this).find("a").attr("href","#work_"+i);
    $(this).find(".portf_descr").attr("id","work_"+i);

  });

/*end portfolio item*/

/*jqBootstrapValidation*/

$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

/*page to id*/

$(".top_menu ul a").mPageScroll2id();



});


//Preloader

$(window).load(function() {
	$(".loaderInner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
