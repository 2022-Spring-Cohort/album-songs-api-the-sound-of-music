import home from "./home.js";

import header from "./header.js";

// import footer from "./footer.js";
const albumContainer = document.querySelector(".album-container");
function makeHomeView() {
  fetch("http://localhost:8080/albums")
    .then((res) => res.json())
    .then((albums) => {
      albumContainer.innerHTML = header();
      albumContainer.innerHTML += home(albums);
      // albumContainer.innerHTML += footer();

      const album = albumContainer.querySelectorAll(".album");
    });
}

makeHomeView();
