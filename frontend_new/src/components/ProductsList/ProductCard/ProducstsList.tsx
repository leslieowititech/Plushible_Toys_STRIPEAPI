import React from 'react';
import ProductCard from './ProductCard';
import {ProductCardProps} from './ProductCard'

interface ProductListProps {
    products: ProductCardProps[]
}
const ProductsList: React.FC<ProductListProps> = ({products}) => {
    return (
        <div>
            {products.map(product => (
                <ProductCard name={product.name} description={product.description} price={product.price}/>
            ))}
        </div>
    )
}

export default ProductsList;