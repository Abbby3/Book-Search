import { useState } from "react";
import { useForm } from "react-hook-form";

const SearchSelectLogic = ({ setSelectedOptions }) => {
  const [registered, setRegistered] = useState(false);
  const { register } = useForm();

  const handleChange = (option) => {
    setSelectedOptions((selectedOptions) => ({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    }));
  };

  return { register, handleChange, registered };
};

export default SearchSelectLogic;
