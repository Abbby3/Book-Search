import React from "react";
import Book from "./Book/Book";
import styles from "./BookShelf.module.scss";

const BookShelf = ({ fakeBooks }) => {
  return (
    <div className={styles.shelf}>
      {fakeBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookShelf;
