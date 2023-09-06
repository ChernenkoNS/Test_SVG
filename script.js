const imageArea = document.querySelector(".image-container");
const imageElement = document.querySelector(".image");

window.addEventListener("mousemove", (event) => {
  imageElement.style.transform = `translate(240px , 165px)`;

  const containerImageArea = imageArea.getBoundingClientRect();
  const containerImageElement = imageElement.getBoundingClientRect();

  const containerRectWidth = containerImageArea.width;
  const containerRectWidth1 = containerImageElement.width;

  const containerRectHeight = containerImageArea.height;
  const containerRectHeight1 = containerImageElement.height;

  const equalizationFactor = 20;

  const containerWidthDelta =
    containerRectWidth - containerRectWidth1 - equalizationFactor;
  const containerHeightDelta =
    containerRectHeight - containerRectHeight1 - equalizationFactor;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const widthRatio = windowWidth / containerWidthDelta;
  const heightRatio = windowHeight / containerHeightDelta;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const coordinatesX = mouseX / widthRatio + 240;
  const coordinatesY = mouseY / heightRatio + 165;

  imageElement.style.transform = `translate(${coordinatesX}px   , ${coordinatesY}px)`;
});
