let MarkerHtml;
const trainPosList = [];

const markers = line2.map((station, i) => {
    if (i < 4) {
        return {
            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 2 * i + 5,
            y: 3,
            statn_id: station.statn_id,
            marker: "",
            data_markerInfo: "",
            station_id: station.statn_id,
            data_clicked: false,
            data_mlabel: "N",
        };
    } else if (i < 21) {
        return {
            data_clicked: false,
            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 12,
            y: i,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "E",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "W",
        };
    } else if (i < 25) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: -(i * 2) + 53,
            y: 21,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "S",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "S",
        };
    } else if (i === 25) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: 20,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "E",
        };
    } else if (i < 42) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: ((-i + 26) * 16) / 17 + 19,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "E",
        };
    } else if (i === 42) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: 4,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "E",
        };
    } else if (i < 46) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 13,
            y: 12 + 40 - i,

            statn_id: station.statn_id,
            marker: "",
            data_dir: "E",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "E",
        };
    } else if (i < 50) {
        return {
            data_clicked: false,

            statn_nm: station.statn_nm.slice(
                0,
                station.statn_nm.indexOf("(") === -1
                    ? station.statn_nm.length
                    : station.statn_nm.indexOf("(")
            ),
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 3,
            y: 14 - 46 + i,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
            data_mlabel: "W",
        };
    }
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

line2.forEach((station, i) => {
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

/* const lisPc = line2.map((station, i) => {
    if (i < 10) {
        return `<li data-coords="${9 + i * 2}, 6"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i === 10) {
        return `<li data-coords=" 28, 7" data-dir="E">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 18) {
        return `<li data-coords=" 28, ${7 + ((i - 10) * 12) / 7}" data-dir="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i === 18) {
        return `<li data-coords="27, 20" data-dir="S">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 30) {
        return `<li data-coords="${
            27 - ((i - 18) * 22) / 12
        }, 20"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i === 30) {
        return `<li data-coords="5, 20"  data-dir="W">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i === 31) {
        return `<li data-coords="4, 19"  data-dir="W">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 40) {
        return `<li data-coords="4, ${(-(i - 40) * 12) / 9 + 7}"  data-dir="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i === 40) {
        return `<li data-coords="4, 7"  data-dir="N">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i === 41) {
        return `<li data-coords="5, 6"  data-dir="N">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 44) {
        return `<li data-coords="7, 6"  data-dir="W">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i === 44) {
        return `<li data-coords="9, 6"  data-dir="W">
   
        </li>`;
    }
}); */

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
data-textClass="text" data-gridNumbers="true" data-grid="yes" data-lineWidth="8">

    <ul class="trains" data-color="red" data-textClass="trains">
${trainPosList.length ? MarkerHtml.join("") : ""}
</ul>
<ul data-color="#82eca7" data-label="jQuery Widgets">
${lisMobile().join("")}
</ul>
<ul data-color="#82eca7">
${coda1().join("")}
</ul>
<ul data-color="#82eca7">
${coda2().join("")}
</ul>

</div>

`;

        return htmlText;
    } else {
        const htmlText = `
    
<div class="subway-map" data-columns="34" data-rows="21" data-cellSize="40" 
data-textClass="text" data-gridNumbers="true" data-grid="true" data-lineWidth="8">
  <ul class="trains" data-color="red" data-textClass="trains">
${trainPosList.length ? MarkerHtml.join("") : ""}
</ul>
<ul data-color="#82eca7" data-label="jQuery Widgets" >
    ${lisPc().join("")}
</ul>
<ul data-color="#82eca7">
    ${coda3().join("")}
</ul>
<ul data-color="#82eca7" >
    ${coda4().join("")}
</ul>


</div>`;
        return htmlText;
    }
};

update();

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

    console.log(pclabelpos);

    if(w < 768  && $(".popup").length) {
        $(".popup").css({
            left: `unset`,
            top: `unset`,
            transform: 'unset',
            position : 'fixed',
            bottom : 0
        });

    } else if ($(".popup").length && w > 768) {
        $(".popup").css({
            left: `${Math.min(offset.left * zoomRate, offset.left)}px`,
            top: `${Math.min(offset.top * zoomRate, offset.top)}px`,
            transform: transform(pclabelpos),
        });
    }
}

let timeoutId;

async function getTrainLocation() {
    try {
        const isMobile = $(window).width() <= 768;
        if (trainPosList.length !== 0) {
            trainPosList.splice(0, trainPosList.length);
        }

        clearTimeout(timeoutId);
        //   timeoutId = setTimeout(getTrainLocation, 10000)
        const response = await fetch(
            "http://swopenAPI.seoul.go.kr/api/subway/5741755a566c6565313030767a67524a/json/realtimePosition/0/100/2호선",

            { method: "GET" }
        );

        const { realtimePositionList } = await response.json();

        const lis = realtimePositionList.map((train, i) => {
            const statnId = train.statnId.slice(-4);

            const getNextStation = (station) => {
                let nextStation;
                if (station.updnLine === "0") {
                    nextStation = "0" + (statnId - 1 + 2);
                } else {
                    nextStation = "0" + (statnId - 1);
                }

                if (nextStation === "0200") {
                    nextStation = "0243";
                }

                if (nextStation === "0244") {
                    nextStation = "0201";
                }
                return nextStation;
            };

            const statn2Id = getNextStation(train);

            if (statnId.slice(0, 1) == 0) {
                const station = markers.find(
                    (item) => item.statn_id === statnId
                );
                const station2 = markers.find(
                    (item) => item.statn_id === statn2Id
                );

                console.log(station, station2);
                const pos = {
                    trainNo: train.trainNo,
                    updnLine: train.updnLine,
                    x: isMobile
                        ? (station.x + station2.x) / 2
                        : (station.pcX + station2.pcX) / 2,
                    y: isMobile
                        ? (station.y + station2.y) / 2
                        : (station.pcY + station2.pcY) / 2,
                };
                trainPosList.push(pos);
                console.log(trainPosList);
            }
        });

        MarkerHtml = trainPosList.map((train) => {
            if (train.updnLine === "0") {
                return `<li data-coords="${train.x}, ${train.y}" data-marker="@train1"> ${train.trainNo}</li>`;
            } else
                return `<li data-coords="${train.x}, ${train.y}" data-marker="@train0"> ${train.trainNo}</li>`;
        });

        update();
    } catch (err) {
        console.log(err);
    }
}

//timeoutId = setTimeout(getTrainLocation, 0)

let RSid = 0;
let recentSearch = [];

if (localStorage.recentSearch) {
    recentSearch = JSON.parse(localStorage.recentSearch);
    if (recentSearch) {
        RSid = recentSearch[recentSearch.length - 1]["id"];
    }
    usedata(recentSearch);
}

let name;

function onClickStation(name) {
    console.log(name);
    stationClicked = name.slice(
        0,
        name.indexOf("(") === -1 ? name.length : name.indexOf("(")
    );

    $(".popup").remove();

    const offset = $(`[data-info=${stationClicked}]`).offset();
    const windowWidth = $(window).width();

    //PC화면

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
            
            <button type="button" class='addS' data-statn="${name}"><i class="fa-solid fa-star"></i></button>
		 <div class="traindiv">
            <div class="train inline-train">
				<i class="fa-solid fa-location-dot"></i>



				<div class="train-msg">
					&nbsp;
				</div>
				<span class="train-number"> <i class="fa-solid fa-train"></i> <span> </span> </span>
				<div class="congestion"> <span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
				</div>

				<div class="next-train"> &nbsp;</div>

			</div>


			<div class="train outline-train">
				<i class="fa-solid fa-location-dot"></i>



				<div class="train-msg">
					&nbsp;
				</div>
				<span class="train-number"> <i class="fa-solid fa-train"></i> <span> </span> </span>
				<div class="congestion"> <span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
					<span data-crowded="0">
						0
					</span>
				</div>

				<div class="next-train"> &nbsp;</div>


			</div>
		 </div>
            
            </div>`
    );

    $(".addS").on("click", function () {
        const statn = $(this).data("statn");

        favId++;

        const obj = { id: favId, text: stationClicked };

        favData.push(obj);

        localStorage.favData = JSON.stringify(favData);

        useFavData(favData);
    });

    const clicked = markers.find((el) => {
        return el.statn_nm === stationClicked;
    });
    markers.forEach((marker, i) => {
        marker.data_clicked = "";
    });

    clicked.data_clicked = "clicked";

    console.log(markers);

    update();

    updateArrivalData(stationClicked);
}

$("#wrap").on("mousedown", ".subway-map a.text", function (e) {
    e.preventDefault();

    const name = $(this).data("info");

    console.log(name);

    onClickStation(name);
    RSid++;

    const obj = { id: RSid, text: stationClicked };

    recentSearch.push(obj);
    if (recentSearch.length > 5) {
        recentSearch.shift();
    }

    localStorage.recentSearch = JSON.stringify(recentSearch);

    usedata(recentSearch);

    return false;
});

update();
$(window).on("load", function () {
    trainPosList.splice(0);

    if ($(window).width() < 768) {
        $("header").append($(".search-box"));
    } else {
        $(".btns").append($(".search-box"));
    }

    update();
});

$(window).on("resize", function () {
    trainPosList.splice(0);

    if ($(window).width() < 768) {
        $("header").append($(".search-box"));
    } else {
        $(".btns").append($(".search-box"));
    }
    update();
});

function usedata(rdata) {
    $(".search-history").html("");
    const searchLis = rdata.map(
        (station) =>
            `<li>
<a href="#">${station.text}</a>
</li>
               `
    );

    $(".search-history").html(searchLis.join(""));
}

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
});

$(".slider").on("click", ".layer", function (e) {
    console.log("hi");
    $(".slider").removeClass("open");
});

$("#get-stations").on("click", getGeoPos);

function getGeoPos() {
    let myPosX = 0;
    let myPosY = 0;

    const options = {
        enableHighAccuracy: true,
    };

    //37.584896, longitude: 126.9366784,
    navigator.geolocation.getCurrentPosition((pos, _, options) => {
        myPosX = pos.coords.longitude;
        myPosY = pos.coords.latitude;

        const markers2 = [...markers].slice(0, 43);
        console.log(markers);

        console.log(pos.coords, myPosX, myPosY);

        console.log(
            `https://www.openstreetmap.org/#map=18/${myPosX}/${myPosY}`
        );
        $("#map-link").attr(
            "href",
            `https://www.openstreetmap.org/#map=18/${myPosX}/${myPosY}`
        );

        markers2.forEach((station) => {
            if (station) {
                station.distance =
                    (station.crdnt_x - myPosX) ** 2 +
                    (station.crdnt_y - myPosY) ** 2;
            }
        });

        console.log(markers);

        const line2Sort = [...markers];
        line2Sort.sort(
            (stationA, stationB) => stationA.distance - stationB.distance
        );

        console.log(line2Sort);
        const firstStation = line2Sort[0].statn_id;
        const firstStationNm = line2Sort[0].statn_nm;

        const secondStation = line2Sort[1].statn_id;
        const secondStationNm = line2Sort[1].statn_nm;

        console.log(firstStation);

        const nearest1 = markers2.findIndex((el) => {
            console.log(
                el.station_id,
                firstStation,
                el.station_id === firstStation
            );
            return el.station_id === firstStation;
        });

        console.log(nearest1);

        const nearest2 = markers2.findIndex((el) => {
            return el.station_id === secondStation;
        });

        /*      console.log(firstStation, secondStation, nearest1, nearest2) */

        markers[nearest1].data_nearest = "nearest";
        markers[nearest2].data_nearest = "nearest";

        /*    markers[nearest2].data_markerInfo = "nearest";  */

        update();

        $(`[data-info="${firstStationNm}"]`).addClass("nearest");
        $(`[data-info="${secondStationNm}"]`).addClass("nearest");
    });
}

$("#search-input").on("input", (e) => {
    let value = e.target.value;

    if (value.length === 0) return;
    let arr = [];
    line2.forEach((station, i) => {
        const index = station.statn_nm.indexOf(value);
        if (index !== -1) {
            console.log(index, station.statn_nm);
            arr.push(station.statn_nm);
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

var favId = 0;
var favData = [];

if (localStorage.favData) {
    favData = JSON.parse(localStorage.favData);
    if (favData.length) {
        favId = favData[favData.length - 1]["id"];
    }
    useFavData(favData);
}

console.log(favData);
// 추가
$(".search-result").on("mousedown", "input", function () {
    onClickStation($(this).val());
});

function useFavData(favData) {
    console.log(favData);
    $(".favorites").html("");
    const favHtml = favData.map(
        (station) =>
            `<li>
                <input type="text" value="${station.text}" disabled>
                <button type="button" class='delete-fav-btn' data-statn="${station.text}">삭제</button>
            </li>`
    );

    console.log(favHtml);

    $(".favorites").html(favHtml.join(""));
}

$(".slider").on("click", ".delete-fav-btn", function () {
    let num = $(this).parent().index();
    favData.splice(num, 1);
    localStorage.favData = JSON.stringify(favData);

    useFavData(favData);
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
});

$(".logini").on("click", function () {
    $(".login_popup").show();
});
$(".loginbtn").on("click", function () {
    $(".login_popup").hide();
});

$(".search-history").on("click", "a", function (e) {
    console.log(e.target, "inSearchHistroy");
    onClickStation($(this).text());
    return false;
});

$("body").on("click", function (e) {
    console.log(e.target);
});
