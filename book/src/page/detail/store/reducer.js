import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable' //不可修改  生成的immutable对象 不可改变

//转化成immutable对象
const defaultState = fromJS({

})




export default (state = defaultState, action) => {
    switch (action.type) {
        default: return state
    }
}