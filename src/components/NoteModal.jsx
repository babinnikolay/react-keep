import Button from "./Button.jsx";
import { useState } from "react";
import ListItem from "./ListItem.jsx";
import NoteTypeToggle from "./NoteTypeToggle.jsx";

function NoteModal({ modalVisible, onSaveNewNote, onToggleModalVisible }) {
  const initNote = {
    id: Date.now(),
    type: "text",
    title: "",
    text: "",
    children: [""],
  };

  const initItems = [];

  const [newNote, setNewNote] = useState(initNote);
  const [items, setItems] = useState(initItems);

  function handleAddNewNote() {
    if (!newNote.title) {
      return;
    }
    onSaveNewNote(newNote);
    onToggleModalVisible();
    setNewNote(initNote);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  }

  function handleToggleNoteType(type) {
    setNewNote({ ...newNote, type, children: items });
  }

  function handleAddNewItem() {
    setItems([...items, ""]);
    setNewNote({ ...newNote, children: [...items, ""] });
  }

  return (
    <div className={`modal ${modalVisible && "active"}`} id="noteModal">
      <div className="modal-backdrop"></div>
      <div className="modal-content" id="modalContent">
        <div className="modal-header">
          <div className="modal-title">Новая заметка</div>
          <Button
            className={"close-btn"}
            id="closeModalBtn"
            onClick={onToggleModalVisible}
          >
            ×
          </Button>
        </div>

        <NoteTypeToggle
          newNote={newNote}
          handleToggleNoteType={handleToggleNoteType}
        />

        <input
          type="text"
          name="title"
          className="note-input note-title"
          placeholder="Заголовок"
          value={newNote.title}
          onChange={handleInputChange}
        />

        <div
          className={`note-text-container ${newNote.type === "text" && "active"}`}
        >
          <textarea
            className="note-input note-text"
            placeholder="Текст заметки..."
            name="text"
            value={newNote.text}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div
          className={`note-list-items ${newNote.type === "list" && "active"}`}
        >
          <div className="list-items-container">
            {items.map((item, i) => (
              <ListItem
                key={i}
                items={items}
                index={i}
                setNewNote={setNewNote}
                newNote={newNote}
              />
            ))}
          </div>
          <Button className={"add-item-btn"} onClick={handleAddNewItem}>
            + Добавить пункт
          </Button>
        </div>

        <div className="modal-actions">
          <Button
            className={"cancel-btn"}
            id="cancelNoteBtn"
            onClick={onToggleModalVisible}
          >
            Отмена
          </Button>
          <Button
            className={"add-btn"}
            id="saveNoteBtn"
            onClick={handleAddNewNote}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
