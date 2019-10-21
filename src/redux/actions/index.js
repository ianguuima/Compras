export const SHOW_LIST = 'SHOW_LIST'
export const SET_LIST = 'SET_LIST'
export const CLEAR_LIST = 'CLEAR_LIST'
export const ADD = 'ADD_TO_LIST'
export const UPDATE_LIST = 'UPDATE_LIST'

const list = []

export function showList(){
    return {
        type: SHOW_LIST,
        payload: list
    }
}

export function setList(lista){
    return {
        type: SET_LIST,
        payload: lista
    }
}

export function clearList(){
    return {
        type: CLEAR_LIST,
        payload: null
    }
}

export function addToList(text){

    if (text === '') return;

    const data = {
        id: `${Date.now()}-${text}`,
        produto: text,
        comprado: false
    }

    return {
        type: ADD,
        payload: data
    }
}

export function updateList(data){
    return {        
        type: UPDATE_LIST,
        payload: data
    }
}