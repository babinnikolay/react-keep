import Button from "./Button.jsx";

function NoteTypeToggle({ newNote, handleToggleNoteType }) {
  return (
    <div className="note-type-toggle">
      <Button
        className={`note-type-btn ${newNote.type === "text" && "active"}`}
        onClick={() => handleToggleNoteType("text")}
      >
        Текст
      </Button>
      <Button
        className={`note-type-btn ${newNote.type === "list" && "active"}`}
        onClick={() => handleToggleNoteType("list")}
      >
        Список
      </Button>
    </div>
  );
}

export default NoteTypeToggle;
