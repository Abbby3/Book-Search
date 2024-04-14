import styles from './BookHeader.module.scss'
import SearchSelect from './SearchSelect/SearchSelect'
import SearchBar from './SearchBar/SearchBar'
import { useState } from "react";


const BookHeader = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    title: false,
    author: false,
    publisher: false,
  });

  return (
    <header className={styles.head}>
      <h1>Book Search</h1>
      <p>On this page, you can lookup books by title, author and publisher.</p>
      <SearchSelect selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
      <SearchBar selectedOptions={selectedOptions} />
    </header>
  );
}

export default BookHeader