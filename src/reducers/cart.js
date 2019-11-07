import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState =[
    {
        product: {
            id: 1,
            name: 'iphone 8 plus',
            image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
            description: 'Sản phẩm do apple sản xuất',
            price: 400,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 3,
            name: 'samsung galaxy note 10+',
            image: 'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-silver-400x460.png',
            description: 'Sản phẩm do samsung sản xuất',
            price: 800,
            inventory: 9,
            rating: 5
        },
        quantity: 3
    }
];

const cart =(state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state]
        default:
            return [...state]
    }
}

export default cart