export const dispatchEvent = (eventName, detail) => {
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
};

export const addEventListener = (eventName, callback) => {
  const handler = (event) => callback(event.detail);
  window.addEventListener(eventName, handler);
};

export const removeEventListener = (eventName, callback) => {
  const handler = (event) => callback(event.detail);
  window.removeEventListener(eventName, handler);
};
