export default function albumView(album) {
  return `
    <section class="song-container">
        
        <div class="ratings">
            <h2>Album Title: ${album.title}</h2>
        </div>
        
        <div song-list-input>
            <div song-list>
                ${album.songs
                .map((song) => {
                    return `
                        <div class="listsongs">
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
                <button class="deleteAlbumButton">Delete album"</button>
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

            <button class="deleteAlbumButton">Delete album</button>
        </section>

        <button class="back-to-album-list-btn">
             <a class="back-navigation">back to albums listings</a>
        </button>
    </section>
    `;
}
