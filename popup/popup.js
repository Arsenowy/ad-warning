const changeColor = document.getElementById("markingColor");
const turnOnOffButton = document.getElementById("turnOnOffButton");

//on init
chrome.storage.sync.get("color", ({ color }) => {
    changeColor.value = color;
})
chrome.storage.sync.get("status", ({ status }) => {
    turnOnOffButton.checked = status;
})

function handleColor(e) {
    const color = e.target.value;
    chrome.storage.sync.set({ color });
    changeColor.value = color;
}
function turnOnOff(e) {

    const status = e.target.checked;
    chrome.storage.sync.set({ status });
    turnOnOffButton.checked = status;

}

changeColor.addEventListener("change", handleColor);
turnOnOffButton.addEventListener("change", turnOnOff);

