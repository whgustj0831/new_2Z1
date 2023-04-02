const arrivalDataArr = [];
/* var result4 = "강변"; */

console.log("sample");

let timerId;

let timeId00;

/* updateArrivalData(); */


export function updateArrivalData(stationClicked) {

    clearTimeout(timeId00);
    let i = 0;
    timeId00 = setTimeout(getArrivalData, 0);
    async function getArrivalData() {
        if (arrivalDataArr.length) {
            arrivalDataArr.splice(0, arrivalDataArr.length);
        }
        try {
            console.log("arrival");

            clearTimeout(timeId00);
            clearTimeout(timerId);

            const response = await fetch(
                `http://swopenapi.seoul.go.kr/api/subway/5741755a566c6565313030767a67524a/json/realtimeStationArrival/0/20/${stationClicked}`,
                { method: "GET" }
            );

            const { realtimeArrivalList } = await response.json();

            console.log(realtimeArrivalList);

            realtimeArrivalList.forEach((el) => {
                if (el.btrainNo.slice(0, 1) !== "6" && el.subwayId === "1002") {
                    el.btrainNo = "2" + el.btrainNo.slice(1);
                    arrivalDataArr.push(el);
                }
            });

            if (i === 0) {
                getCongestionData();
            } else {
                insertData(arrivalDataArr);
            }

            console.log(i, "nth-time");
            i = i + 1;
            /*        
    //정보 업데이트
    timeId00 = setTimeout(getArrivalData, 20000); */
        } catch (err) {
            console.log(err);
        }
    }
}

async function getCongestionData() {
    try {
        console.log("hi");
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                appkey: "WxRVdcwpU92Vv6qQh9s6c5moBazIJt0L5ckJxWFV",
                "x-cors-api-key": "temp_b6d5d3fa1419d3723d7e07b36d611fad",
                origin: `https://apis.openapi.sk.com/`,
            },
        };

        const requests = arrivalDataArr.map((data) =>
            fetch(
                `https://proxy.cors.sh/https://apis.openapi.sk.com/puzzle/congestion-train/rltm/trains/2/${data.btrainNo}`,
                /* 		`https://proxy.cors.sh/https://apis.openapi.sk.com/puzzle/congestion-train/rltm/trains/2/${data.btrainNo}`, */
                /* `https://cors-anywhere.herokuapp.com/https://apis.openapi.sk.com/puzzle/congestion-train/rltm/trains/2/${data.btrainNo}`, */
                options
            )
        );

        const responses = await Promise.allSettled(requests);
        console.log(responses);
        const congestionData = await Promise.allSettled(
            responses.map((res) =>
                res.status === "fulfilled" ? res.value.json() : ""
            )
        );

        console.log(congestionData);

        congestionData.forEach(({ value: { data } }) => {
            if (!data) {
                return;
            }

            const itemOfArrivalDataArr = arrivalDataArr.find(
                (el) => el.btrainNo === data.trainY
            );

            itemOfArrivalDataArr.congestion =
                data.congestionResult.congestionCar.split("|");
        });

        insertData(arrivalDataArr);
    } catch (err) {
        console.log(err);
    }
}

function showLoader() {
    $(".train").css("visibility", "hidden");
    $(".container").append(
        '<div class="loader-box"> <img src="img/train2.png" class="loader"> <div class="track"> </div> </div>'
    );
}

function insertData(arrivalDataArr) {
    /*     console.log(arrivalDataArr); */

    function getLevel(number) {
        let level = 4;

        if (number < 0) {
            level = 0;
        } else if (number < 30) {
            level = 1;
        } else if (number < 50) {
            level = 2;
        } else if (number < 60) {
            level = 3;
        }

        return level;
    }

    /*   	const outline =getTime(line[0].barvlDt - 0, line[0].updnLine); */

    const inlines = arrivalDataArr.filter((i) => i.updnLine === "내선");
    const outlines = arrivalDataArr.filter((i) => i.updnLine !== "내선");

    const timeData = {};
    arrivalDataArr.forEach((data, i) => {
        timeData[`${data.updnLine === "내선" ? "in" : "out"}` + `${i % 2}`] =
            data.barvlDt - 0;
    });
    /* 
    console.log(timeData); */

    getTime(timeData);

    [inlines, outlines].forEach((line) => {
        console.log(line);

        line[0].congestion = line[0].congestion || [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        ];
        const congestionHtml = line[0].congestion.map(
            (number) =>
                ` <span id="trainid" data-crowded='${getLevel(number)}'>
					</span>`
        );

        const trainHtml = `
		<i class="fa-solid fa-location-dot"></i>
		
		${
            line[0].updnLine === "내선"
                ? `
				
				<div  class='train-msg'>
				
				${line[0].arvlMsg3}  · 
				
				<span class='${line[0].updnLine === "내선" ? "in" : "out"}0'>  </span>
				</div>
						<span class='train-number'> <i class="fa-solid fa-train"></i> <span> ${
                            line[0].btrainNo
                        } </span> </span> `
                : `
					<div  class='train-msg'> ${line[0].arvlMsg3}  · <span class='${
                      line[0].updnLine === "내선" ? "in" : "out"
                  }0'>  
                  </span>
				
				  </div>
				  <span class='train-number'>  <span> ${
                      line[0].btrainNo
                  } </span><i class="fa-solid fa-train"></i> </span>  
				 
				  `
        }
		<div class='congestion'>  ${congestionHtml.join("")}
		
	   </div>

	   <div class='next-train'>  ${
           line[1]
               ? `다음 열차 · <span class='${
                     line[1].updnLine === "내선" ? "in" : "out"
                 }1'> </span>`
               : "&nbsp; "
       }</div>
	   
	`;

        if (line[0].updnLine === "내선") {
            $(".inline-train").html(trainHtml);
        } else {
            $(".outline-train").html(trainHtml);
        }
    });

    $(".train").css("visibility", "visible");

    $(".loader-box").remove();
}

function getTime(timeLeft) {
    /*  console.log(timeLeft); */
    clearTimeout(timerId);
    const timeleftObj = timeLeft;

    timerId = setTimeout(() => startClock(timeLeft), 1000);

    const printTime = (time) => {
        let min = Math.floor(time / 60);

        let sec = time % 60;

        let message;

        message = (min > 0 ? min + "분 " : "") + sec + "초";

        if (time < -1) {
            // 정보 다시 받아오기
            //  clearTimeout(timeId00);
            //updateArrivalData();
            return;
        } else if (time < 5) {
            message = "지금 도착";
        }

        return message;
    };

    function startClock() {
        for (const key in timeleftObj) {
            timeleftObj[key] = timeleftObj[key] - 1;

            $(`.${key}`).text(printTime(timeleftObj[key]));
        }
        /* 
        console.log(timeleftObj);
 */
        timerId = setTimeout(() => startClock(timeleftObj), 1000);
    }
}
