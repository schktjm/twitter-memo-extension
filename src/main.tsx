import { useMutationObserver } from "./lib/useMutationObserver";
import { h, render } from "preact";
import { App } from "./App";

console.log("on twitter");

const getDescriptionElement = () => {
  const className = ".css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv";
  const nodeLists = document.querySelectorAll(className);

  if (nodeLists.length > 0) {
    return nodeLists[0];
  }
};

const isUserProfileTitle = (title: string) => {
  const regexp = /.*[\(\uFF08]+@\w*[\)\uFF09].*/;
  return regexp.test(title);
};

const observeTitleTag = (callback: Function) => {
  const titleTag = document.head.getElementsByTagName("title")[0];

  const observeCallback = (records: MutationRecord[]) => {
    records.forEach((r) => {
      if (r.type === "childList") {
        callback();
      }
    });
  };

  useMutationObserver(titleTag, observeCallback);
};

const main = () => {
  const cb = () => {
    const title = document.head.getElementsByTagName("title")[0]?.textContent;
    if (!title || !isUserProfileTitle(title)) {
      return;
    }

    const descriptionElm = getDescriptionElement();
    if (!descriptionElm) {
      console.error("not found user profile area.");
      return;
    }

    const target = document.getElementById("user-memo");
    if (target) {
      return;
    }

    const reactElm = document.createElement("div");
    reactElm.setAttribute("id", "user-memo");
    descriptionElm.appendChild(reactElm);

    render(<App />, reactElm);
  };

  observeTitleTag(cb);
};

// 鍵垢だと title さえ undefined になるためちょっと待つ
setTimeout(() => {
  main();
}, 100);
