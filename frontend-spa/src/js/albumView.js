export default function albumView(album) {
  return `
    <section class="song-container">
        <div class="ratings">
            <h2>Album Title: ${album.title}</h2>
        </div>
        <div song-list-input>
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
            <div class="song-input">
                <input type="text" placeholder="Song Title: " class="songTitleInput" />
                <input type="text" placeholder="Song Link: " class="songLinkInput" />
                <input type="text" placeholder="Song Duration: " class="songDurationInput" \>
                <input type="text" placeholder="Song Ratings: " class="songRatingsInput" />
                <button class="addSongButton">Add song</button>
            </div>
        </div>
        
        <section class="album-comment">
            <h2>Album Comment:</h2>


            ${album.comments
            .map((comment) => {
                return `
                <div class="comment-container" >
                
                    <div class="box-wrapper">
        
                        <div class="box-top">

                            <div class="review"> </div>
                            

                        </div>
                    </div>
        
                    <div class="comments">
                        <p>${comment.comment} </p>
                        
                    </div>

                </div>
            </div>
                `;
            }).join("")
            }

            <div class="album-comment-container">
                <textarea id="album-comment" name="album-comment" rows="4" cols="50"></textarea>
                <button class="addAlbumComment">Add Comment</button>
            </div>
        </section>

        <button class="back-to-album-list-btn">
             <a class="back-navigation">back to albums listings</a>
        </button>
    </section>
    `;
}

