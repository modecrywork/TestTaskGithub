const debounce = (callback, delay) => {
  let timeout;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    callback();
  }, delay);
};

export default debounce;
