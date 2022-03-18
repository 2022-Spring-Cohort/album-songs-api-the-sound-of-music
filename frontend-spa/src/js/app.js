import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import albumView from "./albumView.js";

const albumContainer = document.querySelector(".album-container");
let albumId = "";

function makeHomeView() {
  fetch("http://localhost:8080/albums")
    .then((res) => res.json())
    .then((albums) => {
      albumContainer.innerHTML = header();
      albumContainer.innerHTML += home(albums);
      albumContainer.innerHTML += footer();

      const albumsEl = document.querySelectorAll(".albums");

      albumsEl.forEach((album) => {
        album.addEventListener("click", () => {
          console.log("album=" + album);
          let albumIdEl = album.querySelector(".id_album");
          albumId = albumIdEl.value;
          // alert("You clicked me: " + albumIdEl.value);
          makeAlbumView(albumId);
        });
      });

      addAlbum();
    });
}

function addAlbum() {
  const albumTitleInput = albumContainer.querySelector(".albumTitleInput");
  const albumImageInput = albumContainer.querySelector(".albumImageInput");
  const albumRecordLabelInput = albumContainer.querySelector(
    ".albumRecordLabelInput"
  );
  const albumRatingsInput = albumContainer.querySelector(".albumRatingsInput");

  const addAlbumBtn = albumContainer.querySelector(".addAlbumButton");
  addAlbumBtn.addEventListener("click", () => {
    const newAlbumJson = {
      title: albumTitleInput.value,
      image: albumImageInput.value,
      recordLabel: albumRecordLabelInput.value,
      ratings: albumRatingsInput.value
    };

    fetch('http://localhost:8080/albums/addAlbum', {
    method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAlbumJson),
        })
      .then((res) => res.json())
      .then((albums) => {
        makeHomeView();
      });
  
  });
  

}

function makeAlbumView(albumId) {
  fetch(`http://localhost:8080/albums/` + albumId)
    .then((res) => res.json())
    .then((album) => {
      console.log(album);
      albumContainer.innerHTML = header();
      albumContainer.innerHTML += albumView(album);
      albumContainer.innerHTML += footer();
      
      const backButton = albumContainer.querySelector(".back-navigation");
      backButton.addEventListener("click", () => {
        console.log(album);
        makeHomeView();
      });
    
      //const reviewEl = albumContainer.querySelector(".review");
      // const reviewEl = albumContainer.querySelector(".song-container");
      const reviewEl = albumContainer.querySelector(".ratings");
      let starEl = document.createElement('i');
      

      for (let count = 0; count < album.ratings; count++) {
        let starEl = document.createElement('i');
        starEl.classList.add("fas");
        starEl.classList.add("fa-star");
        console.log(reviewEl);
        reviewEl.appendChild(starEl);
      }
      for (let Count2 = 0; Count2 <(5-album.ratings); Count2++) {
        let starEl = document.createElement('i');
        starEl.classList.add("far");
        starEl.classList.add("fa-star");
        reviewEl.appendChild(starEl);
      }


      console.log(starEl);
      // class="fas fa-star"
      
      const songTitleInput = albumContainer.querySelector(".songTitleInput");
      const songLinkInput = albumContainer.querySelector(".songLinkInput");
      const songDurationInput =
        albumContainer.querySelector(".songDurationInput");
      const songRatingsInput =
        albumContainer.querySelector(".songRatingsInput");

      const addSongBtn = albumContainer.querySelector(".addSongButton");
      addSongBtn.addEventListener("click", () => {
        const newSongJson = {
          title: songTitleInput.value,
          link: songLinkInput.value,
          duration: songDurationInput.value,
          ratings: songRatingsInput.value,
        };
        fetch(`http://localhost:8080/albums/${albumId}/addSong`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSongJson),
        })
          .then((res) => res.json())
          .then((album) => {
            makeAlbumView(album.id);
          });
      });
    });
}



makeHomeView();
