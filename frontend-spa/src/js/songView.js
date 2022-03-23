export default function songView(songs) {
  return `
      <section class="album-song-container">
      <iframe width="420" height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
      </iframe>
      <image class="songs-img" src = "${songs}" alt = "picture of the album" width="200" height="200" />
      
      <div class="list-of-songs">
            <div class = "song-ratings">
            <p > <a href = "${
              songs.link
            }" target = "_blank">  <h2 class="song-title">Song Title: ${
    songs.title
  }</h2> </a></p>
            </div>
          
          <div album-song-list>
              
                <p > Duration: ${songs.duration}</p>
             
            </div>        
       
          <section class="album-comment">
              <h2 class="album-comment-h2">Song Comment:</h2>

                ${songs.comments
                  .map((comment) => {
                    return `
                    <div class="comment-container" >
                        <ul class="display-album-comment">
                            <li>${comment}</li>
                        </ul>
                    </div>
                
                    `;
                  })
                  .join("")}
              
                <div class="album-comment-Input">
                    <textarea id="song-comment" name="song-comment" rows="4" cols="50" placeholder="Good song"></textarea>
                    <button class="addSongComment">Add Comment</button>
                </div>

                <div class="update-delete-button-song">
                    <div >
                        <input type="text" placeholder="New Song Title: " class="newSongTitleInput"/>
                        <button class="updateSongButton">Update Song</button>
                    </div>
                    <div>
                        <button class="deleteSongButton">Delete Song</button>
                    </div>
                </div>

            </section>
            <section class="back-link">
                <button class="back-to-song-title-list-btn">
                    <a class="back-song-title-list">back to song title listings</a>   
                </button>  
            </section>     
          
      </section>
      `;
}
