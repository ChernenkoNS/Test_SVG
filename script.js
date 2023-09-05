







const imageArea = document.querySelector(".scroll-container");
const imageElement = document.querySelector(".image");

window.addEventListener("mousemove", (event) => {
  const containerRect = imageArea.getBoundingClientRect();
  const containerRect1 = imageElement.getBoundingClientRect();

  const containerRectWidth = containerRect.width
  const containerRectWidth1 = containerRect1.width

  const containerRectHeight = containerRect.height
  const containerRectHeight1 = containerRect1.height

const containerWidthDelta = containerRectWidth - containerRectWidth1
const containerHeightDelta = containerRectHeight - containerRectHeight1


  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const widthRatio = windowWidth /  containerWidthDelta
  const heightRatio = windowHeight /  containerHeightDelta



  
  
  
  
  const  mouseX = event.clientX;
  const mouseY = event.clientY;

  const coordinatesX = mouseX / widthRatio 
  const coordinatesY = mouseY / heightRatio 



  




  //   const maxX = (containerRect.width - containerRect1.width) / 2 ;
  //   const maxY = (containerRect.height - containerRect1.height) / 2;

  // const maxX = 11;
  // const maxY = 15;

  // const clampedX = Math.min(
  //   maxX,
  //   Math.max(-maxX, mouseX - containerRect1.width / 2)
  // );
  // const clampedY = Math.min(
  //   maxY,
  //   Math.max(-maxY, mouseY - containerRect1.height / 2)
  // );

  // const imageXPercent = (clampedX / containerRect.width) * 100;
  // const imageYPercent = (clampedY / containerRect.height) * 100;

  imageElement.style.transform = `translate(${coordinatesX}px   , ${coordinatesY}px)`;
});














// const pupil = document.getElementById("pupil");
// const pupil2 = document.getElementById("pupil2");
// const svg = document.querySelector(".svg");
// const { innerWidth: width, innerHeight: height } = window;
// const cx = width / 2,
// 	cy = height / 2;
// window.addEventListener("mousemove", function ({ clientX: x, clientY: y }) {
// 	const tx = ((cx - x) / cx) ,
// 		ty = ((cy - y) / cy) * 100;
// 	// pupil.setAttribute("transform", `translate(${tx},${ty})`);
//     console.log('x', tx);

// });

// const imageArea = document.querySelector('.scroll-container');
// const imageElement = document.querySelector('.image');
// const imageWidth = 200;
// const imageHeight = 200;

// window.addEventListener('mousemove', (event) => {
//   const containerRect = imageArea.getBoundingClientRect();
//   const mouseX = event.clientX - containerRect.left;
//   const mouseY = event.clientY - containerRect.top;

//   const imageX = (mouseX / containerRect.width) * 200;
//   const imageY = (mouseY / containerRect.height) * 200;

//   const maxX = containerRect.width - imageWidth;
//   const maxY = containerRect.height - imageHeight;

//   const clampedX = Math.min(maxX, Math.max(0, mouseX -(imageWidth / 2) ));
//   const clampedY = Math.min(maxY, Math.max(0, mouseY - (imageHeight / 2 ) ));

//   const imageXPercent = (clampedX / containerRect.width) * 150;
//   const imageYPercent = (clampedY / containerRect.height) * 100;

//   imageElement.style.transform = `translate(${imageXPercent }%, ${imageYPercent }%)`;
// });

// const imageArea = document.querySelector('.scroll-container');
// const imageElement = document.querySelector('.image');
// window.addEventListener('mousemove', (event) => {
//   const containerRect = imageArea.getBoundingClientRect();
//   const containerRect1 = imageElement.getBoundingClientRect();

// //   console.log('containerRect',containerRect);
// //   console.log('containerRect1',containerRect1);
//   const mouseX = event.clientX - containerRect.left;
//   const mouseY = event.clientY - containerRect.top;

// ///////////// Комент  начало
// // console.log('event.clientX', event.clientX);
// // console.log('containerRect.left', containerRect.left);
// //   console.log(mouseX);
// //   console.log(mouseY);
// //   const imageX = (mouseX / containerRect.width);
// //   const imageY = (mouseY / containerRect.height);
// ///////////////Комент конец
//   const maxX = (containerRect.width - containerRect1.width) / 2 ;
//   const maxY = (containerRect.height - containerRect1.height) / 2;

//   console.log('maxX', maxX);
//   const clampedX = Math.min(maxX , Math.max(0, mouseX -(containerRect1.width / 2) ));
//   const clampedY = Math.min(maxY, Math.max(0, mouseY - (containerRect1.height / 2 ) ));

//   console.log('clampedX', clampedX);
//   const imageXPercent = (clampedX / containerRect.width) * 100;
//   const imageYPercent = (clampedY / containerRect.height) * 100;
//   imageElement.style.transform = `translate(${imageXPercent }%, ${imageYPercent }%)`;
// });
