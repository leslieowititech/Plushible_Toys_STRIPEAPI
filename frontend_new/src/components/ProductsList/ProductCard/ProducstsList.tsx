import React from 'react';
import ProductCard from './ProductCard';
import {ProductCardProps} from './ProductCard'

interface ProductListProps {
    products: ProductCardProps[];
    prices: ProductCardProps[];
    searchPhrase: string
}
const ProductsList: React.FC<ProductListProps> = ({products, prices, searchPhrase}) => {
    return (
        <div>
            {products.filter(product => product.name.toLowerCase().includes(searchPhrase.toLowerCase())).map((product, index) => (
                <ProductCard key={index} name={product.name} description={product.description} unit_amount={prices[index].unit_amount /100} images={product.images}/>
            ))}
        </div>
    )
}

export default ProductsList;