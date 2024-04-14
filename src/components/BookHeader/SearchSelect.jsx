import React from "react";
import styles from "../../styles/SearchSelect.module.scss";
import SearchSelectLogic from "../../containers/SearchSelectLogic";

const SearchSelect = ({ options, selectedOptions, setSelectedOptions }) => {
  const { register, handleChange } = SearchSelectLogic({ setSelectedOptions });

  return (
    <div className={styles.searchSelect}>
      <p>Search by:</p>
      <form className={styles.selectForm}>
        {options.map((option) => (
          <label key={option}>
            <input
              className={styles.selectCheck}
              type="checkbox"
              {...register(option)}
              onChange={() => handleChange(option)}
              checked={selectedOptions[option]}
            />
            {option}
          </label>
        ))}
      </form>
    </div>
  );
};

export default SearchSelect;
