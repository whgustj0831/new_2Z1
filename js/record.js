(function ($) {

    console.log(localStorage)
    if (localStorage.recentSearch) {
        const gdata = JSON.parse(localStorage.recentSearch)

        usedata(gdata.reverse())
    }


    function usedata(rdata) {
        $('#record .rec div').remove()
        let list = `<div class="cord">`
        rdata.map(function (value) {
            list += `
<div>
<a href="./trainInfo?statn_nm=${value.text}">${value.text}</a>
</div>`
        })
        list += `</div>`
        $('#record .re').before(list)
    }


    $('#wrap').on('click', '#record a', function (e) {

        e.preventDefault()
        const text = $(this).text();


        var state = {statn_nm: text};
        history.pushState(state, null);

        $('#wrap').removeClass()
        $('#wrap').addClass('trainInfo')

        $("#wrap").load(`trainInfo.html`);

    })
})(jQuery)
