import React from "react";
import styles from "./BookShelf.module.scss";

const BookShelf = ({ bookList, loading, onSelect }) => {
  const handleClick = (book) => {
    onSelect(book);
  };

  return (
    <div className={styles.shelf}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        bookList.map((book, index) =>
          book.thumbnail ? (
            <img
              key={index}
              src={book.thumbnail}
              alt={book.title}
              className={styles.book}
              onClick={() => handleClick(book)}
            />
          ) : (
            <div key={index} className={styles.book} onClick={() => handleClick(book)}>
              <p className={styles.text}>{book.title}</p>
              <p className={styles.text}>{book.authors.join(", ")}</p>
            </div>
          )
        )
      )}
    </div>
  );
};

export default BookShelf;
