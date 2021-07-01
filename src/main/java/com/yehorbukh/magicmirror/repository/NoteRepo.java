package com.yehorbukh.magicmirror.repository;

import com.yehorbukh.magicmirror.entity.NoteEntity;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepo extends CrudRepository<NoteEntity, Long> {
    boolean existsNoteEntityByAuthorNameAndDescription(String authorName, String description);
}
