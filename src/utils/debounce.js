export const debounceFunc = () => {
  let timeOut = null;
  return (callBack, wait) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callBack();
    }, wait);
  };
};
export const debounce = debounceFunc();
