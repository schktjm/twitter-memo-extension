console.log("on twitter");

const getDescriptionElement = () => {
  const className = ".css-1dbjc4n.r-1ifxtd0.r-ymttw5.r-ttdzmv";
  const nodeLists = document.querySelectorAll(className);

  if (nodeLists.length > 0) {
    console.log(nodeLists[0]);
    return nodeLists[0];
  }
};

const cronGetElement = (): Promise<Element | undefined> =>
  new Promise((resolve) => {
    const intervalId = setInterval(() => {
      const descriptionElm = getDescriptionElement();

      if (descriptionElm) {
        console.log("find!");
        resolve(descriptionElm);
        clearInterval(intervalId);
      }
      console.log("not found");
    }, 1000);
  });

const main = async () => {
  const title = document.head.getElementsByTagName("title")[0]?.textContent;
  const regexp = /.*[\(\uFF08]+@\w*[\)\uFF09].*/; // ユーザープロフィールページかどうか
  if (!(title && title.match(regexp))) {
    return;
  }
  console.log("突破", title);

  const descriptionElm = await cronGetElement();
  console.log("await", descriptionElm);
  if (!descriptionElm) {
    console.error("not found user profile area.");
    return;
  }
  console.log("description", descriptionElm);

  const reactElm = document.createElement("div");
  reactElm.setAttribute("id", "user-memo");
  const accept = descriptionElm.appendChild(reactElm);
  console.log(accept);
};

main();
