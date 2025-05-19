import Button from "./Button.jsx";
import Note from "./Note.jsx";

function NotesContainer({ notes, onClickAddNewNote, onDeleteNote }) {
  return (
    <div className="container">
      <h1>Мои заметки</h1>
      <Button
        className={"add-btn"}
        id={"openModalBtn"}
        onClick={onClickAddNewNote}
      >
        + Новая заметка
      </Button>
      <div className="notes-grid">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />
        ))}
      </div>
    </div>
  );
}

export default NotesContainer;
