import { handleActions } from "redux-actions"
import product from "../component/item/product.json"
import postData from "../component/post/postData.json"

const DETAIL_ITEM = "store/DETAIL_ITEM"
const DETAIL_POST = "stroe/DETAIL_POST"

export const Detail_item = (id,itemNum) =>({type:DETAIL_ITEM, payload: { id, itemNum }})

export const Detail_post = (id) => ({type:DETAIL_POST, payload: { id}})

const initialState = {
    items:{
        item1:product.itme1,
        item2:product.itme2,
        item3:product.itme3
    },
    DetailItem:null,
    posts:postData.post,
    DetailPost:null,

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
    [DETAIL_POST]:(state,{ payload:{ id } } ) => {
        // console.log(id)
        // console.log(state.posts)
        const newPosts = [...state.posts]
        // console.log(newPosts)
        const detail_post = newPosts.find(item => item.id === id)
        // console.log(detail_post)
        return{
            ...state,DetailPost:detail_post
        }
    }  
   
},initialState)