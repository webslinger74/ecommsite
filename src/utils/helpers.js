export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
        style:'currency',
        currency: 'USD'
    })
}

export const getUniqueValues = (products, type) => {
    let unique = products.map((item) => item[type]);
    if(type === 'colors') {
        unique = unique.flat();
    }
    return ['all', ...new Set(unique)];
}
