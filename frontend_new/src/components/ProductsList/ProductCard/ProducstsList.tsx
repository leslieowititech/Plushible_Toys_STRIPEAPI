import React from 'react';
import ProductCard from './ProductCard';
import {ProductCardProps} from './ProductCard'

interface ProductListProps {
    products: ProductCardProps[]
}
const ProductsList: React.FC<ProductListProps> = ({products}) => {
    return (
        <div>
            {products.map((product, index) => (
                <ProductCard key={index} name={product.name} description={product.description} price={product.price} images={product.images}/>
            ))}
        </div>
    )
}

export default ProductsList;