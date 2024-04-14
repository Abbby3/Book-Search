import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../styles/SearchBar.module.scss";
import fetchBooks from "../../services/FetchBooks";

const SearchBar = ({ selectedOptions, onSearch, loading, setLoading }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      publisher: "",
    },
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (terms) => {
    await fetchBooks(terms, setLoading, onSearch, setErrorMsg);
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(selectedOptions).map(
          (option) =>
            selectedOptions[option] && (
              <input
                key={option}
                type="text"
                {...register(option)}
                placeholder={`Search by ${option}...`}
                className={styles.searchText}
                required
              />
            )
        )}

        {selectedOptions.title || selectedOptions.author || selectedOptions.publisher ? (
          <button type="submit" disabled={loading} className={styles.searchBtn}>
            {loading ? "Loading" : "Search"}
          </button>
        ) : (
          <p>Please select a search option</p>
        )}
      </form>
      <p className={styles.error}>{errorMsg}</p>
    </>
  );
};

export default SearchBar;
