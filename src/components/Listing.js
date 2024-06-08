import { jsx as _jsx } from "react/jsx-runtime";
import ListItem from './Item';
const Listing = ({ items }) => {
    return (_jsx("div", { className: "item-list", children: items.map((item) => {
            if (item.state === 'removed') {
                return null;
            }
            return (_jsx(ListItem, { id: item.listing_id, url: item.url, MainImage: item.MainImage.url_570xN, title: item.title, currency_code: item.currency_code, price: item.price, quantity: item.quantity }, item.listing_id));
        }) }));
};
export default Listing;
