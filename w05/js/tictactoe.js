$(document).ready(function(){

    let turn = 0; //偶數是o 基數是x

    $('#board li').on('click',function(){
        if($(this).hasClass('disable')){
            alert('Already filled');
        }else if(turn%2==0){
            $(this).text("o");
            $(this).addClass("disable o");

        }else if(turn%2==1){
            $(this).text("x");
            $(this).addClass("disable x");
        }

        turn++;
    })
    
    $.fn.reset = function () {
        $('#board li').text('+');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
    }

    $('#reset').on('click',function(){
        $.fn.reset();
    })
})