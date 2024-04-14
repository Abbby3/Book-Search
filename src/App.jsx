import "./App.scss";
import BookShelf from "./components/BookShelf/BookShelf";
import BookHeader from "./components/BookHeader/BookHeader";
import { useState } from "react";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = (bookList) => {
    setBookList(bookList);
  };
  const handleSelect = (selectedBook) => {
    setSelectedBook(selectedBook);
  };

  return (
    <div className="bookSearch">
      <BookHeader onSearch={handleSearch} loading={loading} setLoading={setLoading} />
      <BookShelf bookList={bookList} loading={loading} onSelect={handleSelect} />
      {selectedBook && (
        <BookDetails selectedBook={selectedBook} setSelectedBook={setSelectedBook} />
      )}
    </div>
  );
}

export default App;
