let color = "#db0d0d";

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log(`Color to mark ad set to ${color}`);
})