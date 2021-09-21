const changeColor = document.getElementById("markingColor");
const turnOnOffButton = document.getElementById("turnOnOffButton");
const submitButton = document.querySelector('#submitButton');

//on init
chrome.storage.sync.get("color", ({ color }) => {
    changeColor.value = color;
})
chrome.storage.sync.get("onOffButton", ({ onOffButton }) => {
    turnOnOffButton.checked = onOffButton;
})

function handleColor(e) {
    const color = e.target.value;
    chrome.storage.sync.set({ color });
    changeColor.value = color;
}
function turnOnOff(e) {
    const onOffButton = e.target.checked;
    chrome.storage.sync.set({ onOffButton });
    turnOnOffButton.checked = onOffButton;
}
// reload button
(function() {
    submitButton.addEventListener('click', () => {
        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
            chrome.tabs.reload(arrayOfTabs[0].id);
        });
    })
})()


changeColor.addEventListener("change", handleColor);
turnOnOffButton.addEventListener("change", turnOnOff);
