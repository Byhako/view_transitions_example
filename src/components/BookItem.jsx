export default function BookItem({ title, image, id }) {

  return (
    <a
      className='hover:scale-105 inline-block transitions-all hover:contrast-125 hover:shodow-2xl'
      href={`/book?id=${id}`}
    >
      <img
        className='aspect-[389/500] h-full object-cover w-full max-w-full rounded-lg'
        src={image}
        alt={title}
      />
    </a>
  )
}
