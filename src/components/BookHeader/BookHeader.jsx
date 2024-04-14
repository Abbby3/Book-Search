import React from "react";
import styles from "../../styles/BookHeader.module.scss";
import SearchSelect from "./SearchSelect";
import SearchBar from "./SearchBar";
import BookHeaderLogic from "../../containers/BookHeaderLogic";

const BookHeader = ({ onSearch, loading, setLoading }) => {
  const { selectedOptions, setSelectedOptions, handleSearch } = BookHeaderLogic({
    onSearch,
    setLoading,
  });

  return (
    <header className={styles.head}>
      <h1>Book Search</h1>
      <p>On this page, you can lookup books by title, author, and publisher.</p>
      <SearchSelect
        options={["title", "author", "publisher"]}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <SearchBar
        selectedOptions={selectedOptions}
        onSearch={handleSearch}
        loading={loading}
        setLoading={setLoading}
      />
    </header>
  );
};

export default BookHeader;
