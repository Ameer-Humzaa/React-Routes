import React from 'react'
import { useEffect, useState } from "react";

export default function Fetch() {
  const [products, setProducts] = useState([]); // state to store data
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    // Fetch data when component mounts
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // store products in state
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []); // [] ensures it runs only once

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-indigo-600 font-semibold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
}








