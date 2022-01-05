$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
        }
        


    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    var typed= new Typed(".typing",{
        strings: ["Undergraduate","Designer","Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    

});