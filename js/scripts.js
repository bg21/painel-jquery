$(function(){
    var aberto = true;
    var janelaTamanho = $(window)[0].innerWidth;
    if(janelaTamanho <= 860){
        aberto = false;
        $('div.sidebar').css('width', '0');
    }
    
    $('i.clique').click(function(){
        if(aberto){
            $('div.sidebar').animate({
                'width':'0'
            }, function(){
                aberto = false;
            });
            $('div.corpo').animate({
                'marginLeft':'0',
                'width':'100%'
            }, function(){
                aberto = false;
            });
        }else {
            $('div.sidebar').css('display', 'block');
            $('div.sidebar').animate({
                'width':'300px'
            }, function(){
                aberto = true;
            });
            $('div.corpo').animate({
                'marginLeft':'300px',
                'width':'calc(100% - 300px)'
            }, function(){
                aberto = true;
            });
        }
    });
});