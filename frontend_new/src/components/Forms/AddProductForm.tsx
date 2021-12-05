import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

import './AddProductForm.css';

const AddProductFrom:React.FC = () => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    // const stripe = 

    const addProductHandler = (e:React.FormEvent) => {
        e.preventDefault()

    }

    return (

            <form 
                className='add-product-form-container' 
                onSubmit={addProductHandler}
            >
                <h2>Add Your Product</h2>
            <TextField id='product-name' label='Product Name' value={name} onChange={e => setName(e.target.value)}/>
            <TextField id='product-url' label='Product Image Url' value={url} onChange={e => setUrl(e.target.value)}/>
            <TextField id='product-description' label='Product Description' value={description} onChange={e => setDescription(e.target.value)}/>
            <TextField id='product-price' label='Product Price' type='number' value={price} onChange={e => setPrice(+e.target.value)}/>
            <button className='add-product-form-button'>Submit</button>
            </form>
                
                
                
                
       
    )
}

export default AddProductFrom;