import * as types from './../constants/ActionType';

export const actAddTocart = (product, quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}