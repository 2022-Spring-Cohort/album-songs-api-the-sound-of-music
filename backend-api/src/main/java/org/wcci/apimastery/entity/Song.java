package org.wcci.apimastery.entity;

import javax.persistence.*;
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

    @ManyToOne()
    private Album album;

    public Song() {
    }

    public Song(String title, String link, int duration, Collection<String> comments, int ratings, Album album) {
        this.title = title;
        this.link = link;
        this.duration = duration;
        this.comments = comments;
        this.ratings = ratings;
        this.album = album;
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
}
