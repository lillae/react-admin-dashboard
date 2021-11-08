import {v4 as uuidv4} from 'uuidv4'

export const productReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, {
                name: action.product.name,
                Description: action.product.Description,
                Price: action.product.Price,
                Discount: action.product.Discount,
                uuid: uuidv4(),
            }]
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.uuid !== action.uuid);
        default: 
        return state;
    }
}