let color = "#db0d0d";
let onOffButton = true;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    chrome.storage.sync.set({ onOffButton });
    console.log(`Color to mark ad set to ${color}`);
})

