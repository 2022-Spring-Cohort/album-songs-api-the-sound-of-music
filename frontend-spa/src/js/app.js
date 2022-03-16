import home from "./home.js";

import header from "./header.js";

// import footer from "./footer.js";

fetch("http://localhost:8080/albums")
  .then((res) => res.json())
  .then((albums) => {
    const albumContainer = document.querySelector(".album-container");

    albumContainer.innerHTML = header();
    albumContainer.innerHTML += home(albums);
    // albumContainer.innerHTML += footer();
  });
