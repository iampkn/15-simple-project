import React from "react";

function Lib() {
  function handleDelete(id) {}
  return (
    <div className="library">
      <h2>Library</h2>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Rating</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trade</td>
            <td>CZ</td>
            <td>10</td>
            <td>
              <button className="btn" onClick={handleDelete}>
                Del
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Lib;
