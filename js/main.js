$(window).scroll(function () { 
    let scrollTopWindow = $(window).scrollTop();
    if (scrollTopWindow >= 1  )
    {
        $(".navbar").removeClass("bg-transparent");
        $(".nav-bar").addClass("bg-dark");
        $(".nav-bar").css("padding","10px 20px 10px 20px");


    }else
    {
        $(".navbar").addClass("bg-transparent");
        $(".nav-bar").removeClass("bg-dark");
        $(".nav-bar").css("padding","15px 20px 16px 20px");

    }
    
});