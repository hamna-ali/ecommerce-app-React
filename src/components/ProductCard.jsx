import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  // Convert rating to integer stars
  const rating = Math.round(product.rating?.rate || 0);

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      {/* Rating */}
      <div className="mb-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>

      {/* Price */}
      <p className="text-orange-500 font-semibold mb-1">
        Rs {product.price.toLocaleString()}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.description}</p>

      {/* Buy Now Button */}
      <button
        className="mt-auto bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition"
        disabled
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
