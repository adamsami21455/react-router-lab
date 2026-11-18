import { useParams } from "react-router"
import axios from "axios"
import { useState, useEffect} from "react"


function ProductDetails() {
    const [ product, setProduct] = useState(null)

    const {productId} = useParams()
    console.log(productId)

    async function getProduct() {
        const response = await axios.get(`https://products-api-164h.onrender.com/products/${productId}`) 
            setProduct(response.data)

    }

    useEffect(()=>{
        getProduct()



    },[]
)

  return (
    <div>
        <h1>Product Details</h1>
        {product ? 
        <> 
        <p> Title : {product.title} </p>
        <p> Description: {product.description} </p>
        <p> Category: {product.category} </p>
        <p> Price: {product.price} </p>
        <p> Quantity: {product.quantity} </p>
        <p> Created At: {product.createdAt} </p>
        <p> Updated At: {product.updatedAt}  </p>
         </> 
         : null}
        
    </div>
  )
}

export default ProductDetails
