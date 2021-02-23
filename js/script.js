    // event saat link di klik
$('.nav-link').on('click', function (e){
    // ambil isi href
   var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top -55
    }, 1, 'linear');

    e.preventDefault();

});