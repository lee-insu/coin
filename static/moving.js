$('.replay').hide();
$('.content-explanation').hide();
$('.result-img').hide();
$('.loading-img').hide();
$('.loading-text').hide();
function clickEvent() {
    $('.content-text').hide();
    $('.click-img').hide();
    $('.result-coin').hide();
    $('.loading-img').show();
    $('.loading-text').show();

    setTimeout(function() {
        $('.loading-img').hide();
        $('.loading-text').hide();
        $('.replay').show();
        $('.result-coin').show();
        $('.content-explanation').show();
        $('.result-img').show();
    },2000);
}