import React, {useContext} from 'react';
import ProductCard from './ProductCard';
import {ProductCardProps} from './ProductCard';
import {SearchBarContext} from '../../../context/SearchBarContext';

interface ProductListProps {
    products: ProductCardProps[];
    prices: ProductCardProps[];
    
}
const ProductsList: React.FC<ProductListProps> = ({ products, prices}) => {
    const { searchPhrase} = useContext(SearchBarContext)
    return (
        <div>
            {products.filter(product => product.name.toLowerCase().includes(searchPhrase.toLowerCase())).map((product, index) => (
                <ProductCard key={index} name={product.name} description={product.description} unit_amount={prices[index].unit_amount /100} images={product.images}/>
            ))}
        </div>
    )
}

export default ProductsList;