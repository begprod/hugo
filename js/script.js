$(document).ready(function() {
    console.log('Alive!!!');
    createBgfromAlbum();
});




function createBgfromAlbum() {
    var albumCoverImg = $('.featured-music__current-albm img');
    var srcAlbumCoverImg = albumCoverImg.attr('src');
    albumCoverImg.parent().parent().parent().css('background-image', 'url(' + srcAlbumCoverImg + ')');
}
