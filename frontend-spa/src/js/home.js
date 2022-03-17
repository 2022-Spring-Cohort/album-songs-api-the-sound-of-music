export default function home(albums) {
  return `
<main class="main-content">
<section class="album-list">
${albums
    .map((album) => {
        return `<div class="albums">
          <h2 class="album-title" >Title: ${album.title} </h2>
          <p class="album-record-label" >Label: ${album.recordLabel}</p>
          <p class="album-ratings" >Ratings: ${album.ratings}</p>
          <image class="album-img" src = "${album.image}" alt = "picture of the album" width="200" height="200" />
          <input type="hidden" class="id_album" value="${album.id}" >
        </div>`;
    }).join("")
  }  

  <section class="album-input">
  <input type="text" placeholder="Album Title: " class="albumTitleInput" />
  <input type="text" placeholder="Album Image: " class="albumImageInput" />
  <input type="text" placeholder="Record Label: " class="albumRecordLabelInput" />
  <input type="text" placeholder="Album Ratings: " class="albumRatingsInput" />
  <button class="addAlbumButton">Add album"</button>

</section>
</section>
</main>
`;
}



