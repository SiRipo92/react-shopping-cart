import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
   // Step 1: Initialize superCoins state
    const [superCoins, setSuperCoins] = useState(0);

    // Step 2: Retrieve cartItems from Redux store
    const cartItems = useSelector(state => state.cart.cartItems);

    // Step 3: Calculate totalAmount from cartItems
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Step 4: Update superCoins based on totalAmount using useEffect
    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
    }, [totalAmount]);

    // Step 5: Render the component
    return (
        <div className="super-coins" style={{ textAlign: 'center' }}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
};

export default SuperCoin;