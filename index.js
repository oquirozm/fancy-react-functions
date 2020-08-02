import React from "react";

function preloadImage(src) {
  return new Promise(resolve => {
    const img = document.createElement("img");
    img.onload = () => resolve(src);
    img.src = src;
  })
}

function preloadableLazy(dynamicImport) {
  let promise;

  function load() {
    if (!promise) {
      promise = dynamicImport();
    }
    return promise;
  }

  const Comp = React.lazy(load);
  Comp.preload = load;
  return Comp;
}
