import React, { Component } from 'react';
import ShoppingList from './makeList';
import SelectedList from './selected_list';
import SelectedSummary from './selected_summary';
import Submit from './submit';

class Shopping extends Component {
    render() {
        const { total, items, onChange, onClick, onSubmit } = this.props;
        const list = items.map( ({id, text, price, num, input}) => (
            <ShoppingList key={id} id={id} text={text} price={price} num={num} input={input} onChange={onChange} onClick={onClick} />
        ));
        const filtered = items.filter((item) => item.num !== 0);
        const selected = filtered.map( ({id, text, price, num}) => (
            <SelectedList key={id} text={text} price={price} num={num} />
        ));

        const summary = <SelectedSummary total={total} />
        const submit = <Submit onSubmit={onSubmit} />

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
                            { summary }
                        </div>
                    </div>
                    { submit }
                </div>
            </main>
        );
    }
}

export default Shopping;