import React, { Component } from 'react';
import ShoppingList from './makeList';
import SelectedList from './selected_list';

class Shopping extends Component {
    render() {
        const { items, onChange, onSubmit } = this.props;
        const list = items.map( ({id, text, price, num, input}) => (
            <ShoppingList key={id} id={id} text={text} price={price} num={num} input={input} onChange={onChange} onSubmit={onSubmit} />
        ));
        const filtered = items.filter((item) => item.num !== 0);
        const selected = filtered.map( ({id, text, price, num}) => (
            <SelectedList key={id} text={text} price={price} num={num} />
        ));

        return (
            <main>
                <div className="shopping">
                    <div className="title">과일 선택</div>
                    <ul className="fruit-list">
                        { list }
                    </ul>
                    <div className="selected">
                        <div className="subtitle">
                            임시 장바구니
                        </div>
                        <div className="selected-box">
                            <ul className="selected-list">
                                { selected }
                            </ul>
                            <div className="summary">
                                <div>
                                    <span>총 구매량 : </span>
                                    <span>10 개</span>
                                </div>
                                <div>
                                    <span>총 금액 : </span>
                                    <span>101 $</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Shopping;