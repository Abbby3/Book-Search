import React from "react";
import styles from "./BookShelf.module.scss";

const BookShelf = ({ bookList, loading }) => {
  return (
    <div className={styles.shelf}>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        bookList.map((book, index) => (
          <img key={index} src={book.thumbnail} alt={book.title} className={styles.book} />
        ))
      )}
    </div>
  );
};

export default BookShelf;
