import styles from "../../styles/SearchBar.module.scss";
import SearchBarLogic from "../../containers/SearchBarLogic";

const SearchBar = ({ selectedOptions, onSearch, loading, setLoading }) => {
  const { register, handleSubmit, onSubmit, errorMsg } = SearchBarLogic({
    selectedOptions,
    onSearch,
    setLoading,
  });

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
