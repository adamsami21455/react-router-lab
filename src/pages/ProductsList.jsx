import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router"

function AllProducts(){
    const [ products, setProducts ] = useState([])

    async function getAllProducts(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
        console.log(response.data)
        setProducts(response.data)
    }
    useEffect(()=>{
        getAllProducts()
    },[])
  

    return(
        <div>
            <h2>All Products</h2>
            {products.map((oneProduct)=>
            <div key={oneProduct._id}>
                <p>Title:{oneProduct.title}</p>
                 <Link to={`/products/${oneProduct._id}`}>See Details</Link>
            </div>
            )}
        </div>
    )
}

export default AllProducts