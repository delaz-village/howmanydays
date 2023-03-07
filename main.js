//  共通部品
let text;
let theDay;
let now = moment();
let stopper = setInterval(timer, 1000);

function timer() {
	now = moment();
	let days = theDay.diff(now, "days");
	let hours = theDay.diff(now, "hours") % 24;
	let minutes = theDay.diff(now, "minutes") % 60;
	let seconds = theDay.diff(now, "seconds") % 60;
	textLine.textContent = `${text}まであと${days}日${hours}時間${minutes}分${seconds}秒`;
}


//  基本課題
/*
const body = document.getElementsByTagName("body")[0];
const textLine = document.createElement("p");
body.appendChild(textLine);

text = "ドラえもんが生まれる";
theDay = moment('2112-09-03 12:00:00');
*/


//  追加チャレンジ

const dateSet = document.getElementById("dateSet");
const dateSearch = document.getElementById("dateSearch");
const textLine = document.getElementById("diffTime");
clearInterval(stopper);

dateSearch.addEventListener("click", btn);
function btn() {
	stopper = setInterval(timer, 1000);
	let set = dateSet.value;
	theDay = moment(set);
	text = theDay.format("YYYY-MM-DD");
}


