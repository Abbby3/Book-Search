import { useState } from "react";

const BookHeaderLogic = ({ onSearch, setLoading }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    title: false,
    author: false,
    publisher: false,
  });

  const handleSearch = (data) => {
    onSearch(data);
    setLoading(false);
  };

  return {
    selectedOptions,
    setSelectedOptions,
    handleSearch,
  };
};

export default BookHeaderLogic;
