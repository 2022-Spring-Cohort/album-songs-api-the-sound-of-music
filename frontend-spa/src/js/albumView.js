export default function albumView(album) {
  return `
    <section class="song-container">
        <div class = "flex-container">
        <div class="ratings">
            <h2>Album Title: ${album.title}</h2>
        </div>
        
        <div song-list-input>
            <div song-list-input>
                ${album.songs
                  .map((song) => {
                    return `
                        <div class="listSongTitle">
                        <button>
                            <p >Song title: ${song.title}</p>
                            <input id="id" type="hidden" name="id" value="${song.id}">
                            </button>
                        </div>        
                    `;
                  })
                  .join("")}
            </div>    
            
            <div class="song-input">
                <div>
                <input type="text" placeholder="Song Title: " class="songTitleInput" />
                </div>
                <div>
                <input type="text" placeholder="Song Link: " class="songLinkInput" />
                </div>
                <div>
                <input type="text" placeholder="Song Duration: " class="songDurationInput" />
                </div>
                <div>
                <input type="text" placeholder="Song Ratings: " class="songRatingsInput" />
                </div>
                <div>
                <button class="addSongButton">Add song</button>
                </div>
            </div>
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
                <div>
                    <textarea id="album-comment" name="album-comment" rows="4" cols="50" placeholder="Good Album"></textarea>
                </div>
                <div>
                    <button class="addAlbumComment">Add Comment</button>
                </div>
            </div>
            <div class="update-delete-button">
                <div>
                    <input type="text" placeholder="New Album Title: " class="newAlbumTitleInput" />
                    <button class="updateAlbumButton">Update album</button>
                </div>
                <div>
                    <button class="deleteAlbumButton">Delete album</button>
                </div>
            </div>   
        </section>

        <section class="back-link">
            <button class="back-to-album-list-btn">
                <a class="back-navigation">back to albums listings</a>
            </button>
        </section>
    </section>
    `;
}
