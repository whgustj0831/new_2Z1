var favId = 0;
var favData = [];

let RSid = 0;
let recentSearch = [];


export function localStorageInit() {
    if (localStorage.favData) {
        favData = JSON.parse(localStorage.favData);
        if (favData.length) {
            favId = favData[favData.length - 1]["id"];
        }
        useFavData(favData);
    }

    if (localStorage.recentSearch) {
        recentSearch = JSON.parse(localStorage.recentSearch);
        if (recentSearch) {
            RSid = recentSearch[recentSearch.length - 1]["id"];
        }
        usedata(recentSearch);
    }
}


export function addRecentSearch(stationToAdd) {
    RSid++;

    const obj = { id: RSid, text: stationToAdd };

    const isDup = recentSearch.findIndex(
        (station) => station.text === stationToAdd
    );

    if (isDup !== -1) {
        recentSearch.splice(isDup, 1);
    }

    recentSearch.push(obj);

    if (recentSearch.length > 5) {
        recentSearch.shift();
    }

    localStorage.recentSearch = JSON.stringify(recentSearch);

    usedata(recentSearch);
}

export function usedata(rdata) {
    $(".search-history").html("");
    const searchLis = rdata.map(
        (station) =>
            `<li>
                <a href="#">${station.text}</a>
            </li>`
    );
    $(".search-history").html(searchLis.join(""));
}

export function useFavData() {
    $(".favorites").html("");
    const favHtml = favData.map(
        (station) =>
            `<li>
                <a href="#">  ${station.text}  </a>
                <button type="button" class='delete-fav-btn' data-statn="${station.text}">삭제</button>
            </li>`
    );

    $(".favorites").html(favHtml.join(""));
}

export function deleteFav(stationTodelete) {

    const idx = favData.indexOf(
        (station) => station.text === stationTodelete
    );
    favData.splice(idx, 1);
    localStorage.favData = JSON.stringify(favData);

    useFavData(favData);
}


export const isFav = (name) => favData.some((station) => station.text === name);


export const addFav =(stationToadd) => {

    favId++;

    const obj = { id: favId, text: stationToadd };

    favData.push(obj);

    localStorage.favData = JSON.stringify(favData);

}

$('.allC').on('click', function(){
    localStorage.clear()
    favData = []
    useFavData(favData)
    return false
})