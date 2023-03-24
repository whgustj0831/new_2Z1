
(function ($) {


    const line2 = [
        {
            crdnt_x: "126.975411",
            route: "2호선",
            crdnt_y: "37.563588",
            statn_nm: "시청",
            statn_id: "0201",
        },
        {
            crdnt_x: "126.982618",
            route: "2호선",
            crdnt_y: "37.566014",
            statn_nm: "을지로입구",
            statn_id: "0202",
        },
        {
            crdnt_x: "126.991696",
            route: "2호선",
            crdnt_y: "37.566306",
            statn_nm: "을지로3가",
            statn_id: "0203",
        },
        {
            crdnt_x: "126.997817",
            route: "2호선",
            crdnt_y: "37.566595",
            statn_nm: "을지로4가",
            statn_id: "0204",
        },
        {
            crdnt_x: "127.009054",
            route: "2호선",
            crdnt_y: "37.565613",
            statn_nm: "동대문역사문화공원",
            statn_id: "0205",
        },
        {
            crdnt_x: "127.019614",
            route: "2호선",
            crdnt_y: "37.56564",
            statn_nm: "신당",
            statn_id: "0206",
        },
        {
            crdnt_x: "127.029354",
            route: "2호선",
            crdnt_y: "37.564354",
            statn_nm: "상왕십리",
            statn_id: "0207",
        },
        {
            crdnt_x: "127.036954",
            route: "2호선",
            crdnt_y: "37.561238",
            statn_nm: "왕십리(성동구청)",
            statn_id: "0208",
        },
        {
            crdnt_x: "127.043655",
            route: "2호선",
            crdnt_y: "37.555273",
            statn_nm: "한양대",
            statn_id: "0209",
        },
        {
            crdnt_x: "127.047367",
            route: "2호선",
            crdnt_y: "37.547184",
            statn_nm: "뚝섬",
            statn_id: "0210",
        },
        {
            crdnt_x: "127.055961",
            route: "2호선",
            crdnt_y: "37.544581",
            statn_nm: "성수",
            statn_id: "0211",
        },
        {
            crdnt_x: "127.069191",
            route: "2호선",
            crdnt_y: "37.540373",
            statn_nm: "건대입구",
            statn_id: "0212",
        },
        {
            crdnt_x: "127.085916",
            route: "2호선",
            crdnt_y: "37.537077",
            statn_nm: "구의(광진구청)",
            statn_id: "0213",
        },
        {
            crdnt_x: "127.094681",
            route: "2호선",
            crdnt_y: "37.535095",
            statn_nm: "강변(동서울터미널)",
            statn_id: "0214",
        },
        {
            crdnt_x: "127.10379",
            route: "2호선",
            crdnt_y: "37.520733",
            statn_nm: "잠실나루",
            statn_id: "0215",
        },
        {
            crdnt_x: "127.100159",
            route: "2호선",
            crdnt_y: "37.513262",
            statn_nm: "잠실(송파구청)",
            statn_id: "0216",
        },
        {
            crdnt_x: "127.086162",
            route: "2호선",
            crdnt_y: "37.511687",
            statn_nm: "잠실새내",
            statn_id: "0217",
        },
        {
            crdnt_x: "127.073704",
            route: "2호선",
            crdnt_y: "37.511022",
            statn_nm: "종합운동장",
            statn_id: "0218",
        },
        {
            crdnt_x: "127.06316",
            route: "2호선",
            crdnt_y: "37.508844",
            statn_nm: "삼성(무역센터)",
            statn_id: "0219",
        },
        {
            crdnt_x: "127.048203",
            route: "2호선",
            crdnt_y: "37.504286",
            statn_nm: "선릉",
            statn_id: "0220",
        },
        {
            crdnt_x: "127.036456",
            route: "2호선",
            crdnt_y: "37.500622",
            statn_nm: "역삼",
            statn_id: "0221",
        },
        {
            crdnt_x: "127.027912",
            route: "2호선",
            crdnt_y: "37.49799",
            statn_nm: "강남",
            statn_id: "0222",
        },
        {
            crdnt_x: "127.014667",
            route: "2호선",
            crdnt_y: "37.493961",
            statn_nm: "교대(법원.검찰청)",
            statn_id: "0223",
        },
        {
            crdnt_x: "127.007917",
            route: "2호선",
            crdnt_y: "37.491897",
            statn_nm: "서초",
            statn_id: "0224",
        },
        {
            crdnt_x: "126.997596",
            route: "2호선",
            crdnt_y: "37.481426",
            statn_nm: "방배",
            statn_id: "0225",
        },
        {
            crdnt_x: "126.981544",
            route: "2호선",
            crdnt_y: "37.476538",
            statn_nm: "사당",
            statn_id: "0226",
        },
        {
            crdnt_x: "126.963693",
            route: "2호선",
            crdnt_y: "37.47693",
            statn_nm: "낙성대",
            statn_id: "0227",
        },
        {
            crdnt_x: "126.952739",
            route: "2호선",
            crdnt_y: "37.481247",
            statn_nm: "서울대입구(관악구청)",
            statn_id: "0228",
        },
        {
            crdnt_x: "126.941892",
            route: "2호선",
            crdnt_y: "37.482362",
            statn_nm: "봉천",
            statn_id: "0229",
        },
        {
            crdnt_x: "126.929715",
            route: "2호선",
            crdnt_y: "37.484201",
            statn_nm: "신림",
            statn_id: "0230",
        },
        {
            crdnt_x: "126.913149",
            route: "2호선",
            crdnt_y: "37.487462",
            statn_nm: "신대방",
            statn_id: "0231",
        },
        {
            crdnt_x: "126.901401",
            route: "2호선",
            crdnt_y: "37.485266",
            statn_nm: "구로디지털단지",
            statn_id: "0232",
        },
        {
            crdnt_x: "126.894932",
            route: "2호선",
            crdnt_y: "37.493243",
            statn_nm: "대림(구로구청)",
            statn_id: "0233",
        },
        {
            crdnt_x: "126.891084",
            route: "2호선",
            crdnt_y: "37.508961",
            statn_nm: "신도림",
            statn_id: "0234",
        },
        {
            crdnt_x: "126.89476",
            route: "2호선",
            crdnt_y: "37.517933",
            statn_nm: "문래",
            statn_id: "0235",
        },
        {
            crdnt_x: "126.89661",
            route: "2호선",
            crdnt_y: "37.525706",
            statn_nm: "영등포구청",
            statn_id: "0236",
        },
        {
            crdnt_x: "126.902767",
            route: "2호선",
            crdnt_y: "37.534946",
            statn_nm: "당산",
            statn_id: "0237",
        },
        {
            crdnt_x: "126.913808",
            route: "2호선",
            crdnt_y: "37.549457",
            statn_nm: "합정",
            statn_id: "0238",
        },
        {
            crdnt_x: "126.923708",
            route: "2호선",
            crdnt_y: "37.55679",
            statn_nm: "홍대입구",
            statn_id: "0239",
        },
        {
            crdnt_x: "126.936926",
            route: "2호선",
            crdnt_y: "37.555131",
            statn_nm: "신촌",
            statn_id: "0240",
        },
        {
            crdnt_x: "126.946013",
            route: "2호선",
            crdnt_y: "37.556733",
            statn_nm: "이대",
            statn_id: "0241",
        },
        {
            crdnt_x: "126.956141",
            route: "2호선",
            crdnt_y: "37.557345",
            statn_nm: "아현",
            statn_id: "0242",
        },
        {
            crdnt_x: "126.964378",
            route: "2호선",
            crdnt_y: "37.559704",
            statn_nm: "충정로(경기대입구)",
            statn_id: "0243",
        },
        {
            crdnt_x: "127.050899",
            route: "2호선",
            crdnt_y: "37.561904",
            statn_nm: "용답",
            statn_id: "0244",
        },
        {
            crdnt_x: "127.046481",
            route: "2호선",
            crdnt_y: "37.57004",
            statn_nm: "신답",
            statn_id: "0245",
        },
        {
            crdnt_x: "127.024932",
            route: "2호선",
            crdnt_y: "37.574747",
            statn_nm: "신설동",
            statn_id: "0246",
        },
        {
            crdnt_x: "126.882768",
            route: "2호선",
            crdnt_y: "37.514287",
            statn_nm: "도림천",
            statn_id: "0247",
        },
        {
            crdnt_x: "126.865819",
            route: "2호선",
            crdnt_y: "37.512398",
            statn_nm: "양천구청",
            statn_id: "0248",
        },
        {
            crdnt_x: "126.852912",
            route: "2호선",
            crdnt_y: "37.520074",
            statn_nm: "신정네거리",
            statn_id: "0249",
        },
        {
            crdnt_x: "127.038091",
            route: "2호선",
            crdnt_y: "37.574028",
            statn_nm: "용두(동대문구청)",
            statn_id: "0250",
        },
    ];

    $('form').on('input', (e) => {
        let value = e.target.value
        let arr = []
        line2.forEach((station, i) => {
            const index = station.statn_nm.indexOf(value)
            if (index !== -1) {
                console.log(index, station.statn_nm)
                arr.push(station.statn_nm)
            }
        })

        $('#star ul').remove()
        let list = `<ul class="itext">`
        let htmlText = arr.map(name => {
            list += `<li>`
            list += `<input type="text" value="${name}" disabled>`
            list += `<button type="button" class='addS' data-statn="${name}">추가</button></li>`
        })
        list += `</ul>`
        $('.itext').html(htmlText)
        $('#star .btn').before(list)

        $(this).blur('#star ul', function () {
            $('.itext').remove()
        })

        $(this).keypress(function (e) {
            if (e.blur) {
                if ($(this).val() == '') {
                    $('#star ul .itext').remove()
                }
            }
        })
    })

    var id = 0;
    var gdata = []

    if (localStorage.gdata) {
        gdata = JSON.parse(localStorage.gdata)
        if (gdata) {
            id = gdata[gdata.length - 1]['id']
        }
        usedata(gdata)
    }

    // 추가
    $('#star').on('click', '.addS', function () {
        let aname = $(this).attr('data-statn')
        let obj = { id: id, text: aname }
        gdata.push(obj)
        localStorage.gdata = JSON.stringify(gdata)
        usedata(gdata)
        console.log('gdata', gdata)
    })

    function usedata(rdata) {
        $('#star ul').remove()
        let list = `<ul class="starlist">`
        rdata.map(function (value) {
            list += `<li>`
            list += `<div><a href="?statn_nm=${value.text}">${value.text}</a>`
            list += `</div>`
            list += `<button type="button">삭제</button></li>`
        })
        list += `</ul>`
        $('#star .btn').before(list)
    }

    // 삭제
    $('body').on('click', '.starlist li button', function () {
        let num = $(this).parent().index()
        gdata.splice(num, 1)
        localStorage.gdata = JSON.stringify(gdata)
        $('#star ul').remove()
        usedata(gdata)
    })

    $('.btn a').on('click', function () {
        localStorage.clear()
        gdata = []
        usedata(gdata)
        return false
    })



    $('#wrap').on('click', '.starlist a', function (e) {


        const text = $(this).text();
     


        var state = {statn_nm: text };
        history.pushState(state, null);

        $('#wrap').removeClass()
        $('#wrap').addClass('trainInfo')

        $("#wrap").load(`trainInfo.html`);


        return false;

    })



})(jQuery)
