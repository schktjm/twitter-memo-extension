import { useEffect } from "preact/hooks";

const canUseLocalStorage = () => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
};

const setMemo = (userId: string, text: string) => {
  console.log("setMemo", userId, text);
  localStorage.setItem(userId, text);
};

const getMemo = (userId: string) => {
  console.log("getMemo", userId);
  return localStorage.getItem(userId);
};

export const useDatabase = () => {
  useEffect(() => {
    if (!canUseLocalStorage()) {
      alert("LocalStorageが使えません");
    }
  }, []);

  return {
    setMemo,
    getMemo,
  };
};
