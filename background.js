// background.js

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   console.log({
//     tabId: tabId,
//     changeInfo: changeInfo,
//     tab: tab,
//     tabUrl: tab.url,
//     locationHref: location.href,
//     this: this,
//   });
//   if (
//     changeInfo.status === "complete" &&
//     tab.url.indexOf("https://twitter.com/") > -1
//   ) {
//     console.log(`updated: ${tab.url}`);
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       files: ["./dist/main.js"],
//     });
//   }
// });
