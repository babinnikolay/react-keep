function ListItem({ item, items, index, setNewNote, newNote }) {
  return (
    <div className="list-item">
      <input
        type="text"
        placeholder="Элемент списка"
        value={item}
        onChange={(e) => {
          items[index] = e.target.value;
          setNewNote({ ...newNote, children: items });
        }}
      />
    </div>
  );
}

export default ListItem;
