import linkImg from "../../assets/link.png";
import styles from "./BookDetails.module.scss";

const BookDetails = ({ selectedBook, setSelectedBook }) => {
  const handleClose = () => {
    setSelectedBook(null);
  };

  return (
    selectedBook && (
      <div className={styles.modal}>
        <div className={styles.head}>
          <h2>{selectedBook.title}</h2>
          <button className={styles.btn} onClick={handleClose}>
            Close
          </button>
        </div>
        <p>Author(s): {selectedBook.authors.join(", ")}</p>
        <p>
          Publisher: {selectedBook.publisher ? selectedBook.publisher : "N/A"}
          {selectedBook.publishedDate && ", published " + selectedBook.publishedDate}
        </p>
        <p>{selectedBook.description}</p>
        {selectedBook.saleLink ? (
          <a
            className={styles.link}
            href={selectedBook.saleLink}
            target="_blank"
          >
            <img className={styles.img} src={linkImg} alt="external link" />
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
