export const useMutationObserver = (
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
