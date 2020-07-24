import React from 'react';
import CartList from './cartList';

const Cart = () => {
    const total_num = localStorage.getItem('total_num');
    const total_price = localStorage.getItem('total_price');
    const items = JSON.parse(localStorage.getItem('items'));

    const list = items.map( (item) => {
        return (
            <ul className="cart-items">
                <CartList item={item} />
            </ul>
            )
        }
    );


    console.log(total_num, total_price, items);
    return (
        <main>
            <div className="cart">
                <div className="title">장바구니</div>
                <div className="cart_container">
                    <div className="item_list">
                        <div className="subtitle">상품 리스트</div>
                        { list }
                    </div>
                    <div className="purchase">
                        <div className="subtitle">총 수량 및 금액</div>
                        <ul>
                            <li>
                                <span>총 수량 : </span>
                                <span>{total_num} 개</span>
                            </li>
                            <li>
                                <span>총 금액 : </span>
                                <span>{total_price} $</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;