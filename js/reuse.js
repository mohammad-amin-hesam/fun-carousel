const addClass = function (el, className) {
  el.classList.add(className);
};

const removeClass = function (el, className) {
  el.classList.remove(className);
};

const get = function (query) {
  return document.querySelectorAll(query);
};

const hasClass = function (el, className) {
  return el.classList.contains(className);
};

function documentReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
