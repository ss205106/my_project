import { handleActions } from "redux-actions"
import product from "../component/item/product.json"

const DETAIL_ITEM = "store/DETAIL_ITEM"
export const Detail_item = (id,itemNum) =>({type:DETAIL_ITEM, payload: { id, itemNum }})



const initialState = {
    items:{
        item1:product.itme1,
        item2:product.itme2,
        item3:product.itme3,
        item4:product.itme4,
    },
    DetailItem:null
}
export const sotreRedux = handleActions({
    [DETAIL_ITEM] : (state,{ payload: { id, itemNum } } ) => {  //체인지 함수 
        // console.log(itemNum,"itemNum")
        const NewProduct = [...state.items[itemNum]]
        const Detail = NewProduct.filter(itme=>itme.id===id)
        // console.log(NewProduct)
        // console.log(state.items)
        return{
        ...state,Detail
    }
    },

},initialState)