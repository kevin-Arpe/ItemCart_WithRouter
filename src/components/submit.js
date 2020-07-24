import React from 'react';

const Submit = ( {onSubmit} ) => {
    return (
        <div className="submit">
            <div className="submit_Btn" onClick={onSubmit}>장바구니에 담기</div>
        </div>
    );
}

export default Submit;