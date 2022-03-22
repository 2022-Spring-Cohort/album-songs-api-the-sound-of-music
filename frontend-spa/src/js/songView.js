export default function songView(songs) {
  return `
      <section class="album-song-container">
          
          <div class="song-ratings">
              <h2>Song Title: ${songs.title}</h2>
          </div>
          
          <div album-song-list>
              <div list-of-songs>
                  
                          <div class="list-songs">
                                <p >Title: ${songs.title}</p>
                                <p> Link: ${songs.link}</p>
                                <p> Duration: ${songs.duration}</p>
                                <p> Ratings: ${songs.ratings}</p>
                          </div>        
                   
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
              <h2 class="album-comment-h2">Song Comment:</h2>
              
                  <div class="comment-container" >
                      <ul class="display-album-comment">
                       
                      </ul>
                  </div>
              
               
  
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
