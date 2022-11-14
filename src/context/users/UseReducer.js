import {GET_USERS , GET_PROFILES} from '../types'

export default (state, action)=>{
    const {payload, type} = action
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILES:
            return {
              ...state,
              selectUser: payload
            }
         default:
            return {
               ...state
            }   
     

}
}