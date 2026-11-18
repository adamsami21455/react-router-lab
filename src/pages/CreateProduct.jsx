import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });

  const navigate = useNavigate()

  
  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value })
  }


  
  async function handleSubmit(event){
    event.preventDefault() // Stops the form from refreshing and disables default behavior
    // TODO: send POST request to the API with the product Data

    const response = await axios.post('https://products-api-164h.onrender.com/products',formData)

    navigate('/products/' + response.data._id)
    
  }

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">title</label>
        <input 
        type="text" 
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input 
        type="text" 
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
        />

        <label htmlFor="category">Category:</label>
        <input 
        type="text" 
        name="category"
        id="category"
        value={formData.category}
        onChange={handleChange}
        />
         <label htmlFor="price">Price:</label>
        <input 
        type="number" 
        name="price"
        id="price"
        value={formData.price}
        onChange={handleChange}
        />
         <label htmlFor="quantity">quantity:</label>
        <input 
        type="number" 
        name="quantity"
        id="quantity"
        value={formData.quantity}
        onChange={handleChange}
        />

        <button>Create Product</button>

      </form>
    </div>
  );
}

export default CreateProduct;