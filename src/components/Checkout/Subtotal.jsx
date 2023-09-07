import "./Subtotal.css";
import React from 'react';
import { useStateValue } from "../../state/StateProvider";
import { getBasketTotal } from "../../state/reducer";

const Subtotal = (props) => {
    const [{basket}, dispatch] = useStateValue();

    // Format the subtotal value using toLocaleString
    const formattedSubtotal = getBasketTotal(basket).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>{formattedSubtotal}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
        </div>
    );
};

export default Subtotal;
