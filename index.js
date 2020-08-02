function preloadImage(src) {
  return new Promise(resolve => {
    const img = document.createElement("img");
    img.onload = () => resolve(src);
    img.src = src;
  })
}