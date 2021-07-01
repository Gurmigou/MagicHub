package com.yehorbukh.magicmirror.service;

import com.yehorbukh.magicmirror.entity.NoteEntity;
import com.yehorbukh.magicmirror.exception.IllegalIndexException;
import com.yehorbukh.magicmirror.exception.note.NoteAlreadyExistsException;
import com.yehorbukh.magicmirror.exception.note.NoteNotExistsException;
import com.yehorbukh.magicmirror.model.Note;
import com.yehorbukh.magicmirror.repository.NoteRepo;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class NoteService {

    @Setter(onMethod=@__({@Autowired}))
    private NoteRepo noteRepo;

    public Note readNote(Long id) throws IllegalIndexException, NoteNotExistsException {
        if (id <= 0)
            throw new IllegalIndexException("Id must be a positive number");
        var noteEntity = noteRepo.findById(id).orElseThrow(
                () -> new NoteNotExistsException("Note with id " + id + " doesn't exist"));
        return Note.toNote(noteEntity);
    }

    public List<Note> readAllNotes() {
        var iterable = noteRepo.findAll();
        List<Note> noteList = new ArrayList<>();

        for (var noteEntity : iterable)
            noteList.add(Note.toNote(noteEntity));

        return noteList;
    }

    public void createNote(NoteEntity noteEntity) throws NoteAlreadyExistsException {
        if (noteRepo.existsNoteEntityByAuthorNameAndDescription(
                noteEntity.getAuthorName(), noteEntity.getDescription())) {
            throw new NoteAlreadyExistsException("Note: " + noteEntity + " already exists");
        }
        noteEntity.setId(null);
        noteEntity.setCreationDate(new Date(System.currentTimeMillis()));
        noteRepo.save(noteEntity);
    }

    private boolean updateIsEmpty(NoteEntity updates) {
        return updates.getAuthorName() == null && updates.getDescription() == null &&
               updates.getCreationDate() == null && updates.getDeadlineDate() == null;
    }

    private void updateStoredEntity(NoteEntity storedEntity, NoteEntity updates) {
        if (updates.getAuthorName() != null)
            storedEntity.setAuthorName(updates.getAuthorName());
        if (updates.getDescription() != null)
            storedEntity.setDescription(updates.getDescription());
        if (updates.getCreationDate() != null)
            storedEntity.setCreationDate(updates.getCreationDate());
        if (updates.getDeadlineDate() != null)
            storedEntity.setDeadlineDate(updates.getDeadlineDate());
    }

    public void updateNote(Long id, NoteEntity updates) throws IllegalIndexException {
        if (id <= 0)
            throw new IllegalIndexException("Id must be a positive number");
        if (!updateIsEmpty(updates)) {
            var storedEntity = noteRepo.findById(id).orElseThrow(() ->
                    new IllegalIndexException("NoteEntity with id " + id + " doesn't exist"));

            updateStoredEntity(storedEntity, updates);
            noteRepo.save(storedEntity);
        }
    }

    public void deleteNote(Long id) throws IllegalIndexException {
        if (id <= 0)
            throw new IllegalIndexException("Id must be a positive number");
        if (!noteRepo.existsById(id))
            throw new IllegalIndexException("NoteEntity with id " + id + " doesn't exist");
        noteRepo.deleteById(id);
    }

    public void deleteAllNotes() {
        noteRepo.deleteAll();
    }
}
