export default function albumView(album) {
  return `
    
        ${album.songs
          .map((song) => {
            return `
                <div class="song-container">
                    <section class="listsongs">
                        <p >Title: ${song.title}</p>
                        <p> Link: ${song.link}</p>
                        <p> Duration: ${song.duration}</p>
                        <p> Ratings: ${song.ratings}</p>
                    </section>
                    
                    
                </div>
                `;
          })
          .join("")}
        <section >
                        <input type="text" placeholder="Song Title: " class="songTitleInput" />
                        <input type="text" placeholder="Song Link: " class="songLinkInput" />
                        <input type="text" placeholder="Song Duration: " class="songDurationInput" \>
                        <input type="text" placeholder="Song Ratings: " class="songRatingsInput" />
                        <button class="addSongButton">Add song"</button>
        </section>
        <section class="album-comment">
        <h2>Album Comment:</h2>

        ${album.comments.map(comment => {
            return `
            <div class="comment-container" >
            
                <div class="box-wrapper">
    
                    <div class="box-top">
               
                        <div class="review">

                       
                            

    
                    </div>
                </div>
    
                <div class="comments">
                    <p>${comment.comment} </p>
                </div>
            </div>
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            `
        }).join("")
            
        }
        <textarea></textarea>
        </section>
        <button>
                    <a class="back-navigation">back to albums listings</a>
        </button>
    `;
}
