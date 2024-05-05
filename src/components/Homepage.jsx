// Homepage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import react-router-dom for navigation
import BookList from './BookList'; // Assuming you have a BookList component

function Homepage() {
  // Example book data (replace with actual fetched data)
  const [books, setBooks] = useState([]);

  // Fetch book data from your API (use useEffect or any other method)
  useEffect(() => {
    // Fetch books and update state (setBooks)
    // Replace this with your actual API call
    const fetchedBooks = [
      {
        id: 1,
        title: 'Example Book',
        description: 'This is an example book description.',
        author: 'John Doe',
        genre: 'Fiction',
        book_condition: 'good',
        availability_status: true,
        book_type: 'exchange',
      },
      // Add more book objects here
    ];
    setBooks(fetchedBooks);
  }, []);

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1>Welcome to Your Bookstore</h1>
        <Link to="/user-profile" className="profile-link">
          User Profile
        </Link>
      </header>

      {/* Book List */}
      <BookList books={books} />

      {/* Other content (if needed) */}
    </div>
  );
}

export default Homepage;
