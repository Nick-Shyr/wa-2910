import "./accordion.scss";

const sections = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
  },
  {
    title: "Section 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
  },
  {
    title: "Section 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
  },
  {
    title: "Section 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
  },
  {
    title: "Section 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis perferendis ipsum tempora quam magnam accusamus, vero quod dolorem repellendus earum qui eius sequi facere at, totam cupiditate ut exercitationem? "
  }
];

const renderAccordionBlock = (item, i) => {
  const blockWrap = document.createElement("div");
  const blockTitle = document.createElement("div");
  const blockTitleText = document.createElement("div");
  const blockText = document.createElement("div");
  const blockButton = document.createElement("div");
  // const buttonImg = document.createElement("img");

  blockWrap.classList.add("accordionBlock__wrap");
  blockTitle.classList.add("accordionBlock__title");
  blockTitleText.classList.add("accordionBlock__title-text");
  blockTitleText.textContent = item.title;
  blockText.classList.add("accordionBlock__text");
  blockText.textContent = item.content;
  blockButton.classList.add("accordionBlock__button");
  // buttonImg.src = "../img/arrow.png";

  blockWrap.appendChild(blockTitle);
  blockTitle.appendChild(blockTitleText);
  blockTitle.appendChild(blockButton);
  blockWrap.appendChild(blockText);
  // blockButton.appendChild(buttonImg);

  return blockWrap;
};

const renderAccordion = mountPoint => {
  const accordionBlocks = [];

  sections.forEach((item, i) => {
    const block = renderAccordionBlock(item, i);
    accordionBlocks.push(block);
    mountPoint.appendChild(block);
  });

  return accordionBlocks;
};
export const accordion = mountPoint => {
  let activeSlideIndex = -1;
  let isActive = false;

  let container = document.createElement("div");
  container.classList.add("container");
  let acc = renderAccordion(container);

  mountPoint.appendChild(container);
  openText();

  function openText() {
    for (let i = 0; i < acc.length; i++) {
      let item = acc[i];
      let itemTextActive;
      let itemButActive;
      let itemTitleActive;
      let itemText = item.querySelector(".accordionBlock__text");
      let itemTitle = item.querySelector(".accordionBlock__title");
      let itemButImg = item.querySelector(".accordionBlock__button");

      item.addEventListener("click", () => {
        if (activeSlideIndex >= 0) {
          itemTextActive = acc[activeSlideIndex].querySelector(
            ".accordionBlock__text"
          );
          itemButActive = acc[activeSlideIndex].querySelector(
            ".accordionBlock__button"
          );
          itemTitleActive = acc[activeSlideIndex].querySelector(
            ".accordionBlock__title"
          );
        }
        if (isActive) {
          if (activeSlideIndex == i) {
            itemText.style.height = "0";
            isActive = false;
            activeSlideIndex = -1;
            itemButImg.style.transform = "rotate(180deg)";
            itemTitle.classList.remove("active");
          } else {
            itemTextActive.style.height = "0";
            itemButActive.style.transform = "rotate(180deg)";
            itemTitleActive.classList.remove("active");
            itemText.style.height = "50px";
            itemButImg.style.transform = "rotate(0deg)";
            itemTitle.classList.add("active");
            activeSlideIndex = i;
          }
        } else {
          isActive = true;
          itemText.style.height = "50px";
          activeSlideIndex = i;
          itemButImg.style.transform = "rotate(0deg)";
          itemTitle.classList.add("active");
        }
      });
    }
  }
};
