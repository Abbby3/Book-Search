import React from "react";
import styles from "./BookDetails.module.scss";

const BookDetails = ({ selectedBook, setSelectedBook }) => {
  const handleClose = () => {
    setSelectedBook(null);
  };
  console.log(selectedBook);

  return (
    selectedBook && (
      <div className={styles.modal}>
        <button onClick={handleClose}>Close</button>
        <h2>{selectedBook.title}</h2>
        <p>Author(s): {selectedBook.authors.join(", ")}</p>
        <p>
          Publisher: {selectedBook.publisher}, published {selectedBook.publishedDate}
        </p>
        <p>{selectedBook.description}</p>
        {selectedBook.saleLink ? (
          <a href={selectedBook.saleLink} target="_blank" rel="noopener noreferrer">
            More Information
          </a>
        ) : (
          <p>This book is not currently available.</p>
        )}
      </div>
    )
  );
};

export default BookDetails;
