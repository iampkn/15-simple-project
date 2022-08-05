import React, { useState } from "react";

function AddBook() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [rating, setRating] = useState([]);
  function handleInput(e) {
    setBooks(e.target.value);
  }

  function handleSubmit(e) {}
  return (
    <div className="">
      <form action="">
        <div className="book-lable">
          <label htmlFor="label">Lable</label>
          <input
            type="text"
            value={books}
            className="book-input"
            onChange={handleInput}
            placeholder="Adding the name of book"
          />
        </div>
        <div className="book-author">
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            value={authors}
            className="book-input"
            onChange={(e) => {
              setAuthors(e.target.value);
            }}
            placeholder="Adding the author of book"
          />
        </div>
        <div className="book-rating">
          <label htmlFor="Rating">Rating</label>
          <input
            type="number"
            value={rating}
            min={0}
            max={10}
            className="book-input"
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </div>
      </form>
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddBook;
