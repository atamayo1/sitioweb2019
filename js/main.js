$activar = true;
$(document).ready(function () {
    initSobreMi();

    if($activar != true){
        fadeSobreMi();
    }else{
        $(".btnfront").css('margin-bottom', '0px');
        $(".btnback").css('margin-bottom', '0px');
        $(".btnsocial").css('margin-bottom', '0px');
    }
 
});

function initSobreMi(){
    $(".textfront").fadeOut();
    $(".textback").fadeOut();
    $(".textsocial").fadeOut();
    
    $activar = false;
}

function fadeSobreMi() {  
    $(".btnfront").click(function () { 
        $(".textfront").fadeToggle("slow");
    });
    $(".btnback").click(function () { 
        $(".textback").fadeToggle("slow");
    });
    $(".btnsocial").click(function () { 
        $(".textsocial").fadeToggle("slow");
    });

    $activar = false;
}