package org.wcci.apimastery.repository;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entity.Song;

import java.util.Optional;

public class SongRepository {

    public interface AlbumRepository extends CrudRepository<Song, Long> {
        Optional<AlbumRepository> findByNameIgnoreCase(String title);
    }
}
