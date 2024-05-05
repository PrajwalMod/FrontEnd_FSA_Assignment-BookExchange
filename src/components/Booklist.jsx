// BookList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Common.css';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.coverImage} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
