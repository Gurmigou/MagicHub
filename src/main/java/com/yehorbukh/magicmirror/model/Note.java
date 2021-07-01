package com.yehorbukh.magicmirror.model;

import com.yehorbukh.magicmirror.entity.NoteEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@ToString
@NoArgsConstructor
@Getter
@Setter
public class Note {
    private String authorName;
    private String description;
    private Date creationDate;
    private Date deadlineDate;

    public static Note toNote(NoteEntity noteEntity) {
        var note = new Note();
        note.authorName = noteEntity.getAuthorName();
        note.description = noteEntity.getDescription();
        note.creationDate = noteEntity.getCreationDate();
        note.deadlineDate = noteEntity.getDeadlineDate();
        return note;
    }
}
