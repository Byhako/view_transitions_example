// import { useEffect } from 'react'
import ListBooks from '../components/ListBooks'
import Title from '../components/Title'
import './App.css'

function App() {

  // useEffect(() => {
  //   window.navigation.addEventListener('navigate', (event) => {
  //     // Evitamos animar si vamos a pagina externa
  //     if (location.origin !== toUrl.origin) return

  //     event.intercept({
  //       async handler () {
  //         // // Cargar pagina de destino usando un fetch
  //         // //  para obtener el HTML
  //         // const response = await fetch(toUrl.pathname)
  //         // const text = await response.text()
          
  //         // // usamos regex para obtener contenido dentro de body
  //         // const data = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
  //         const data = document.getElementById('root')

  //         // Uzamos api View Transition
  //         // document.startViewTransition(() => {
  //         //   document.body.innerHTML = data
  //         //   document.documentElement.scrollTop = 0
  //         // })
  //       }
  //     })
  //   })
  // }, [])


  return (
    <main className='m-auto max-w-4xl'>
      <Title />
      <ListBooks className='wrapper-books' />
    </main>
  )
}

export default App
