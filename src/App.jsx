import "./App.css";
import NoteModal from "./components/NoteModal.jsx";
import NotesContainer from "./components/NotesContainer.jsx";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState.js";

function App() {
  const [stored, setStored] = useLocalStorageState([], "notes");
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState(stored);

  useEffect(() => {
    setStored(notes);
  }, [notes, setStored]);

  function handleToggleModal() {
    setModalVisible(!modalVisible);
  }

  function handleSaveNewNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <>
      <NotesContainer
        notes={notes}
        onClickAddNewNote={handleToggleModal}
        onDeleteNote={handleDeleteNote}
      />
      <NoteModal
        modalVisible={modalVisible}
        onSaveNewNote={handleSaveNewNote}
        onToggleModalVisible={handleToggleModal}
      />
    </>
  );
}

export default App;
