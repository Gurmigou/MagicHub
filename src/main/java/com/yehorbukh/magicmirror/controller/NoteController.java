package com.yehorbukh.magicmirror.controller;

import com.yehorbukh.magicmirror.entity.NoteEntity;
import com.yehorbukh.magicmirror.exception.IllegalIndexException;
import com.yehorbukh.magicmirror.exception.note.NoteAlreadyExistsException;
import com.yehorbukh.magicmirror.exception.note.NoteNotExistsException;
import com.yehorbukh.magicmirror.model.Note;
import com.yehorbukh.magicmirror.service.NoteService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/notes")
@CrossOrigin("*")
public class NoteController {

    @Setter(onMethod=@__({@Autowired}))
    private NoteService noteService;

    @GetMapping("/{id}")
    public ResponseEntity<?> readNote(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(noteService.readNote(id));
        } catch (IllegalIndexException | NoteNotExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Note>> readListOfNotes() {
        return ResponseEntity.ok(noteService.readAllNotes());
    }

    @PostMapping
    public ResponseEntity<String> createNote(@RequestBody NoteEntity noteEntity) {
        try {
            noteService.createNote(noteEntity);
            return ResponseEntity.ok("A note was created");
        } catch (NoteAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateNote(@PathVariable("id") Long id,
                                             @RequestBody NoteEntity updates) {
        try {
            noteService.updateNote(id, updates);
            return ResponseEntity.ok("A note with id " + id + " was updated");
        } catch (IllegalIndexException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(@PathVariable("id") Long id) {
        try {
            noteService.deleteNote(id);
            return ResponseEntity.ok("A note with id " + id + " was deleted");
        } catch (IllegalIndexException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllNotes() {
        noteService.deleteAllNotes();
        return ResponseEntity.ok("All notes were deleted");
    }
}
