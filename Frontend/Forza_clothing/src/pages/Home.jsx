import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get()
        .then(res => setProducts(res.data))
        .catch(err=>console.log(err))

    },[]);
  return (
    <div className="p-4">
      <div className="text-2xl font-bold mb-4">Featured Products</div>
      <dv classname="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </dv>
    </div>
  );
}

export default Home