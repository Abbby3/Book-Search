import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ selectedOptions, onSearch, loading, setLoading }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      publisher: "",
    },
  });

  const onSubmit = async (terms) => {
    setLoading(true);

    for (const term in terms) {
      terms[term] = terms[term].trim().replace(" ", "+");
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${
      selectedOptions.title ? terms.title && "intitle:" + terms.title : ""
    }${selectedOptions.author ? terms.author && "+inauthor:" + terms.author : ""}${
      selectedOptions.publisher ? terms.publisher && "+inpublisher:" + terms.publisher : ""
    }`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.items) {
        const bookList = data.items.map((item) => {
          const bookObject = {
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors || [],
            thumbnail: item.volumeInfo.imageLinks?.thumbnail || "",
            description: item.volumeInfo.description || "",
            publisher: item.volumeInfo.publisher || "",
            publishedDate: item.volumeInfo.publishedDate || "",
            saleLink: item.saleInfo.buyLink || "",
          };
          return bookObject;
        });
        console.log(bookList);
        onSearch(bookList);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
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
  );
};

export default SearchBar;
