import './App.scss'
import BookShelf from './components/BookShelf/BookShelf'
import SearchBar from './components/SearchBar/SearchBar'
import fakeBooks from './data/fakeBooks'


function App() {
  return (
    <div> 
      <header>
        <h1>Book Search</h1>
        <SearchBar />
      </header>
      <BookShelf fakeBooks={fakeBooks}/>
    </div>
  )
}

export default App
