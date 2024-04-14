import React from "react";
import styles from './Book.module.scss'


const Book = (props) => {
  const { id, volumeInfo } = props.book;
  const { title, authors, publisher, publishDate, description } = volumeInfo;

  return (
    <div className={styles.card} key={id}>
      <h3>{title}</h3>
      <p>Authors: {authors.join(", ")}</p>
      <p>Publisher: {publisher}</p>
      <p>Publish Date: {publishDate}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Book;
