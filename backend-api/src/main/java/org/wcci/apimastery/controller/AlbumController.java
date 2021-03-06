package org.wcci.apimastery.controller;


import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entity.Album;
import org.wcci.apimastery.entity.Song;
import org.wcci.apimastery.repository.AlbumRepository;
import org.wcci.apimastery.repository.SongRepository;

import java.util.Collection;

@RestController
public class AlbumController {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public AlbumController(AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/albums")
    public Iterable<Album> getAlbums(){
        return albumRepo.findAll();
    }
    @GetMapping("/albums/{id}")
    public Album getAlbum(@PathVariable long id){
        return albumRepo.findById(id).get();
    }

// I added the same code below into songController
//    @PostMapping("/albums/{id}/addSong")
//    public Album addSongToAlbum(@PathVariable long id, @RequestBody Song song){
//        Album album = albumRepo.findById(id).get();
//        song.setAlbum(album);
//        songRepo.save(song);
//        return album;
//    }
    @PostMapping("/albums/addAlbum")
    public Iterable<Album> addNewAlbum(@RequestBody Album album) {
       albumRepo.save(album);
       return getAlbums();
    }


    @DeleteMapping("/albums/{id}")
    public Iterable<Album> deleteAlbum(@PathVariable long id)
    {
        albumRepo.delete(albumRepo.findById(id).get());
        return  albumRepo.findAll();
    }
    @PostMapping("/albums/{id}/updateAlbumComment")
    public Iterable<Album> updateAlbumComment(@PathVariable long id, @RequestBody String newComment) {
        Album theAlbum = albumRepo.findById(id).get();
        theAlbum.addComments(newComment);
        albumRepo.save(theAlbum);

        return albumRepo.findAll();
    }
    @PatchMapping("/albums/{id}")
    public Iterable<Album> UpdateAlbumName(@PathVariable long id, @RequestBody String newTitle)
    {
        Album album  = albumRepo.findById(id).get();

        album.updateTitle(newTitle);
        albumRepo.save(album);
        return  albumRepo.findAll();
    }
}
