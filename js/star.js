(function($){

    var id = 0;
    var gdata = [ ]

    // 일정추가
    $('form').on('submit', function(){
        let text = $(this).find('input').val()
        if (text) {
            ++id
            let obj = { id:id, text:text }
            gdata.push(obj)
            localStorage.gdata = JSON.stringify(gdata)

            $(this).find('input').val('').focus()
            usedata(gdata)
        }
        return false
    })

    function usedata(rdata){
        $('#star ul').remove()
        let list = `<ul class="starlist">`
        rdata.map(function(value){
            list += `<li>`
            list += `<input type="text" value="${value.text}" disabled>`
            list += `<button type="button">삭제</button></li>`
        })
        list += `</ul>`
        $('#star .btn').before(list)
    }

    // 일정삭제
    $('body').on('click', '.starlist li button', function(){
        let num = $(this).parent().index()
        gdata.splice(num, 1)
        localStorage.gdata = JSON.stringify(gdata)
        $('#star ul').remove()
        usedata(gdata)
    })

    $('.btn a').on('click', function(){
        localStorage.clear()
        gdata = []
        usedata(gdata)
        return false
    })
})(jQuery)