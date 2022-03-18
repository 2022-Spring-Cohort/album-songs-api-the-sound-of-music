package org.wcci.apimastery.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String link;
    private int duration;
    @ElementCollection
    private Collection<String> comments;
    private int ratings;

    @ManyToOne
    @JsonIgnore
    private Album album;

    public Song() {
    }

    public Song(String title, String link, int duration, int ratings, Album album, String...comments) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.ratings = ratings;
        this.album = album;
        this.comments = Arrays.asList(comments);
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getLink() {
        return link;
    }

    public int getDuration() {
        return duration;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public int getRatings() {
        return ratings;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public void addComments(String newComment){
        comments.add(newComment);
    }

    public void updateTitle(String newTitle){
        title = newTitle;
    }
}
