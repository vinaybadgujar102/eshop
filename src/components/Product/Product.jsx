import React from 'react';
import "./Product.css"

function Product() {
    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Title</p>
                    <p className='product__price'>$30</p>
                    <div className="product__rating">⭐⭐⭐</div>
                </div>

                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" />
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product