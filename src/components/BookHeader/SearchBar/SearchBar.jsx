import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ selectedOptions }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      publisher: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (terms) => {
    setLoading(true);
    for (const term in terms) {
      terms[term] = terms[term].trim().replace(" ", "+");
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${
      terms.title && "intitle:" + terms.title
    }${terms.author && "+inauthor:" + terms.author}${
      terms.publisher && "+inpublisher:" + terms.publisher
    }`;

    const requestList = async () => {
      try {
        const res = await fetch(apiUrl);
        const bookList = await res.json();
        console.log(bookList);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    requestList();
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
