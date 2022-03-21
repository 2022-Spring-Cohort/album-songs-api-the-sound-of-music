export default function songView(songs) {
  return `
      <section class="album-song-container">
          
          <div class="song-ratings">
              <h2>Song Title: ${songs.title}</h2>
          </div>
          
          <div album-song-list>
              <div list-of-songs>
                  ${songs
                    .map((song) => {
                      return `
                          <div class="list-songs">
                                <p >Title: ${song.title}</p>
                                <p> Link: ${song.link}</p>
                                <p> Duration: ${song.duration}</p>
                                <p> Ratings: ${song.ratings}</p>
                          </div>        
                      `;
                    })
                    .join("")}
                  
              </div>
              <div class="song-input">
                  <input type="text" placeholder="Song Title: " class="songTitleInput" />
                  <input type="text" placeholder="Song Link: " class="songLinkInput" />
                  <input type="text" placeholder="Song Duration: " class="songDurationInput" \>
                  <input type="text" placeholder="Song Ratings: " class="songRatingsInput" />
                  <button class="addSongButton">Add song</button>
              </div>
          </div>
          
          <section class="album-comment">
              <h2 class="album-comment-h2">Album Comment:</h2>
              ${album.comments
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
                  <textarea id="album-comment" name="album-comment" rows="4" cols="50" placeholder="Good Album"></textarea>
                  <button class="addAlbumComment">Add Comment</button>
              </div>
              <input type="text" placeholder="New Album Title: " class="newAlbumTitleInput" />
              <button class="updateAlbumButton">Update album</button>
              <button class="deleteAlbumButton">Delete album</button>
          </section>
  
          <button class="back-to-album-list-btn">
               <a class="back-navigation">back to albums listings</a>
          </button>
      </section>
      `;
}
