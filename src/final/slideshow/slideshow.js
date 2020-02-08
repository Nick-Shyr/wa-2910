import "./slideshow.scss";

let sliderCount = 0;

export const slideShow = (mountPoint, data) => {
  // console.log(data);
  let backSlide = document.createElement("div");
  backSlide.classList.add("slider__block");
  backSlide.style.backgroundImage = `url(${data.preview.high})`;
  // backSlide.style.backgroundColor = "grey";
  // backSlide.style.opacity = "0";
  // setTimeout(() => {
  //   backSlide.style.opacity = "1";
  // }, 1000);

  let slideBlockBottom = document.createElement("div");
  slideBlockBottom.classList.add("slider__bottom");

  let titleBlock = document.createElement("div");
  titleBlock.classList.add("slider__title");
  titleBlock.textContent = data.title;

  let genreBlock = document.createElement("div");
  genreBlock.classList.add("slider__genre");
  genreBlock.textContent = data.genre;

  slideBlockBottom.appendChild(titleBlock);
  slideBlockBottom.appendChild(genreBlock);
  backSlide.appendChild(slideBlockBottom);
  mountPoint.appendChild(backSlide);

  let ratingBLock = document.createElement("div");
  ratingBLock.classList.add("slider__rating");
  let ratingBLockBottom = document.createElement("div");
  ratingBLockBottom.classList.add("slider__rating_bottom");

  let ratingBLockText = document.createElement("div");
  ratingBLockText.classList.add("slider__rating_text");
  ratingBLockText.textContent = "Rating";

  let ratingBLockNumber = document.createElement("div");
  ratingBLockNumber.classList.add("slider__rating_number");
  ratingBLockNumber.textContent = data.rating;

  let ratingBLockStars = document.createElement("div");
  ratingBLockStars.classList.add("slider__rating_stars");

  for (let i = 1; i < 6; i++) {
    let parseRating = parseInt(data.rating);
    let star = document.createElement("span");
    star.classList.add(`rating-star-${i}`);
    star.style.position = "relative";
    if (i <= data.rating) {
      star.textContent = "\u2605";
    } else {
      if (i == parseRating + 1) {
        star.textContent = "\u2606";
        let starHalf = document.createElement("span");
        starHalf.style.position = "absolute";
        starHalf.style.overflow = "hidden";
        starHalf.style.width = "10px";
        starHalf.style.top = "0";
        starHalf.style.left = "0";
        starHalf.style.color = "#ff0079";
        starHalf.textContent = "\u2605";
        star.appendChild(starHalf);
      }
    }
    ratingBLockStars.appendChild(star);
  }

  ratingBLockBottom.appendChild(ratingBLockStars);
  ratingBLockBottom.appendChild(ratingBLockNumber);
  ratingBLock.appendChild(ratingBLockText);
  ratingBLock.appendChild(ratingBLockBottom);

  slideBlockBottom.appendChild(ratingBLock);
};
