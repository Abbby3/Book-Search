const FetchBooks = async (searchOptions, selectedOptions, setLoading, onSearch, setErrorMsg) => {
  setErrorMsg("");
  onSearch([]);
  setLoading(true);

  for (const term in searchOptions) {
    searchOptions[term] = searchOptions[term].trim().replace(" ", "+");
  }

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=
  ${
    selectedOptions.title && searchOptions.title
      ? searchOptions.title && "intitle:" + searchOptions.title
      : ""
  }
  ${
    selectedOptions.author && searchOptions.author
      ? searchOptions.author && "+inauthor:" + searchOptions.author
      : ""
  }
  ${
    selectedOptions.publisher && searchOptions.publisher
      ? searchOptions.publisher && "+inpublisher:" + searchOptions.publisher
      : ""
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
      onSearch(bookList);
    } else {
      setErrorMsg("Could not find books under that search.");
    }
  } catch (err) {
    console.error(err);
    setErrorMsg("Error: please try again later.");
  } finally {
    setLoading(false);
  }
};

export default FetchBooks;
