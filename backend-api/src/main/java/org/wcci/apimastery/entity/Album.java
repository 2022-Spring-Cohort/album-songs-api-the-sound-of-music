package org.wcci.apimastery.entity;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Arrays;
import java.util.Collection;
import javax.persistence.*;

@Entity
public class Album {

    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String image;
    private String recordLabel;
    @ElementCollection
    private Collection<String> comments;
    private int ratings;

    @OneToMany(mappedBy="album")
    private Collection<Song> songs;

    public Album() {
    }

    public Album(String title, String image, String recordLabel, Collection<String> comments, int ratings, Song...songs) {
        this.title = title;
        this.image = image;
        this.recordLabel = recordLabel;
        this.comments = comments;
        this.ratings = ratings;
        this.songs = Arrays.asList(songs);
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getImage() {
        return image;
    }

    public String getRecordLabel() {
        return recordLabel;
    }

    public Collection<String> getComments() {
        return comments;
    }

    public int getRatings() {
        return ratings;
    }

    public Collection<Song> getSongs() {
        return songs;
    }
}
