$(document).on('ready',function () {
    // $.doTimeout( 200, function(){
        resizePartnerSlider();
    // });
});

$(window).on('load',function () {
    // $.doTimeout( 200, function(){
        resizePartnerSlider();
    // });
});

$(window).on('resize',function () {
    // $.doTimeout( 200, function(){
        resizePartnerSlider();
    // });
});

function resizePartnerSlider() {
    var $items
    var mediaquery = $('body').data('mediaquery');
    if (mediaquery == 'xs') { $items = 1; }
    if (mediaquery == 'sm') { $items = 2; }
    if (mediaquery == 'md') { $items = 3; }
    if (mediaquery == 'lg') { $items = 4; }
    if (mediaquery == 'xl') { $items = 4; }
    $slideshow = $('.cycle-slideshow.slideshow');

    if ($slideshow.data('mediaquery') != mediaquery) {
        if ($($slideshow).data('cycle.opts')) {
            $slideshow.cycle('destroy');
        }
        $slideshow.cycle({
            fx: 'carousel',
            // speed: 800,
            slides: '.slide',
            carouselVisible: $items,
            carouselFluid: true,
            autoHeight: 'false',
            next: '.carousel-control-next',
            prev: '.carousel-control-prev',
            swipe: true,
            paused: true,
            log: true,
            allowWrap: true,
            timeout: 2000,
            random: true,
        }).data('mediaquery', mediaquery);

        //$slideshow.find('.partner').css('opacity',1);
    }
};