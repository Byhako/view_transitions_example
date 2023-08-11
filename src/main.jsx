import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App.jsx'
import BookPage from './pages/BookPage.jsx'
import NoFound from './pages/NoFound.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:book",
    element: <BookPage />
  },
  {
    path: "/nofound",
    element: <NoFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
