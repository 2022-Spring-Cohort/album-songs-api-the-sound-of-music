package org.wcci.apimastery.controller;


<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entity.Album;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> ff302ca6e1f3e5f7ba4ecdf23d635d87dc208149
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

<<<<<<< HEAD
    @PostMapping("/albums/{id}/addSong")
    public Album addSongToAlbum(@PathVariable long id, @RequestBody Song song){
        Album album = albumRepo.findById(id).get();
        song.setAlbum(album);
        songRepo.save(song);
        return album;
    }

    @DeleteMapping("/songs/{id}")
    public Iterable<Song> deleteSong(@PathVariable long id)
    {
        songRepo.delete(songRepo.findById(id).get());
        return  songRepo.findAll();
    }
=======



>>>>>>> ff302ca6e1f3e5f7ba4ecdf23d635d87dc208149
}
