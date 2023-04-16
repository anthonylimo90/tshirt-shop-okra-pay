import React from "react";
import ProductItem from "./ProductItem";
import products from "./products";

const ProductList = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-8">T-shirts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;