import './App.scss'
import BookShelf from './components/BookShelf/BookShelf'
import fakeBooks from './data/fakeBooks'
import BookHeader from './components/BookHeader/BookHeader'


function App() {
  return (
    <div className='bookSearch'> 
      <BookHeader />
      <BookShelf fakeBooks={fakeBooks}/>
    </div>
  )
}

export default App
