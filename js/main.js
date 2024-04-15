$(document).ready(function(){

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    //$('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });


    // sticky navigation menu
    // let nav_offset_top = $('.header_area').height();

    // function navbarFixed(){
    //     if($('.header_area').length){
    //         $(window).scroll(function(){
    //             let scroll = $(window).scrollTop();
    //             if(scroll >= nav_offset_top){
    //                 $('.header_area .main-menu').addClass('navbar_fixed');
    //             }else{
    //                 $('.header_area .main-menu').removeClass('navbar_fixed');
    //             }
    //         })
    //     }
    // }

    // navbarFixed();

    let $links = $('.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link');
    $links.click(function(e){
        $('.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link').removeClass('active');
        //$('.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link i').removeClass('active');
        if(e.target.tagName  === "A"){
            e.target.classList.add('active');
        }else{
            e.target.parentNode.classList.add('active');
        }
        // e.target.classList.add('active');
        // console.log(e.target.parentNode);
    });

    // window.onbeforeunload = function(){
    //   document.documentElement.scrollTop = 0;  //ie下
    //   document.body.scrollTop = 0;  //非ie
    // }   
    $(window).scrollTop(0)

});