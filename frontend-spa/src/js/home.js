export default function home(albums) {
  return `
<main class="main-content">
<section class="album-list">
${albums
  .map((album) => {
    return `<div class="albums">
    <h2 class="album-title" >${album.title} </h2>
    <image src = "${album.image}" alt = "picture of the album"/>
    <h3 class="album-record-label" >${album.recordLabel}</h3>
    <h4 class="album-ratings" >${album.ratings}</h4>

  
 
</div>`;
  })
  .join("")}    
</section>
</main>
`;
}
