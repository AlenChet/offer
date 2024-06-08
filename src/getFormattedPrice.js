const getFormattedPrice = (currency_code, price) => {
    switch (currency_code) {
        case 'USD':
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        case 'GBP':
            return `${price} GBP`;
        default:
            return `${price} ${currency_code}`;
    }
};
export default getFormattedPrice;
