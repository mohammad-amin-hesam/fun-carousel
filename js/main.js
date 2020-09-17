function GetData() {}

// execute code when document is ready:
documentReady(function () {
  //=======================================
  // define new function for control returns.
  //=======================================
  (function () {
    const wrapper = get(".fun-carousel")[0];
    if (!wrapper) return;
    let wrapperWidth = wrapper.offsetWidth;

    window.onresize = function () {
      wrapperWidth = wrapper.offsetWidth;
      console.log(wrapper.offsetWidth);
    };
  })();
  //=======================================
});
