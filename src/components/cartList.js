import React from 'react';

const CartList = ({ item } ) => {
    return (
        <li className="item">
            <span>{item.text} : </span>
            <span>{item.num} 개</span>
        </li>
    );
}

export default CartList;