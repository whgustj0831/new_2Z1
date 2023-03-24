

const arrivalDataArr = [];
var result4;

console.log('hi')

/* const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get('statn_nm'); */


if ($('#wrap').is('.trainInfo')) {
/* 	const urlParams = new URLSearchParams(window.location.search);
	const greetingValue = urlParams.get('statn_nm'); */




	console.log(history)
	if (history.state) {
		
		const state = history.state.statn_nm
		const cur_statn_idx = line2.findIndex(station => station.statn_nm === state)

		result4 = state.slice(0, state.indexOf("(") === -1 ? state.length : state.indexOf("("));

		const slice = (str) => str.slice(0, str.indexOf("(") === -1 ? str.length : str.indexOf("("));

		$('.station-current').text(result4)
		$('.station-prev').text(slice(line2[cur_statn_idx - 1].statn_nm))

		$('.station-next').text(slice(line2[cur_statn_idx + 1].statn_nm))

	}

	getArrivalData()
	showLoader()



}




async function getArrivalData() {
	if (arrivalDataArr.length) {
		arrivalDataArr.splice(0, arrivalDataArr.length);
	}
	try {

		console.log('arrival')

		const response = await fetch(
			`http://swopenapi.seoul.go.kr/api/subway/46774250416c65653835766c785069/json/realtimeStationArrival/0/20/${result4}`,
			{ method: "GET" }
		);

		const { realtimeArrivalList } = await response.json();

		console.log(realtimeArrivalList)

		realtimeArrivalList.forEach((el) => {

			if (el.btrainNo.slice(0, 1) !== "6" && el.subwayId === "1002") {
				el.btrainNo = "2" + el.btrainNo.slice(1);
				arrivalDataArr.push(el);
			}
		});



		getCongestionData();


	} catch (err) {
		console.log(err);
	}
}

async function getCongestionData() {
	try {
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
		console.log(responses)
		const congestionData = await Promise.allSettled(


			responses.map((res) =>
				(res.status === 'fulfilled') ?
					res.value.json() : ''
			)
		);

		console.log(congestionData)

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

	$(".train").css('visibility', 'hidden');
	$(".container").append('<div class="loader-box"> <img src="img/train2.png" class="loader"> <div class="track"> </div> </div>')

}

function insertData(arrivalDataArr) {
	

	console.log(arrivalDataArr)

	function getLevel(number) {
		let level = 4;

		if (number < 0) {
			level = 0;
		}
		else if (number < 30) {
			level = 1;
		} else if (number < 50) {
			level = 2;
		} else if (number < 60) {
			level = 3;
		}

		return level;
	}



	[arrivalDataArr.filter(i => i.updnLine === "내선"), arrivalDataArr.filter(i => i.updnLine !== "내선")].forEach(line => {

		console.log(line)

		line[0].congestion = line[0].congestion || [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
		const congestionHtml = line[0].congestion.map(
			(number) =>
				` <span data-crowded='${getLevel(number)}'>
					${getLevel(number)}
					</span>`
		)

		const trainHtml = `
		<i class="fa-solid fa-location-dot"></i>
		
		${line[0].updnLine === "내선"
				? `
				
				<div  class='train-msg'>
				
				${line[0].arvlMsg3}  · 
				${line[0].arvlMsg2} ${line[0].arvlMsg2.slice(-2) !== " 후" ? "" : "도착"} </div>
						<span class='train-number'> <i class="fa-solid fa-train"></i> <span> ${line[0].btrainNo
				} </span> </span> `
				: `
					<div  class='train-msg'> ${line[0].arvlMsg3}  ·  ${line[0].arvlMsg2} ${line[0].arvlMsg2.slice(-2) !== " 후" ? "" : "도착"
				} 
				
				  </div>
				  <span class='train-number'>  <span> ${line[0].btrainNo
				} </span><i class="fa-solid fa-train"></i> </span>  
				 
				  `
			}
		<div class='congestion'>  ${congestionHtml.join("")}
		
	   </div>

	   <div class='next-train'>  ${line[1] ? '다음 열차 ·' + line[1].arvlMsg2 : '&nbsp; '}</div>
	   
	`;

		if (line[0].updnLine === "내선") {


			$(".inline-train").html(trainHtml);


		} else {


			$(".outline-train").html(trainHtml);


		}
	})

	$(".train").css('visibility', 'visible');

	$('.loader-box').remove() 


}




