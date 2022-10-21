import myapi from "../../apis/myapi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
    const response = await myapi.get('/products')
    const data = await response.data.data
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: data})
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}
export const addProduct = (product) => {
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = () => {
    return{
        type: ActionTypes.REMOVE_PRODUCT
    }
}