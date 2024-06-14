import { useEffect, useState } from 'react'
import axios from 'axios';

import './styles/App.css'
import Services from './Service/Services';

function App() {

  const [products,setProducts]=useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const getProducts=async()=>{
 await   Services.getProducts().then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  useEffect(()=>{
    getProducts();
  },[]);

  console.log(products);



  return (
    <>
      <div>
          <h1 className="text-center font-bold w-full p-5 text-4xl">Products</h1>
        <div className="w-full p-5">
          <input
            placeholder="Type some words related to the products"
            className="w-full border  p-2.5 rounded-lg focus:border-brightgreen border-bordergray focus:outline-0"
            type="text"
            name="searchbar"
            id="searchbar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span></span>
        </div>
        <div className="grid grid-cols-3 px-10  py-10 gap-5 w-full">
          {products.map((product) => {
            return (
              <div className="text-black font-bold hover:cursor-pointer rounded-md  w-78 bg-white p-10">
                <h1 className="">productName:{product.productName}</h1>
                <h1 className="">productprice:{product.price}</h1>
                <h1 className="">productavailability:{product.availability}</h1>
                <h1 className="">rating:{product.rating}</h1>
                <h1 className="">discount:{product.discount}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={getProducts}>click me</button>
    </>
  );
}

export default App
