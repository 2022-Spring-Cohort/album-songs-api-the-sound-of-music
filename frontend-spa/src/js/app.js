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

      const albumsEl = albumContainer.querySelectorAll(".albums");
      // const albumImgEl = document.querySelectorAll(".album-img");
      // const albumsEl = document.querySelectorAll(".albums");

      // albumsEl.forEach((album) => {
        albumsEl.forEach((album) => {
        let albumIdEl = album.querySelector(".id_album");
        const albumImgEl = album.querySelector(".album-img")
        albumImgEl.addEventListener("click", () => {
          console.log("album=" + album);
          // let albumIdEl = album.querySelector(".id_album");
          // let albumIdEl = albumsEl.querySelector(".id_album");
          // console.log(albumIdEl);
          albumId = albumIdEl.value;
          // console.log("id=???"+ albumId);
          // alert("You clicked me: " + albumIdEl.value);
          makeAlbumView(albumId);
       

        // album comment
        // const albumCommentInputEl = document.querySelectorAll(
        //   ".album-comment-Input"
        // );
       
      });
        // // albumsEl.forEach((album) => {
          
        //   const albumCommentInput = document.getElementById("album-comment");
        //   const addAlbumCommentBtn = document.querySelector(".addAlbumComment");
        //   // console.log("here clicked "+ albumCommentInput);
        //   addAlbumCommentBtn.addEventListener("click", () => {
        //     console.log("here 1")
        //     // alert("You clicked me: " +albumId);
        //     const newAlbumComment = {
        //       comments: albumCommentInput.value,
        //     };
        //     fetch(
        //       `http://localhost:8080/albums/${albumId}/updateAlbumComment`,
        //       {
        //         method: "POST",
        //         body: albumCommentInput.value
        //       }
        //     )
        //       .then((res) => res.json())
        //       .then((albums) => {
        //         alert("You clicked me 2222: " + albumIdEl.value);
        //         // makeHomeView();
        //       });
        //   });
        // // });

        // delete button
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

    fetch("http://localhost:8080/albums/addAlbum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumJson),
    })
      .then((res) => res.json())
      .then((albums) => {
        console.log("here 2")
        makeHomeView();
      });
  });
}

// const deleteAlbumButton = document.querySelector(".deleteAlbumButton");
// deleteAlbumButton.addEventListener("click", () => {
//   fetch("/albums/{id}" + albumIdEl.value, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((newAlbums) => {
//       makeHomeView(newAlbums);
//     });
// });

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
    });
}

// function makeStars(album) {
//   // const reviewEl = albumContainer.querySelector(".ratings");
//   //     let starEl = document.createElement('i');
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
