import home from "./home.js";
import header from "./header.js";
import footer from "./footer.js";
import albumView from "./albumView.js";
import songView from "./songView.js";

const albumContainer = document.querySelector(".album-container");
let albumId = "";
let currentAlbum;
let currentSong;

function makeHomeView() {
  fetch("http://localhost:8080/albums")
    .then((res) => res.json())
    .then((albums) => {
      albumContainer.innerHTML = header();
      albumContainer.innerHTML += home(albums);
      albumContainer.innerHTML += footer();

      const albumsEl = albumContainer.querySelectorAll(".albums");

      albumsEl.forEach((album) => {
        console.log(album);
        let albumIdEl = album.querySelector(".id_album");
        const albumImgEl = album.querySelector(".album-img");
        albumImgEl.addEventListener("click", () => {
          albumId = albumIdEl.value;

          makeAlbumView(albumId);
        });

        const albumReviewStars = album.querySelector(".album-ratings");
        console.log(albumReviewStars);
        let starEl1 = document.createElement("i");
        let albumJson = "";
        albums.forEach((newAlbum) => {
          const albumIdEl = album.querySelector(".id_album");

          if (newAlbum.id == albumIdEl.value) {
            albumJson = newAlbum;
          }
        });

        for (let count = 0; count < albumJson.ratings; count++) {
          let starEl1 = document.createElement("i");
          starEl1.classList.add("fas");
          starEl1.classList.add("fa-star");
          console.log(albumReviewStars);
          albumReviewStars.appendChild(starEl1);
        }
        for (let Count2 = 0; Count2 < 5 - albumJson.ratings; Count2++) {
          let starEl1 = document.createElement("i");
          starEl1.classList.add("far");
          starEl1.classList.add("fa-star");
          albumReviewStars.appendChild(starEl1);
        }
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
      ratings: albumRatingsInput.value,
    };

    if (albumTitleInput.value !== "") {
      fetch("http://localhost:8080/albums/addAlbum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAlbumJson),
      })
        .then((res) => res.json())
        .then((albums) => {
          console.log("here 2");
          makeHomeView();
        });
    } else {
      alert("Please enter an Album name.");
    }
  });
}

function makeAlbumView(albumId) {
  fetch(`http://localhost:8080/albums/` + albumId)
    .then((res) => res.json())
    .then((album) => {
      console.log(album);
      currentAlbum = album;
      albumContainer.innerHTML = header();
      albumContainer.innerHTML += albumView(album);
      albumContainer.innerHTML += footer();

      const backButton = albumContainer.querySelector(".back-navigation");
      backButton.addEventListener("click", () => {
        console.log(album);
        console.log("here 3");
        makeHomeView();
      });

      //const reviewEl = albumContainer.querySelector(".review");
      // const reviewEl = albumContainer.querySelector(".song-container");
      const reviewEl = albumContainer.querySelector(".ratings");
      let starEl = document.createElement("i");

      for (let count = 0; count < album.ratings; count++) {
        let starEl = document.createElement("i");
        starEl.classList.add("fas");
        starEl.classList.add("fa-star");
        console.log(reviewEl);
        reviewEl.appendChild(starEl);
      }
      for (let Count2 = 0; Count2 < 5 - album.ratings; Count2++) {
        let starEl = document.createElement("i");
        starEl.classList.add("far");
        starEl.classList.add("fa-star");
        reviewEl.appendChild(starEl);
      }

      console.log(starEl);

      const songTitleInput = albumContainer.querySelector(".songTitleInput");
      const songLinkInput = albumContainer.querySelector(".songLinkInput");
      const songDurationInput =
        albumContainer.querySelector(".songDurationInput");
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
        console.log(newSongJson);
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

      const listSongTitleElements =
        albumContainer.querySelectorAll(".listSongTitle");
      listSongTitleElements.forEach((listSongTitleEl) => {
        listSongTitleEl.addEventListener("click", () => {
          let songId = listSongTitleEl.querySelector("#id").value;
          // console.log(currentAlbum);

          currentAlbum.songs.forEach((song) => {
            if (song.id == songId) {
              // console.log(song);
              currentSong = song;
            }
          });

          // console.log("song again " + currentSong);
          makeSongView(songId);
        });
      });

      // album comment
      const albumCommentInput = document.getElementById("album-comment");
      const addAlbumCommentBtn = document.querySelector(".addAlbumComment");
      addAlbumCommentBtn.addEventListener("click", () => {
        const newAlbumComment = {
          comments: albumCommentInput.value,
        };
        fetch(`http://localhost:8080/albums/${albumId}/updateAlbumComment`, {
          method: "POST",
          body: albumCommentInput.value,
        })
          .then((res) => res.json())
          .then((albums) => {
            makeAlbumView(album.id);
          });
      });

      // update album
      const updateAlbumButton =
        albumContainer.querySelector(".updateAlbumButton");
      updateAlbumButton.addEventListener("click", () => {
        const updateInput = albumContainer.querySelector(".newAlbumTitleInput");
        fetch("http://localhost:8080/albums/" + albumId, {
          method: "PATCH",
          body: updateInput.value,
        })
          .then((res) => res.json())
          .then((newAlbums) => {
            makeAlbumView(albumId);
          });
      });

      // delete album
      const deleteAlbumButton =
        albumContainer.querySelector(".deleteAlbumButton");
      deleteAlbumButton.addEventListener("click", () => {
        fetch("http://localhost:8080/albums/" + albumId, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((newAlbums) => {
            makeAlbumView(albumId);
          });
      });
    });
}

function makeSongView(songId) {
  albumContainer.innerHTML = header();
  albumContainer.innerHTML += songView(currentSong);
  albumContainer.innerHTML += footer();

  const songViewStars = albumContainer.querySelector(".song-ratings");
  let starEl3 = document.createElement("i");

  for (let count = 0; count < currentSong.ratings; count++) {
    let starEl3 = document.createElement("i");
    starEl3.classList.add("fas");
    starEl3.classList.add("fa-star");
    console.log(songViewStars);
    songViewStars.appendChild(starEl3);
  }
  for (let Count2 = 0; Count2 < 5 - currentSong.ratings; Count2++) {
    let starEl3 = document.createElement("i");
    starEl3.classList.add("far");
    starEl3.classList.add("fa-star");
    songViewStars.appendChild(starEl3);
  }

  const backSongTitleListButton = albumContainer.querySelector(
    ".back-to-song-title-list-btn"
  );
  backSongTitleListButton.addEventListener("click", () => {
    makeAlbumView(albumId);
    // makeHomeView();
  });

  // song comment
  const songCommentInput = document.getElementById("song-comment");
  const addSongCommentBtn = document.querySelector(".addSongComment");

  addSongCommentBtn.addEventListener("click", () => {
    const newSongComment = {
      comments: songCommentInput.value,
    };

    fetch(`http://localhost:8080/songs/${songId}/addSongComment`, {
      method: "POST",
      body: songCommentInput.value,
    })
      .then((res) => res.json())
      .then((songs) => {
        makeAlbumView(albumId);
        // makeSongView(songId);
      });
  });

  // song title update
  const updateSongButton = albumContainer.querySelector(".updateSongButton");
  updateSongButton.addEventListener("click", () => {
    const updateSongInput = albumContainer.querySelector(".newSongTitleInput");
    fetch("http://localhost:8080/songs/" + songId, {
      method: "PATCH",
      body: updateSongInput.value,
    })
      .then((res) => res.json())
      .then((newSongs) => {
        // makeSongView(songId);
        makeAlbumView(albumId);
      });
  });

  // delete song
  const deleteSongBtn = albumContainer.querySelector(".deleteSongButton");
  deleteSongBtn.addEventListener("click", () => {
    fetch("http://localhost:8080/songs/" + songId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((newSongs) => {
        makeSongView(songId);
      });
  });
}
// function makeStars(album) {

//       let starEl = document.createElement('i');
//   for (let count = 0; count < album.ratings; count++) {
//     let starEl = document.createElement("i");
//     starEl.classList.add("fas");
//     starEl.classList.add("fa-star");
//     // console.log(reviewEl);
//     reviewEl.appendChild(starEl);
//   }
//   for (let Count2 = 0; Count2 < 5 - album.ratings; Count2++) {
//     let starEl = document.createElement("i");
//     starEl.classList.add("far");
//     starEl.classList.add("fa-star");
//     reviewEl.appendChild(starEl);
//   }
// }

makeHomeView();
