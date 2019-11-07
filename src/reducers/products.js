
var initialState = [
    {
        id: 1,
        name: 'iphone 8 plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 400,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'iphone XS max',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png',
        description: 'Sản phẩm do apple sản xuất',
        price: 1000,
        inventory: 8,
        rating: 3
    },
    {
        id: 3,
        name: 'samsung galaxy note 10+',
        image: 'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-silver-400x460.png',
        description: 'Sản phẩm do samsung sản xuất',
        price: 800,
        inventory: 9,
        rating: 5
    },
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default products