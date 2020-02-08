import "./posts.scss";

const makePost = (mountPoint, data) => {
  let post = new Post(mountPoint, data);
};

class Post {
  constructor(mountPoint, data) {
    this.mountPoint = mountPoint;
    this.data = data;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    let postWrap = document.createElement("div");
    postWrap.classList.add("post__wrap");

    let postImgDiv = document.createElement("div");
    postImgDiv.classList.add("post__imgBlock");
    let postImg = document.createElement("img");
    postImg.src = this.data.preview.low;
    let postYear = document.createElement("div");
    postYear.classList.add("post__year");

    let postTextWrap = document.createElement("div");
    postTextWrap.classList.add("post__text-wrap");

    let postTextBlock = document.createElement("div");
    postTextBlock.classList.add("post__text-block");

    let postTitle = document.createElement("div");
    postTitle.classList.add("post__title");
    postTitle.textContent = this.data.title;
    if (postTitle.textContent == "Fantastic beasts and where to find them") {
      postYear.textContent = "2016";
    } else {
      postYear.textContent = "2017";
    }

    let postGenre = document.createElement("div");
    postGenre.classList.add("post__genre");
    postGenre.textContent = this.data.genre;

    let postRating = document.createElement("div");
    postRating.classList.add("post__rating");
    postRating.textContent = this.data.rating;

    postImgDiv.appendChild(postYear);
    postImgDiv.appendChild(postImg);
    postTextBlock.appendChild(postTitle);
    postTextBlock.appendChild(postGenre);
    postTextWrap.appendChild(postTextBlock);
    postTextWrap.appendChild(postRating);
    postWrap.appendChild(postImgDiv);
    postWrap.appendChild(postTextWrap);
    this.mountPoint.appendChild(postWrap);
  }
}

class Posts {
  constructor(mountPoint, data) {
    this.mountPoint = mountPoint;
    this.data = data;

    for (let i = 0; i < data.list.length; i++) {
      let item = data.list[i];
      let itemPost = new Post(mountPoint, item);
    }
  }
}

export { Post, makePost, Posts };
