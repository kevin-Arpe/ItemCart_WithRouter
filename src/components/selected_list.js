import React from 'react';

const SelectedList = ({text, price, num}) => {
    return (
        <li className="selected_item">
            <span>{text} : </span>
            <span>{num} 개</span>
            <span> / 구매가격 : </span>
            <span>{(price * num).toFixed(2)} $</span>
        </li>
    );
}

export default SelectedList;