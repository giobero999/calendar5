$(document).ready(function () {

    $('.design p').on('click', function () {
        if ($(".design p, .grap-design p, .int-objects p, .programing p, .ict p").hasClass('active')) {
            $(".design p, .grap-design p, .int-objects p, .programing p, .ict p").removeClass('active');
        }
      
        $(this).addClass('active');
        $('.days-num li').removeClass("click ict, click-programing click-int-objects click-grap-design").addClass("click-design");
    });


    $('.grap-design p').on('click', function () {
        if ($(".design p, .grap-design p, .int-objects p, .programing p, .ict p").hasClass('active')) {
            $(".design p, .grap-design p, .int-objects p, .programing p, .ict p").removeClass('active');
        }
        $(this).addClass('active');
        $('.days-num li').removeClass("click-ict click-programing click-int-objects click-design").addClass("click-grap-design");
    });

    $('.int-objects p').on('click', function () {
        if ($(".design p, .grap-design p, .int-objects p, .programing p, .ict p").hasClass('active')) {
            $(".design p, .grap-design p, .int-objects p, .programing p, .ict p").removeClass('active');
        }
        $(this).addClass('active');
        $('.days-num li').removeClass("click-ict click-programing click-grap-design  click-design").addClass("click-int-objects");
    });

    $('.programing p').on('click', function () {
        if ($(".design p, .grap-design p, .int-objects p, .programing p, .ict p").hasClass('active')) {
            $(".design p, .grap-design p, .int-objects p, .programing p, .ict p").removeClass('active');
        }
        $(this).addClass('active');
        $('.days-num li').removeClass("click-ict click-int-objects click-grap-design  click-design").addClass("click-programing");
    });

    $('.ict p').on('click', function () {
        if ($(".design p, .grap-design p, .int-objects p, .programing p, .ict p").hasClass('active')) {
            $(".design p, .grap-design p, .int-objects p, .programing p, .ict p").removeClass('active');
        }
        $(this).addClass('active');
        $('.days-num li').removeClass("click-programing click-int-objects click-grap-design  click-design").addClass("click-ict");
    });

    /*pop up*/
    $('.days-num li').click(function () {
        $('.pop-up').removeClass('pop-up-hide').css({position:'absolute', left:20});
    });

    $('.fa-close').click(function () {
        $('.pop-up').addClass('pop-up-hide');
    });
    
    $('.sidebar-main p').click(function(){
        if($('sidebar-main p').addClass('active')){
            $('.days-num li').click(function(){
                $('.pop-up').addClass('pop-up-show');
            });
        }
    });
    
/* pop up in the diferent position */    
//    $('.days-num li').bind('click', function (event) {
//        var offset = $(this).offset();
//    $('.pop-up').css('left',offset.left); 
//    $('.pop-up').css('top',offset.top);
//    $(".pop-up").css("position", "absolute");  // <<< also make it absolute!
//    });
    
    // end pop up
      








}); //end ready