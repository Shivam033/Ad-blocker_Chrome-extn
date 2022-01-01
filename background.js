const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]
let checked = false;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

function checkMe(){
	let tog = document.querySelector(".slider");
	tog.addEventListener("click", function () {
	if(checked==true){
		checked=false
	}else{
		checked=true
	}
		let text = document.querySelector(".tog2");
		let text2 = document.querySelector(".tog1");
	
		if(checked){
		  text.style.display="block";
		  text2.style.display="none";
		  chrome.webRequest.onBeforeRequest.addListener();
		}else {
		  text.style.display="none";
		  text2.style.display="block";
		}
	})
}
checkMe();