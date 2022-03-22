package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.entity.Album;
import org.wcci.apimastery.entity.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

import java.util.Arrays;
import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    private SongRepository songRepo;
    @Autowired
    private AlbumRepository albumRepo;


    @Override
    public void run(String... args) throws Exception {

        Album album1 = new Album("The Sound of Music", "/images/The_Sound_Of_Music.jpg", "The Sound of Music Companion", 5);
        albumRepo.save(album1);
        Song song1 = new Song("The Sound of Music", "https://www.amazon.com/music/player/albums/B08THZ9B3Z?_encoding=UTF8&qid=1647979035&sr=8-1", 250, 5, album1);
        songRepo.save(song1);
        Song song2 = new Song("Confessin' (That I Love You)", "https://www.amazon.com/music/player/albums/B08THZ9B3Z?_encoding=UTF8&qid=1647979035&sr=8-1", 342, 5, album1);
        songRepo.save(song2);
        Song song3 = new Song("Insignificance 1 Scene 9 (Original Soundtrack 'The Metamorphoses of Dionysus')", "https://www.amazon.com/music/player/albums/B08THZ9B3Z?_encoding=UTF8&qid=1647979035&sr=8-1", 449, 5, album1);
        songRepo.save(song3);

        Album album2 = new Album("6 Reasons Great Album", "/images/6_reasons.jpg", "6 Reasons Great Album Covers Can Help Grow Successful",5);
        albumRepo.save(album2);
        Song song4 = new Song("Insignificance 2", "https://www.pinterest.com/pin/495818240198882411/", 140, 1, album2);
        songRepo.save(song4);

        Album album4 = new Album("In These Silent Days","/images/In_These_Silent_Days.jpg","In These Silent Days",5 );
        albumRepo.save(album4);
        Song song5 = new Song("Dance Around It", "https://www.amazon.com/dp/B09NB5SM9L/ref=ap_ws_tlw_trk1", 336, 4, album4);
        songRepo.save(song5);
        Song song6 = new Song("Broken Horses", "https://www.amazon.com/dp/B099PKCH6H/ref=ap_ws_tlw_trk2", 503, 5, album4);
        songRepo.save(song6);
        Album album5 = new Album("Presents A Bluesman Came To Town","/images/Tommy_Castro.jpg","Tommy Castro Presents A Bluesman Came To Town",5 );
        albumRepo.save(album5);
        Song song7 = new Song("A Bluesman Came To Town", "https://www.amazon.com/dp/B098RB7YV8/ref=dm_ws_tlw_trk2", 357, 5, album5);
        songRepo.save(song7);
        Song song8 = new Song("Somewhere", "https://www.amazon.com/dp/B098RB8M64/ref=dm_ws_tlw_trk1", 330, 5, album5);
        songRepo.save(song8);
        Song song9 = new Song("You To Hold On To", "https://www.amazon.com/dp/B098RBLRX1/ref=dm_ws_tlw_trk4", 353, 5, album5);
        songRepo.save(song9);





    }
}
