export default function home(albums) {
  return `
<main class="main-content">
  <section class="album-list">
    <div class="album-list-list">
      ${albums
          .map((album) => {
              return `<div class="albums">
                <h2 class="album-title" >Title: ${album.title} </h2>
                <p class="album-record-label" style="color: darkblue; font-weight: bold" >Label: ${album.recordLabel}</p>
                <p class="album-ratings" style="color: darkblue; font-weight: bold" >Ratings: ${album.ratings}</p>
                <image class="album-img" src = "${album.image}" alt = "picture of the album" width="200" height="200" />
                <input type="hidden" class="id_album" value="${album.id}" >
                
              </div>`;
          }).join("")
        }  
    </div>

    <div class="album-input">
      <h2 class="album-title">Add A New Album</h2>
      <input type="text" placeholder="Album Title: " class="albumTitleInput" />
      <input type="text" placeholder="Album Image: " class="albumImageInput" />
      <input type="text" placeholder="Record Label: " class="albumRecordLabelInput" />
      <input type="text" placeholder="Album Ratings: " class="albumRatingsInput" />
      <button class="addAlbumButton">Add album</button>
      
    </div>    

</section>
</main>
`;
}
