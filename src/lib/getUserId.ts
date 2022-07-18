export const getUserId = () => {
  const pathname = window.location.pathname;
  const userId = pathname.split("/")[1];
  return userId;
};
