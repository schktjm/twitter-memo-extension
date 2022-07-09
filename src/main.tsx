console.log("on twitter");

const getDescriptionElement = () => {
  const className = ".css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv";
  const nodeLists = document.querySelectorAll(className);

  if (nodeLists.length > 0) {
    console.log(nodeLists[0]);
    return nodeLists[0];
  }
};

// TODO: 実行時に要素がなかったりするからこうしてるけど body を監視した方がいいかも
const cronGetElement = (): Promise<Element | undefined> =>
  new Promise((resolve) => {
    const intervalId = setInterval(() => {
      const descriptionElm = getDescriptionElement();

      if (descriptionElm) {
        console.log("find!");
        resolve(descriptionElm);
        clearInterval(intervalId);
      }
    }, 1000);
  });

const isUserProfileTitle = (title: string) => {
  const regexp = /.*[\(\uFF08]+@\w*[\)\uFF09].*/; // ユーザープロフィールページかどうか
  return regexp.test(title);
};

const useMutationObserver = (
  targetElm: Element,
  callback: (records: MutationRecord[], observer: MutationObserver) => void,
  config?: MutationObserverInit
) => {
  const observer = new MutationObserver(callback);

  const defaultConfig = {
    childList: true,
    attributes: true,
  };

  observer.observe(targetElm, { ...defaultConfig, ...config });
};

const observeTitleTag = (callback: Function) => {
  const titleTag = document.head.getElementsByTagName("title")[0];

  const observeCallback = (records: MutationRecord[]) => {
    records.forEach((r) => {
      console.log(r.type);
      if (r.type === "childList") {
        callback();
      }
    });
  };

  useMutationObserver(titleTag, observeCallback);
};

const main = async () => {
  const cb = async () => {
    const title = document.head.getElementsByTagName("title")[0]?.textContent;
    if (!title || !isUserProfileTitle(title)) {
      return;
    }
    console.log("突破", title);

    const descriptionElm = await cronGetElement();
    console.log("await", descriptionElm);
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
  };

  observeTitleTag(cb);
};

// 鍵垢だと title さえ undefined になるためちょっと待つ
setTimeout(() => {
  main();
}, 100);
