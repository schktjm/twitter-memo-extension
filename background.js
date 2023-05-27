// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log({
    tabId: tabId,
    changeInfo: changeInfo,
    tab: tab,
    tabUrl: tab.url,
    locationHref: location.href,
  });
  if (
    changeInfo.status === "complete" &&
    tab.url.indexOf("https://www.google.com/") > -1
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["./dist/main.js"],
    });
  }
});
