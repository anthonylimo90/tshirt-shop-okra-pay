import React from "react";
import { useCart } from "./CartContext";

const ProductItem = ({product}) => {
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    }

    return (
        <div className="border p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 mt-4 hover:bg-blue-600 transition-colors duration-300"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductItem;