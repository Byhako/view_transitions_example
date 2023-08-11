import { useEffect } from 'react'
import { flushSync } from 'react-dom'

import { useParams, useNavigate } from 'react-router-dom'
import { books } from '../assets/books'
import Title from '../components/Title';

export default function BookPage() {
  const navigate = useNavigate();
  const { book } = useParams()
  const info = books.find(b => b.id === book)

  useEffect(() => {
    if (!info) {
      navigate("/nofound");
    }
  }, [info, navigate])

  const handleClick = (e) => {
    e.preventDefault()
    if (!document.startViewTransition) {
      navigate('/')
      return
    }

    document.startViewTransition(() => {
      flushSync(() => navigate('/'))
    })
  }

  return (
    <main className='m-auto mxa-w-4xl'>
      <Title dataClass='scale-75' />
      <div className='grid grid-cols-2 gap-x-4'>
        <div className='flex flex-col items-center '>
          <picture className='mb-8 relative'>
            <img
              className='max-w-[300px] aspect-[389/500] h-full object-cover w-full max-w-full rounded-lg'
              src={info.image}
              alt={info.id}
              style={{viewTransitionName: `image-${info.id}`}}
            />
          </picture>

          <button type="button" className="w-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
            <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            </svg>
            Comprar
          </button>

          <button
            type="button"
            className="mt-5 w-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
            onClick={handleClick}
          >
            Regresar
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
        </div>

        <aside>
          <h1 className='text-5xl md:text-4xl font-black mb-4'>{info.title}</h1>
        </aside>
      </div>
    </main>
  )
}
