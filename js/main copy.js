let MarkerHtml;
const trainPosList = [];

const markers = line2.map((station, i) => {
    if (i < 4) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,

            x: 2 * i + 5,
            y: 2,
            statn_id: station.statn_id,
            marker: "",
            data_markerInfo: "",
            station_id: station.statn_id,
        };
    } else if (i < 21) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 12,
            y: i - 1,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "E",
            data_fav: false,
            station_id: station.statn_id,
        };
    } else if (i < 25) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: -(i * 2) + 53,
            y: 20,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "S",
            data_fav: false,
            station_id: station.statn_id,
        };
    } else if (i === 25) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: 19,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
        };
    } else if (i < 42) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: ((-i + 26) * 16) / 17 + 18,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
        };
    } else if (i === 42) {
        return {
            statn_nm: station.statn_nm,
            crdnt_x: station.crdnt_x - 0,
            crdnt_y: station.crdnt_y - 0,
            x: 4,
            y: 3,
            statn_id: station.statn_id,
            marker: "",
            data_dir: "W",
            data_fav: false,
            station_id: station.statn_id,
        };
    }
});

console.log(markers);

const lisMobile = () =>
    markers.map((station, i) => {
        if (i < 43) {
            return `<li
data-marker="${station.marker}"
data-coords="${station.x}, ${station.y}" data-dir="${
                station.data_dir
            }" data-markerInfo="${station.data_markerInfo}">
<a href="#">${station ? station.statn_nm : ""}</a>
</li>`;
        } else if (i === 43) {
            return `<li data-coords="5,2">
    
        </li>`;
        }

        /*
       if (i < 4) {
            return `<li
    data-marker="${station.marker}"
    data-coords="${2 * i + 5}, 2" data-labelpos="N">
    <a>${station ? station.statn_nm : ''}</a>
    </li>`

        } else if (i < 21) {
            return `<li data-marker="${station.marker}" data-coords="12, ${i - 1}" data-dir="E" data-labelpos="W">
            <a >${station ? station.statn_nm : ''}</a>
            </li>`


        } else if (i < 25) {
            return `<li data-marker="${station.marker}" data-coords="${-(i * 2) + 53}, 20" data-dir="S" data-labelpos="S">
            <a >${line2[i] ? line2[i].statn_nm : ''}</a>
            </li>`
        } else if (i === 25) {
            return `<li data-marker="${station.marker}" data-coords="4,19" data-dir="W" data-labelpos="E">
         <a >${station ? station.statn_nm : ''}</a>
            </li>`
        } else if (i < 42) {
            return `<li data-marker="${station.marker}" data-coords="4, ${(-i + 26) * 16 / 17 + 18}" data-dir="W" data-labelpos="E">
             <a >${station ? station.statn_nm : ''}</a>
            </li>`
        } else if (i === 42) {
            return `<li data-marker="${station.marker}" data-coords="4,3" data-dir="W" data-labelpos="E">
            <a >${station ? station.statn_nm : ''}</a>
            </li>`
        } else if (i < 44) {
            return `<li data-coords="5,2">

            </li>`
        }
    */
    });

const coda1 = line2.map((station, i) => {
    if (i === 41) {
        return `<li data-coords="12, 9"></li>`;
    }
    if (i > 42 && i < 46) {
        return `<li data-marker="${station.marker}" data-coords="13, ${
            11 + 40 - i
        }" data-dir="E" data-labelpos="E">
   <a >${station ? station.statn_nm : ""}</a>
</li>`;
    }
});

const coda2 = line2.map((station, i) => {
    if (i === 46) {
        return `<li data-coords="4, 11"></li>`;
    }
    if (i > 46) {
        return `<li data-marker="${station.marker}" data-coords="3, ${
            11 - 46 + i
        }" data-dir="W" data-labelpos="W">
   <a >${station ? station.statn_nm : ""}</a>
</li>`;
    }
});

const lisPc = line2.map((station, i) => {
    if (i < 10) {
        return `<li data-coords="${23 + i * 3}, 10"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 14) {
        return `<li data-coords=" 51, ${11 + (i - 10) * 2.5}" data-dir="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 19) {
        return `<li data-coords=" 51, ${11 + (i - 10) * 2.5}" data-dir="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 31) {
        return `<li data-coords="${50 - (i - 19) * 3}, 32"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 40) {
        return `<li data-coords="16, ${16.2 - (i - 37) * 2.4}"  data-dir="W">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 43) {
        return `<li data-coords="${15 + (i - 39) * 2}, 10"  data-dir="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const coda3 = line2.map((station, i) => {
    if (i === 41) {
        return `<li data-coords="51, 12"></li>`;
    }
    if (i > 42 && i < 46) {
        return `<li data-coords="${
            (60 - i) * 3
        },7" data-dir="E" data-labelpos="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const coda4 = line2.map((station, i) => {
    if (i === 46) {
        return `<li data-coords="16, 26"></li>`;
    }
    if (i > 46) {
        return `<li data-coords="13, ${
            26 + (47 - i) * 3
        }" data-dir="W" data-labelpos="W">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const getHtmlText = () => {
    if ($(window).width() < 768) {
        const htmlText = `
     <div id="map-wrapper">
    


    <div class="subway-map" data-columns="16" data-rows="24" data-cellSize="50" data-legendId="legend"
data-textClass="text" data-gridNumbers="true" data-grid="yes" data-lineWidth="8">

    <ul class="trains" data-color="red">
${trainPosList.length ? MarkerHtml.join("") : ""}
</ul>
<ul data-color="#82eca7" data-label="jQuery Widgets">
${lisMobile().join("")}
</ul>
<ul data-color="#82eca7">
${coda1.join("")}
</ul>
<ul data-color="#82eca7">
${coda2.join("")}
</ul>

</div>
</div>
`;

        return htmlText;
    } else {
        const htmlText = `
         <div id="map-wrapper">
<div class="subway-map" data-columns="62" data-rows="40" data-cellSize="24" data-legendId="legend"
data-textClass="text" data-gridNumbers="true" data-grid="true" data-lineWidth="8">
<ul data-color="#82eca7" data-label="jQuery Widgets" data-shiftCoords="-3,0">
    ${lisPc.join("")}
</ul>
<ul data-color="#82eca7" data-shiftCoords="-3,0">
    ${coda3.join("")}
</ul>
<ul data-color="#82eca7" data-shiftCoords="-3,0">
    ${coda4.join("")}
</ul>
<ul data-color="#82eca7" data-shiftCoords="-3,0">
    <li data-coords="21,10"></li>
    <li data-coords="23,10"></li>
</ul>
</div>
</div>`;
        return htmlText;
    }
};

function update() {
    if ($("#wrap").is(".main")) {
        $("#wrap").html("");
        $("#wrap").html(getHtmlText());

        $(".subway-map").subwayMap({
            debug: true,
        });

        if ($(window).width() < 1249) {
            $(".subway-map").css(
                "zoom",
                $(window).width() / $("canvas").width()
            );
        }
    }
}

update();

let timeoutId;

async function getTrainLocation() {
    try {
        if (!$("#wrap").is(".main")) return;

        if (trainPosList.length !== 0) {
            trainPosList.splice(0, trainPosList.length);
        }
        console.log("NEW");

        clearTimeout(timeoutId);
        /*   timeoutId = setTimeout(getTrainLocation, 4000)*/
        const response = await fetch(
            "http://swopenAPI.seoul.go.kr/api/subway/5741755a566c6565313030767a67524a/json/realtimePosition/0/100/2호선",

            { method: "GET" }
        );

        const { realtimePositionList } = await response.json();

        console.log(realtimePositionList);

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
                    x: (station.x + station2.x) / 2,
                    y: (station.y + station2.y) / 2,
                };
                trainPosList.push(pos);
            }
        });
        //         console.log(realtimePositionList)
        //         const lis = realtimePositionList.map((train, i )=>{
        //
        //
        //
        //
        //
        //             `<li data-coords="${2 * i + 5}, 2" data-labelpos="N">
        // <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${line2[i] ? line2[i].statn_nm : ''}</a>
        // </li>`
        //         })
        //         console.log(lis)

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
/* timeoutId = setTimeout(getTrainLocation, 10000); */

window.onresize = () => {
    update();
};

let RSid = 0;
let recentSearch = [];

if (localStorage.recentSearch) {
    recentSearch = JSON.parse(localStorage.recentSearch);
    if (recentSearch) {
        RSid = recentSearch[recentSearch.length - 1]["id"];
    }
}

$("#wrap").on("mousedown", ".subway-map a.text", function (e) {
    e.preventDefault();

    if (e.which === 1) {
        $(this).addClass("clicked");
        $(this).siblings().removeClass("clicked");
        $(".popup").remove();

        const name = $(this).data("info");

        const offset = $(this).offset();
        const windowWidth = $('body').width();
        const windowHeight = $('body').height();



        $("body").append(
            `<div class="popup" style="left:${
                offset.left * windowWidth/800
            }px; top:${offset.top  * windowWidth/800  }px"> 
            
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
		
            
            </div>`
        );

        stationClicked = name.slice(
            0,
            name.indexOf("(") === -1 ? name.length : name.indexOf("(")
        );
        updateArrivalData(stationClicked);
    } else if (e.which === 3) {
        $(this).addClass("favorite");
        $(this).siblings().removeClass("clicked");
        $(".popup").remove();

        const name = $(this).data("info");
        const fav = markers.find((el) => el.statn_nm == name);

        fav.data_markerInfo = "fav";

        console.log(name);

        console.log(name);
    }

    /*    const statn_nm = $(this).text().slice(1, -1).trim()


        RSid++

        const obj = {id: RSid, text: statn_nm}
        console.log(recentSearch)
        recentSearch.push(obj)
        if (recentSearch.length > 5) {
            recentSearch.shift()

        }

        console.log(recentSearch)

        localStorage.recentSearch = JSON.stringify(recentSearch)


        console.log(statn_nm)*/
    return false;
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

        markers[nearest1].data_markerInfo = "nearest";
        markers[nearest2].data_markerInfo = "nearest";

        /*    markers[nearest2].data_markerInfo = "nearest";  */

        $(`[data-info="${firstStationNm}"]`).addClass("nearest");
        $(`[data-info="${secondStationNm}"]`).addClass("nearest");
    });
}

$("#notification").on("click", getNotification);

window.onload = getNotification();
async function getNotification() {
    try {
        console.log("hi");

        const response = await fetch(
            `http://apis.data.go.kr/B553766/smt-delay/delay?serviceKey=pKDkS%2FXdX%2FQv4gjE0ZhkAW3uYQRWVtB1HlfzpGzGInft6B8vyTDYHVx1wr4yDKAnqeY70hUzHFrxs%2FcyW4HENQ%3D%3D&numOfRows=100&pageNo=1&lineNum=2`,
            { method: "GET" }
        );

        const { data } = await response.json();

        const delayData = [];
        data.forEach((item) => {
            if (item.delay_rsn === null) {
                delayData.push(item);
            }
        });

        const lis = delayData.map(
            (item) =>
                `<li> ${item.train_state} <button class='remove-notification'> X</button> </li>`
        );

        const notificationHtml = `
        ${lis.join("")}
        
        `;

        $("#notification-box").html("").append(notificationHtml);

        /* 		getCongestionData();
         */
    } catch (err) {
        console.log(err);
    }
}

$("#notification-box").on("click", "button.remove-notification", function () {
    $(this).parent().remove();
});
