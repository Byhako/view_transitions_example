import { flushSync } from 'react-dom'
import { useNavigate } from "react-router-dom";

export default function BookItem({ title, image, id }) {

  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    if (!document.startViewTransition) {
      navigate(e.target.getAttribute('data-href'))
      return
    }

    document.startViewTransition(() => {
      flushSync(() => navigate(e.target.getAttribute('data-href')))
    })
  }

  return (
    <div
      className='cursor-pointer hover:scale-105 inline-block transitions-all hover:contrast-125 hover:shodow-2xl'
      onClick={handleClick}
    >
      <img
        className='aspect-[389/500] h-full object-cover w-full max-w-full rounded-lg'
        src={image}
        alt={title}
        data-href={`/${id}`}
        style={{viewTransitionName: `image-${id}`}}
      />
    </div>
  )
}
