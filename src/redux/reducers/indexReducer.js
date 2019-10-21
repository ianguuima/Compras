import {
    SHOW_LIST,
    SET_LIST,
    CLEAR_LIST,
    ADD,
    UPDATE_LIST
} from '../actions/index'


const defaultState = {
    list: []
}

export default function(state = defaultState, action){
    
    switch(action.type){

        case SHOW_LIST:

            return {
                ...state,
                list: action.payload
            }
        
        case SET_LIST:
            
            return {
                ...state,
                list: action.payload
            }

        case CLEAR_LIST:

            return {
                ...state,
                list: []
            }

        case ADD:

            const newValue = [... state.list, {...action.payload }]

            return {
                ...state,
                list: newValue
            }
        case UPDATE_LIST:

            state.list.filter(t => t.id === action.payload.id).map(t => t.comprado = !t.comprado)
            
            return {
                ...state,
                list: [...state.list]
            }

        default:
                return state;

    }

}