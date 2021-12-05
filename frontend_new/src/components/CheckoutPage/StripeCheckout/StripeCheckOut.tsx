import React, {useState, useContext} from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import TextField from '@mui/material/TextField';
import { CartContext } from '../../../context/CartItemsContext';

const StripeCheckout:React.FC = () => {
    const [email, setEmail] = useState('');
    const { items } = useContext(CartContext);
    const stripe = useStripe();

    

    const handleGuestCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        const line_items = items.map(item => {
            return {
                quantity: 2,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.unit_amount,
                    product_data: {
                        name: item.name,
                        description: item.description,
                        images: item.images
                    }
                }
            }
        })

        const response = fetch('http://localhost:8080/create-checkout', {
            method: 'POST',
            body: JSON.stringify{ line_items,  customer_email: email}
        });

    }

    return (
        <form className='add-product-form-container' onSubmit={handleGuestCheckout}>
            <TextField id='email' type='email' label='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <button type='submit' className='add-product-form-button'>Checkout</button>
        </form>
    )
}

export default StripeCheckout;