// alert("a");


$(function(){
    $('.more').hover(
        function(){
        $(this).stop().animate({'opacity': '0.6'},200);
    },
        function(){
        $(this).stop().animate({'opacity': '1'},300);
    });
});


$(function(){
    $('.bnr1').hover(
        function(){
        $(this).stop().animate({'opacity': '0.6'},200);
    },
        function(){
        $(this).stop().animate({'opacity': '1'},300);
    });
});

$(function(){
    $('.bnr2').hover(
        function(){
        $(this).stop().animate({'opacity': '0.6'},200);
    },
        function(){
        $(this).stop().animate({'opacity': '1'},300);
    });
});

$(function(){
    $('.logo').addClass('hide');
});

$(function(){
    var offsetTop = $('.baner').offset().top;
    console.log(offsetTop);
});

$(function(){
    var image = $('.concept_text').offset().top;
    $(window).scroll(function() {
        let scroll = $(this).scrollTop();
        if( scroll >= image) {
            console.log('scroll');
        } 
    });
});

$(function(){
    $(window).scroll(function(){
        $('.concept_text').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 50){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        })
    });
});


$(function(){
    $(window).scroll(function(){
        $('.uniform_detail').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > targetElement - windowHeight + 80){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        })
    });
});
