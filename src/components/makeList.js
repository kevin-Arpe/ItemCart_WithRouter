import React from 'react';

const ShoppingList = ({ id, text, price, input, onChange, onClick }) => {
    let text2 = '';

    if (text === 'apple') {
        text2 = 'apple-alt';
    }
    else {
        text2 = text;
    }

    return (
        <li className="fruit-card" key={id}>
            <i className={`fas fa-${text2}`}></i>
            <form>
                <span>{text} : </span>
                <span>{price}$</span>
                <input className="input" type="text" value={input} onChange={ (e) => {
                    e.stopPropagation();
                    onChange(e, id);
                }} placeholder="개수" />
                <input type="submit" value="선택" name={text} onClick={(e) => onClick(e,id)} />
            </form>
        </li>
    );
}

export default ShoppingList;