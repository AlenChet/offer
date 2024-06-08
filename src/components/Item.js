import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
const ListItem = ({ url, MainImage, title, currency_code, price, quantity }) => {
    const titleLimit = 50;
    const quantityClassName = classNames('item-quantity', {
        'level-low': quantity <= 10,
        'level-medium': quantity > 10 && quantity <= 20,
        'level-high': quantity > 20,
    });
    return (_jsxs("div", { className: "item", children: [_jsx("div", { className: "item-image", children: _jsx("a", { href: url, children: _jsx("img", { src: MainImage, alt: title }) }) }), _jsxs("div", { className: "item-details", children: [_jsx("p", { className: "item-title", children: title.length > titleLimit ? `${title.slice(0, titleLimit)}…` : title }), _jsx("p", { className: "item-price", children: `${currency_code} ${price}` }), _jsxs("p", { className: quantityClassName, children: [quantity, " left"] })] })] }));
};
export default ListItem;
