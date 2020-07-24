import React from 'react';

const SelectedSummary = ({ total }) => {
    return (
        <div className="summary">
            <div>
                <span>총 구매량 : </span>
                <span>{total.num} 개</span>
            </div>
            <div>
                <span>총 금액 : </span>
                <span>{total.price} $</span>
            </div>
        </div>
    );
}

export default SelectedSummary;