import axios from "axios";

console.log(axios.isCancel("something"));

const btn = document.querySelector(".btn");
console.log(btn);

function getPhotos(inputSearch, page) {
  const result = fetch(
    `https://books-backend.p.goit.global/books/category-list`
  )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

getPhotos();
