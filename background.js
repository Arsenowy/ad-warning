let color = "#db0d0d";
let status = false;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log(`Color to mark ad set to ${color}`);
    chrome.storage.sync.set({ status });
})

