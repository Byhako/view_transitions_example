import BookItem from "./BookItem";

const books = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg'
  },
  {
    id: 'refactoring-code',
    title: 'Refactoring Code',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg'
  },
  {
    id: 'code-complete',
    title: 'Code Complete',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1396837641i/4845.jpg'
  },
  {
    id: 'structure-interpretation',
    title: 'Structure and Interpretation',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391032527i/43713.jpg'
  }
]

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
