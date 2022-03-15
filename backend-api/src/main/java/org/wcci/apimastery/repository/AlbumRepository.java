package org.wcci.apimastery.repository;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.entity.Album;

import java.util.Optional;


    public interface AlbumRepository extends CrudRepository<Album, Long> {
        Optional<Album> findByNameIgnoreCase(String title);
    }

