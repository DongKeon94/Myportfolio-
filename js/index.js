$(function(){
    $("#text2").hide();

    $(".hello").on("mouseenter", function(){
        $(".hello-text #text1").hide()
        $(".hello-text #text2").fadeIn(1000)
        $(".hello-text #text2").css({
            "color" : "blue",
        }, 1000, "swing");
    });
});

$(function(){
    $(".hello").on("mouseleave", function(){
        $(".hello-text #text2").hide()
        $(".hello-text #text1").fadeIn(1000)
        
    });
});
