import React from 'react';

const SelectedSummary = ({ items }) => {
    let total_num = 0;
    let total_price = 0;

    items.map( ({num, price}) => {
        total_num = total_num + parseInt(num);
        total_price = total_price + num*price;
    });

    return (
        <div className="summary">
            <div>
                <span>총 구매량 : </span>
                <span>{total_num} 개</span>
            </div>
            <div>
                <span>총 금액 : </span>
                <span>{total_price.toFixed(2)} $</span>
            </div>
        </div>
    );
}

export default SelectedSummary;