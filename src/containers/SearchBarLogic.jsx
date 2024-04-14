import { useState } from "react";
import { useForm } from "react-hook-form";
import FetchBooks from "../services/FetchBooks";

const SearchBarLogic = ({ selectedOptions, onSearch, setLoading }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      author: "",
      publisher: "",
    },
  });

  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (terms) => {
    await FetchBooks(terms, selectedOptions, setLoading, onSearch, setErrorMsg);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errorMsg,
  };
};

export default SearchBarLogic;
