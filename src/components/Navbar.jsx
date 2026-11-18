import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
        <Link to='/products'>All Products </Link>
        <br></br>
        <Link to ='/new-product'> Create Products</Link>
    </nav>
  )
}

export default Navbar