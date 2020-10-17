
import ShopActionTypes from './shop.types';

const INITIAL_STATE={
    collections:null
}


const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            console.log("shopReducer_______");
            console.log(action.payload);
            return {
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;