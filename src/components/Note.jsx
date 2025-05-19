import Button from "./Button.jsx";

function Note({ note, onDeleteNote }) {
  return (
    <div key={note.id} className="note">
      <Button className={"delete"} onClick={() => onDeleteNote(note.id)}>
        ×
      </Button>
      <h3>{note.title}</h3>
      {note?.text && <p>{note.text}</p>}
      {note?.children && !note.text && (
        <ul>
          {note.children.map((child, i) => (
            <li key={i}>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Note;
