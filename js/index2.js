(function ($) {


    window.onload = () => {
        $("#wrap").load('map.html');
    }



    function activeLink(e) {

        $(this).siblings().removeClass('active')
        $(this).addClass('active')



        const href = $(this).children('a').attr('href')
        $('#wrap').removeClass()
        if (href !== 'index.html') {
            $("#wrap").load(href);

            $('#wrap').addClass(href)


        } else {


            $('#wrap').addClass('main')
            $("#wrap").load('map.html');

        }
        return false;


    }



    $('#nav').on('click', '.list', activeLink)



})(jQuery)