export default function Title({ dataClass }) {
  return (
    <h1
      className={`text-6xl md:text-8xl font-black text-center py-8 px-4 ${dataClass}`}
      style={{viewTransitionName: 'title'}}
    >
      Libros de <span className='block text-[36px] md:text-[58px]'>programación</span>
    </h1>
  )
}
