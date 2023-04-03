import {
    localStorageInit,
    addRecentSearch,
    usedata,
    useFavData,
    deleteFav,
    isFav,
    addFav,
} from "./storage.js";

import { updateArrivalData } from "./sample.js";

let MarkerHtml;
const trainPosList = [];
let stationClicked;

const markers = line2.map((station, i) => {
    return {
        statn_nm: station.statn_nm.slice(
            0,
            station.statn_nm.indexOf("(") === -1
                ? station.statn_nm.length
                : station.statn_nm.indexOf("(")
        ),
        crdnt_x: station.crdnt_x - 0,
        crdnt_y: station.crdnt_y - 0,
        statn_id: station.statn_id,
        marker: "",
        data_markerInfo: "",
        station_id: station.statn_id,
        data_clicked: false,
        data_mlabel: "N",
        toNextStation: station.toNextStation,
    };
});

line2.forEach((station, i) => {
    const getMobileInfo = (i) => {
        if (i < 4) {
            return {
                x: 2 * i + 5,
                y: 3,
                dita_dir: "N",

                data_mlabel: "N",
            };
        } else if (i < 21) {
            return {
                x: 12,
                y: i,

                data_dir: "E",

                data_mlabel: "W",
            };
        } else if (i < 25) {
            return {
                x: -(i * 2) + 53,
                y: 21,

                data_dir: "S",

                data_mlabel: "S",
            };
        } else if (i === 25) {
            return {
                x: 4,
                y: 20,

                data_dir: "W",

                data_mlabel: "E",
            };
        } else if (i < 42) {
            return {
                x: 4,
                y: ((-i + 26) * 16) / 17 + 19,

                data_dir: "W",

                data_mlabel: "E",
            };
        } else if (i === 42) {
            return {
                x: 4,
                y: 4,

                data_dir: "W",

                data_mlabel: "E",
            };
        } else if (i < 46) {
            return {
                x: 13,
                y: 12 + 40 - i,

                data_dir: "E",

                data_mlabel: "E",
            };
        } else if (i < 50) {
            return {
                x: 3,
                y: 14 - 46 + i,

                data_dir: "W",

                data_mlabel: "W",
            };
        }
    };

    const { x, y, data_dir, data_mlabel } = getMobileInfo(i);

    markers[i].x = x;
    markers[i].y = y;
    markers[i].data_dir = data_dir;
    markers[i].data_mlabel = data_mlabel;

    //error
    if (i > 48) return;
    const getPCxy = (i) => {
        if (i < 10) {
            return { pcX: 9 + i * 2, pcY: 6, pcDir: "E", pcLabelPos: "N" };
        } else if (i === 10) {
            return { pcX: 28, pcY: 7, pcDir: "E", pcLabelPos: "E" };
        } else if (i < 18) {
            return {
                pcX: 28,
                pcY: 7 + ((i - 10) * 12) / 7,
                pcDir: "S",
                pcLabelPos: "E",
            };
        } else if (i === 18) {
            return { pcX: 27, pcY: 20, pcDir: "S", pcLabelPos: "S" };
        } else if (i < 30) {
            return {
                pcX: 27 - ((i - 18) * 22) / 12,
                pcY: 20,
                pcDir: "E",
                pcLabelPos: "S",
            };
        } else if (i === 30) {
            return { pcX: 5, pcY: 20, pcDir: "E", pcLabelPos: "S" };
        } else if (i === 31) {
            return { pcX: 4, pcY: 19, pcDir: "W", pcLabelPos: "W" };
        } else if (i < 40) {
            return { pcX: 4, pcY: (-(i - 40) * 12) / 9 + 7, pcLabelPos: "W" };
        } else if (i === 40) {
            return { pcX: 4, pcY: 7, pcLabelPos: "W" };
        } else if (i === 41) {
            return { pcX: 5, pcY: 6, pcLabelPos: "N" };
        } else if (i === 42) {
            return { pcX: 7, pcY: 6, pcLabelPos: "N" };
        } else if (i < 45) {
            return { pcX: 28, pcY: -i + 40 + 8, pcDir: "W", pcLabelPos: "E" };
        } else if (i === 45) {
            return { pcX: 27, pcY: 3, pcLabelPos: "E" };
        } else if (i === 46) {
            return { pcX: 2, pcY: 15, pcLabelPos: "W" };
        } else if (i < 49) {
            return { pcX: 2, pcY: 14 + (-i + 47), pcLabelPos: "W" };
        }
    };

    const { pcX, pcY, pcDir, pcLabelPos } = getPCxy(i);

    markers[i].pcX = pcX;
    markers[i].pcY = pcY;
    markers[i].pcDir = pcDir;
    markers[i].pcLabelPos = pcLabelPos;
});

const lisMobile = () =>
    markers.map((station, i) => {
        if (i < 43) {
            return `<li
            data-pclabel="${station.data_mlabel}"
data-marker="${station.marker}"
data-coords="${station.x}, ${station.y}" data-dir="${
                station.data_dir
            }" data-nearest="${station.data_nearest}" data-clicked="${
                station.data_clicked
            }">
<a href="#">${station ? station.statn_nm : ""}</a>
</li>`;
        } else if (i === 43) {
            return `<li data-coords="5,3">
    
        </li>`;
        }
    });

const coda1 = () =>
    markers.map((station, i) => {
        if (i === 41) {
            return `<li data-coords="12, 10"></li>`;
        }
        if (i > 42 && i < 46) {
            return `<li
            data-pclabel="${station.data_mlabel}"
        data-marker="${station.marker}"
        data-coords="${station.x}, ${station.y}" data-dir="${
                station.data_dir
            }" data-nearest="${station.data_nearest}" data-clicked="${
                station.data_clicked
            }">
        <a href="#">${station ? station.statn_nm : ""}</a>
        </li>`;
        }
    });

const coda2 = () =>
    markers.map((station, i) => {
        if (i === 45) {
            return `<li data-coords="4, 13.3"></li>`;
        }
        if (i > 45 && i < 49) {
            return `<li
            data-pclabel="${station.data_mlabel}"
        data-marker="${station.marker}"
        data-coords="${station.x}, ${station.y}" data-dir="${
                station.data_dir
            }" data-nearest="${station.data_nearest}" data-clicked="${
                station.data_clicked
            }">
        <a href="#">${station ? station.statn_nm : ""}</a>
        </li>`;
        }
    });

const lisPc = () =>
    markers.map((station, i) => {
        if (i > 43) return;
        if (i < 43) {
            return `<li
data-marker="${station.marker}"
data-coords="${station.pcX}, ${station.pcY}" data-dir="${
                station.pcDir
            }" data-nearest="${station.data_nearest}"  data-clicked="${
                station.data_clicked
            }" data-pclabel="${station.pcLabelPos}"

>
<a href="#">${station ? station.statn_nm : ""}</a>
</li>`;
        } else if (i === 43) {
            return `<li data-coords="9,6">
    </li>`;
        }
    });
const coda3 = () =>
    markers.map((station, i) => {
        if (i < 42) return;
        if (i === 42) {
            return `<li data-coords="28, 7"></li>`;
        } else if (i < 46) {
            return `<li
        data-marker="${station.marker}"
        data-coords="${station.pcX}, ${station.pcY}" data-dir="${
                station.pcDir
            }" data-nearest="${station.data_nearest}" data-clicked="${
                station.data_clicked
            }"
        
        data-pclabel ="${station.pcLabelPos}"
        >
        <a href="#">${station ? station.statn_nm : ""}</a>
        </li>`;
        }
    });

const coda4 = () =>
    markers.map((station, i) => {
        if (i < 43) return;
        if (i === 43) {
            return `<li data-coords="4, 16.2"></li>`;
        } else if (i === 44) {
            return `<li data-coords="3, 16.2"></li>`;
        } else if (i === 45) {
            return `<li data-coords="2, 15" data-dir="W" data-customLabel="E">
</li>`;
        } else if (i > 45 && i < 49) {
            return `<li
        data-marker="${station.marker}"
        data-coords="${station.pcX}, ${station.pcY}" data-dir="${
                station.pcDir
            }" data-nearest="${station.data_nearest}" data-clicked="${
                station.data_clicked
            }"
           data-pclabel ="${station.pcLabelPos}"
        
        >
        <a href="#">${station ? station.statn_nm : ""}</a>
        </li>`;
        }
    });

const getHtmlText = () => {
    if ($(window).width() < 768) {
        const htmlText = `

    
    <div class="subway-map" data-columns="16" data-rows="24" data-cellSize="50" 
data-textClass="text" data-gridNumbers="true" data-grid="false" data-lineWidth="8">

    <ul class="trains"  data-textClass="trains">
${trainPosList.length ? MarkerHtml.join("") : ""}
</ul>
<ul data-color="#fff">
${lisMobile().join("")}
</ul>
<ul data-color="#fff">
${coda1().join("")}
</ul>
<ul data-color="#fff">
${coda2().join("")}
</ul>

</div>

`;

        return htmlText;
    } else {
        const htmlText = `
    
<div class="subway-map" data-columns="34" data-rows="21" data-cellSize="40" 
data-textClass="text" data-gridNumbers="true" data-grid="false" data-lineWidth="8">
  <ul class="trains" data-textClass="trains">
${trainPosList.length ? MarkerHtml.join("") : ""}
</ul>
<ul data-color="#fff">
    ${lisPc().join("")}
</ul>
<ul data-color="#fff">
    ${coda3().join("")}
</ul>
<ul data-color="#fff" >
    ${coda4().join("")}
</ul>


</div>`;
        return htmlText;
    }
};

let timeoutId = setTimeout(getTrainLocation, 0);

function update() {
    $("#wrap").html(getHtmlText());

    $(".subway-map").subwayMap({
        debug: true,
    });
    const h = $(window).height();
    const w = $(window).width();

    const zoomRate = Math.min(
        w / $("canvas").width(),
        h / $("canvas").height(),
        1
    );

    $("#wrap").css("zoom", zoomRate);

    const offset = $(`[data-info=${stationClicked}]`).offset();
    const pclabelpos = $(`[data-info=${stationClicked}]`).data("labeld");

    function transform(d) {
        switch (d) {
            case "N":
                return "translate(-50%, 10%)";
                break;
            case "S":
                return "translate(-50%, -110%)";
                break;
            case "W":
                return "translate(10%, -50%)";
                break;
            case "E":
                return "translate(-110%, -50%)";
                break;
            default:
                return "translate(-50%, -100%)";
                break;
        }
    }

    if (w < 768 && $(".popup").length) {
        $(".popup").css({
            left: `unset`,
            top: `unset`,
            transform: "unset",
            position: "fixed",
            bottom: 0,
        });
    } else if ($(".popup").length && w > 768) {
        $(".popup").css({
            left: `${Math.min(offset.left * zoomRate, offset.left)}px`,
            top: `${Math.min(offset.top * zoomRate, offset.top)}px`,
            transform: transform(pclabelpos),
        });
    }
}

async function getTrainLocation() {
    try {
        trainPosList.splice(0);

        const isMobile = $(window).width() <= 768;

        if (trainPosList.length !== 0) {
            trainPosList.splice(0, trainPosList.length);
        }

        clearTimeout(timeoutId);
     
        timeoutId = setTimeout(getTrainLocation, 4000); 

        const response = await fetch(
            `http://swopenAPI.seoul.go.kr/api/subway/5741755a566c6565313030767a67524a/json/realtimeStationArrival/ALL`,

            { method: "GET" }
        );

        const { realtimeArrivalList } = await response.json();

        /* 
        if (!realtimeArrivalList) return; */

        const line2Trains = realtimeArrivalList.filter((station, i) => {
            return station.subwayId === "1002";
        });

        const inlineTrains = [];
        const outlineTrains = [];
        line2Trains.forEach((train) => {
            if (train.updnLine === "내선") {
                const index = inlineTrains.findIndex((el) => {
                    return el.btrainNo === train.btrainNo;
                });

                if (index === -1) {
                    inlineTrains.push(train);
                }
            } else {
                const index = outlineTrains.findIndex((el) => {
                    return el.btrainNo === train.btrainNo;
                });

                if (index === -1) {
                    outlineTrains.push(train);
                }
            }
        });

        [...outlineTrains, ...inlineTrains].forEach((train, i) => {
            const statnId = train.statnId.slice(-4);

            if (statnId[0] !== "0" || statnId >= 2343) return;
            /*             if (statnId[0] !== "0") return; */

            const timeStation = line2.find(
                (station) => station.statn_id == statnId
            );

            const timeTaking = timeStation.toNextStation;
            const disRate = (timeTaking - train.barvlDt) / timeTaking;

            const stationT = markers.find((item) => item.statn_id === statnId);

            const nextStationI = "0" + (train.statnFid.slice(-4) - 0);

            const stationF = markers.find(
                (item) => item.statn_id === nextStationI
            );

            const pos = {
                trainNo: train.btrainNo,
                updnLine: train.updnLine,
                x: isMobile
                    ? stationF.x + (stationT.x - stationF.x) * disRate
                    : stationF.pcX + (stationT.pcX - stationF.pcX) * disRate,
                y: isMobile
                    ? stationF.y + (stationT.y - stationF.y) * disRate
                    : stationF.pcY + (stationT.pcY - stationF.pcY) * disRate,
            };

            trainPosList.push(pos);
        });
        MarkerHtml = trainPosList.map((train) => {
            if (train.updnLine === "내선") {
                return `<li data-coords="${train.x}, ${train.y}" data-marker="@train1"> </li>`;
            } else {
                return `<li data-coords="${train.x}, ${train.y}" data-marker="@train0"> </li>`;
            }
        });

        update();
    } catch (err) {
        console.log(err);
    }
}

//let name;

function onClickStation(name) {
    stationClicked = name.slice(
        0,
        name.indexOf("(") === -1 ? name.length : name.indexOf("(")
    );

    $(".popup").remove();

    const offset = $(`[data-info=${stationClicked}]`).offset();
    const windowWidth = $(window).width();

    const popupHtml =
        $(window).width() > 768
            ? `<div class="popup"  style="left:${Math.min(
                  (offset.left * windowWidth) / 1360,
                  offset.left
              )}px; top:${Math.min(
                  (offset.top * windowWidth) / 840,
                  offset.top
              )}px">`
            : '<div class="popup">';

    $("body").append(
        `${popupHtml}
            
            <button type="button" class='addS ${
                isFav(name) ? "added" : ""
            }' data-statn="${name}"><i class="fa-solid fa-star"></i></button>
            <h3>${name}</h3>
            <div class="popupbg"></div>
            
		 <div class="traindiv">
            <div class="train inline-train">
				<i class="fa-solid fa-location-dot"></i> 열차위치



				<div class="train-msg">
					&nbsp;
				</div>
				<span class="train-number"> <i class="fa-solid fa-train"></i> 외선 <span> </span> </span>
				<div class="congestion"> <span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
				</div>

				<div class="next-train"> &nbsp;</div>

			</div>


			<div class="train outline-train">
				<i class="fa-solid fa-location-dot"></i>



				<div class="train-msg">
					&nbsp;
				</div>
				<span class="train-number"> 내선 <i class="fa-solid fa-train"></i> <span> </span> </span>
				<div class="congestion"> <span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
					<span data-crowded="0">
						
					</span>
				</div>

				<div class="next-train"> &nbsp;</div>


			</div>
		 </div>
            
            </div>`
    );

    $(".addS").on("click", function () {
        if ($(this).is(".added")) {
            deleteFav(stationClicked);
        } else {
            addFav(stationClicked);

            useFavData();
        }

        $(this).toggleClass("added");
    });

    const clicked = markers.find((el) => {
        return el.statn_nm === stationClicked;
    });

    markers.forEach((marker, i) => {
        marker.data_clicked = "";
    });

    clicked.data_clicked = "clicked";

    update();

    updateArrivalData(stationClicked);
    addRecentSearch(stationClicked);
}

$("#wrap").on("click", ".subway-map a.text", function (e) {
    e.preventDefault();

    const name = $(this).data("info");

    onClickStation(name);

    return false;
});

$(window).on("resize load", function () {
    trainPosList.splice(0);
    update();

    if ($(window).width() < 768) {
        $("header").append($(".search-box"));
    } else {
        $(".btns").append($(".search-box"));
    }
});

$("#search-history-btn").on("click", function (e) {
    $(".search-history-wrapper").show();
    $(".favorites-wrapper").hide();
});

$("#fav-btn").on("click", function (e) {
    $(".search-history-wrapper").hide();
    $(".favorites-wrapper").show();
});

$(".slider").on("click", ".delete-li", function () {
    console.log("delte");

    let num = $(this).parent().index();
    recentSearch.splice(num, 1);
    localStorage.gdata = JSON.stringify(recentSearch);
    $(".slider .search-history-ul li").remove();
    usedata(recentSearch);
});

$(".slider-btn").on("click", function (e) {
    $(".slider").addClass("open");
    $(".slider").append('<div class="layer"> </div>');
});

$(".slider").on("click", ".layer", function (e) {
    $(".slider").removeClass("open");
});

$("#get-stations").on("click", getGeoPos);

function getGeoPos() {
    const options = {
        enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition((pos, _, options) => {
        const myPosX = pos.coords.longitude;
        const myPosY = pos.coords.latitude;

        markers.forEach((station) => {
            if (station) {
                station.distance =
                    (station.crdnt_x - myPosX) ** 2 +
                    (station.crdnt_y - myPosY) ** 2;
            }
        });

        const line2Sort = [...markers].sort(
            (stationA, stationB) => stationA.distance - stationB.distance
        );

        [line2Sort[0], line2Sort[1]].forEach((station) => {
            const nearest = markers.find((el) => {
                return el.station_id === station.statn_id;
            });

            nearest.data_nearest = "nearest";

            $(`[data-info="${station.statn_nm}"]`).addClass("nearest");
        });

        update();
    });
}

$("#search-input").on("input", (e) => {
    const value = e.target.value;
    const arr = [];

    line2.forEach((station, i) => {
        if (value.length !== 0) {
            const index = station.statn_nm.indexOf(value);
            if (index !== -1) {
                arr.push(station.statn_nm);
            }
        }
    });

    const htmlText = arr.map(
        (name) =>
            `<li>
       <input type="text" value="${name}" class="searched" disabled>
    </li>`
    );

    $(".search-result").html(htmlText.join(""));
});

localStorageInit();

// 추가
$(".search-result").on("mousedown", "input", function () {
    onClickStation($(this).val());
});

$(".slider").on("click", ".delete-fav-btn", function () {
    const value = $(this).siblings("input").val();

    deleteFav(value);
});

$("#mobile-search").on("click", function () {
    $(".search-box").toggleClass("show");
});


$(".search-box").on("click", function () {
    $(".searchbox2").show();
});
$(".mobile-search").on("click", function () {
    $(".searchbox2").hide();
});
$(".search_button").on("click", function () {
    $(".searchbox2").hide();
    $(this).addClass('on');
});
$(".logini").on("click", function () {
    $(".login_popup").show();
    $(this).addClass('on');
});
$(".loginbtn").on("click", function () {
    $(".login_popup").hide();
});
$('.pwpopup_btn').on('click', function(){
    $(".pw_popup").show();
})
$('.pwbtn').on('click', function(){
    $(".pw_popup").hide();
})
$('#wrap').on('click', function(){
    $(".login_popup").hide();
})
$('#wrap').on('click', function(){
    $(".searchbox2").hide();
})
$('#wrap').on('click', function(){
    $(".pw_popup").hide();
})
$('#wrap').on('click', function(){
    $(".popup").hide();
})
$(".nav > button").on("click", function () {
    $(this).addClass('on');
});
$(".pw_popup > div > button").on("click", function () {
    $(this).addClass('on');
});
$(".pw_popup > div > button").on("click", function () {
    $(this).addClass('on');
});

$("body").on("click", function (e) {
    console.log(e.target);
});

$(".favorites").on("click", "a", function () {
    onClickStation($(this).text().trim());
    return false;
});

$('.search-history').on('click', 'a', function() {
 

  
    onClickStation($(this).text().trim());

    return false

})


