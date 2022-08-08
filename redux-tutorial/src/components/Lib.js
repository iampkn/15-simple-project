import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../store/slices/bookSlice";

function Lib() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteBook({ id: id }));
  }
  const booksTable = books.map((book) => (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button className="btn" onClick={() => handleDelete(book.id)}>
          X
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="library">
      <h2>Library</h2>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Rating</td>
            <td>Function</td>
          </tr>
        </thead>
        <tbody>{booksTable}</tbody>
      </table>
    </div>
  );
}

export default Lib;
