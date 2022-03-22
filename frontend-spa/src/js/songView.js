export default function songView(songs) {
  return `
      <section class="album-song-container">
    
      <div class="list-of-songs">
      <div class = "song-ratings">
              <h2 class="song-title">Song Title: ${songs.title}</h2>
              </div>
          
          <div album-song-list>
                <p > Link: ${songs.link}</p>
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
                        <input type="text" placeholder="New Song Title: " class="newSongTitleInput" />
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
