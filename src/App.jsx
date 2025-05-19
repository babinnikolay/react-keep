import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Мои заметки</h1>

        <button className="add-btn" id="openModalBtn">
          + Новая заметка
        </button>

        <div className="notes-grid">
          <div className="note">
            <button className="delete">×</button>
            <h3>Важные мысли</h3>
            <p>
              Простота — залог надежности. Лучше сделать меньше, но
              качественнее.
            </p>
          </div>
          <div className="note">
            <button className="delete">×</button>
            <h3>Покупки</h3>
            <ul>
              <li>Молоко</li>
              <li>Хлеб</li>
              <li>Яйца</li>
              <li>Фрукты</li>
            </ul>
          </div>
          <div className="note">
            <button className="delete">×</button>
            <h3>Важные мысли</h3>
            <p>
              Простота — залог надежности. Лучше сделать меньше, но
              качественнее.
            </p>
          </div>
          <div className="note">
            <button className="delete">×</button>
            <h3>Важные мысли</h3>
            <p>
              Простота — залог надежности. Лучше сделать меньше, но
              качественнее.
            </p>
          </div>
        </div>
      </div>

      <div className="modal" id="noteModal">
        <div className="modal-backdrop"></div>
        <div className="modal-content" id="modalContent">
          <div className="modal-header">
            <div className="modal-title">Новая заметка</div>
            <button className="close-btn" id="closeModalBtn">
              ×
            </button>
          </div>

          <div className="note-type-toggle">
            <button className="note-type-btn active" data-type="text">
              Текст
            </button>
            <button className="note-type-btn" data-type="list">
              Список
            </button>
          </div>

          <input
            type="text"
            className="note-input note-title"
            placeholder="Заголовок"
          />

          <div className="note-text-container">
            <textarea
              className="note-input note-text"
              placeholder="Текст заметки..."
            ></textarea>
          </div>

          <div className="note-list-items">
            <div className="list-items-container">
              <div className="list-item">
                <input type="text" placeholder="Элемент списка" />
              </div>
            </div>
            <button className="add-item-btn">+ Добавить пункт</button>
          </div>

          <div className="modal-actions">
            <button className="cancel-btn" id="cancelNoteBtn">
              Отмена
            </button>
            <button className="add-btn" id="saveNoteBtn">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
