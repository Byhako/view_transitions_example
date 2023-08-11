import { Link } from "react-router-dom";

export default function NoFound() {
  return (
    <>
      <h1 className="text-6xl py-8">Aquí no hay nada 😝</h1>
      <Link to='/'>Home</Link>
    </>
  )
}
