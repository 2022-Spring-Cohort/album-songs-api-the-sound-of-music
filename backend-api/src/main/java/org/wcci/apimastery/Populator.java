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


//        Album album1 = new Album("goodAlbun","/images/3D-Button.jpg","deathRow records",5 );
        Album album1 = new Album("Hebe Tien album","/images/My_love_Hebe_Tien.jpg","Mylove",4 );
        albumRepo.save(album1);
        Album album2 = new Album("6 Reasons Great Album", "/images/6_reasons.jpg", "6 Reasons Great Album Covers Can Help Grow Successful",5);
        albumRepo.save(album2);
        Album album3 = new Album("The Sound of Music", "/images/The_Sound_Of_Music.jpg", "The Sound of Music Companion", 5);
        albumRepo.save(album3);
        Song song1 = new Song("goodSong","/goodSong/link",120,5,album1);
        songRepo.save(song1);
        Song song2 = new Song("Insignificance", "https://www.pinterest.com/pin/495818240198882411/", 340, 5, album1);




    }
}
