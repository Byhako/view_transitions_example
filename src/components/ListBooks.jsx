import BookItem from "./BookItem";
import { books } from '../assets/books'


export default function ListBooks() {

  return (
    <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 px-4'>
      {books.map(book => (
        <li key={book.id}>
          <BookItem id={book.id} title={book.title} image={book.image} />
        </li>
      ))}
    </ul>
  )
}
