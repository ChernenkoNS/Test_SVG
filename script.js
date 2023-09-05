const imageArea = document.querySelector(".image-container");
const imageElement = document.querySelector(".image");

window.addEventListener("mousemove", (event) => {
  const containerRect = imageArea.getBoundingClientRect();
  const containerRect1 = imageElement.getBoundingClientRect();

  const containerRectWidth = containerRect.width;
  const containerRectWidth1 = containerRect1.width;

  const containerRectHeight = containerRect.height;
  const containerRectHeight1 = containerRect1.height;

  const equalizationFactor = 15;

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

  const coordinatesX = mouseX / widthRatio;
  const coordinatesY = mouseY / heightRatio;

  imageElement.style.x = "240";
  imageElement.style.y = "165";

  imageElement.style.transform = `translate(${coordinatesX}px   , ${coordinatesY}px)`;
});

