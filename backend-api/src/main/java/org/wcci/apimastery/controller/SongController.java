package org.wcci.apimastery.controller;


import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entity.Album;
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

    @PostMapping("/songs/{id}/addSongComment")
    public Iterable<Song> addSongComment(@PathVariable long id, @RequestBody String newComment) {
        Song theSong = songRepo.findById(id).get();
        theSong.addComments(newComment);
        songRepo.save(theSong);

        return songRepo.findAll();
    }
    @PatchMapping("/songs/{id}")
    public Iterable<Song> UpdateSongName(@PathVariable long id, @RequestBody String newTitle)
    {
        Song song  = songRepo.findById(id).get();
        song.updateTitle(newTitle);
        songRepo.save(album);
        return  songRepo.findAll();
    }

}
