import { Routes, Route} from "react-router"
import AllProducts from "./pages/ProductsList"
import CreateProduct from "./pages/CreateProduct"
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/ProductDetails"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/new-product" element={<CreateProduct />} />
          <Route path="/products/:productId" element={<ProductDetails />}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>

      </div>
  )
}

export default App
