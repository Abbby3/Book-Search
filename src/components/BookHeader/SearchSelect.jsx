import styles from "../../styles/SearchSelect.module.scss";
import { useForm } from "react-hook-form";

const SearchSelect = ({ selectedOptions, setSelectedOptions }) => {
  const { register } = useForm();

  const handleChange = (option) => {
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    }));
  };

  return (
    <div className={styles.searchSelect}>
      <p>Search by:</p>
      <form className={styles.selectForm}>
        <label>
          <input
            className={styles.selectCheck}
            type="checkbox"
            {...register("title")}
            onChange={() => handleChange("title")}
            checked={selectedOptions.title}
          />
          Title
        </label>

        <label>
          <input
            className={styles.selectCheck}
            type="checkbox"
            {...register("author")}
            onChange={() => handleChange("author")}
            checked={selectedOptions.author}
          />
          Author
        </label>

        <label>
          <input
            className={styles.selectCheck}
            type="checkbox"
            {...register("publisher")}
            onChange={() => handleChange("publisher")}
            checked={selectedOptions.publisher}
          />
          Publisher
        </label>
      </form>
    </div>
  );
};

export default SearchSelect;
