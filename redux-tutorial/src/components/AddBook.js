import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/slices/bookSlice";

function AddBook() {
  const [title, setTitle] = useState([]);
  const [author, setAuthors] = useState([]);
  const [rating, setRating] = useState("5");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        rating,
      })
    );
  };

  function handleInput(e) {
    setTitle(e.target.value);
  }
  return (
    <div className="">
      <form action="">
        <div className="book-lable">
          <label htmlFor="label">Lable</label>
          <input
            type="text"
            value={title}
            className="book-input"
            onChange={handleInput}
            placeholder="Adding the name of book"
          />
        </div>
        <div className="book-author">
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            value={author}
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
