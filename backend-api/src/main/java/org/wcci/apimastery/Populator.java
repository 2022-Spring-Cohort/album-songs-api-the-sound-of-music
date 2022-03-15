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


        Album album1 = new Album("goodAlbun","img/png/goodAlbum","deathRow records",5 );
        Song song1 = new Song("goodSong","/goodSong/link",120,5,album1);
        songRepo.save(song1);
        albumRepo.save(album1);
        album1.addSongs(song1);

    }
}
