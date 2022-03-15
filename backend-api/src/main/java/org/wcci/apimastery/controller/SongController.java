package org.wcci.apimastery.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.entity.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

@RestController
public class SongController {
    private SongRepository songRepo;
    private AlbumRepository albumRepo;

    public SongController(SongRepository songRepo, AlbumRepository albumRepo) {
        this.songRepo = songRepo;
        this.albumRepo = albumRepo;
    }

    @GetMapping("/songs")
    public Iterable<Song> getSongs(){
        return songRepo.findAll();
    }

    @GetMapping("/songs/{id}")
    public Song getSong(@PathVariable Long id){
        return songRepo.findById(id).get();
    }
}
