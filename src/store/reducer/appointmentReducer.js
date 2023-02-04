const getDataFromLocal = () => {
    return JSON.parse(localStorage.getItem('appointMentData'))
}
export const getAppointment = (id) => {
    const arr=[...getDataFromLocal()]
    const item = arr.filter(i => i.id === id)
    console.log(item[0]);
    return item[0]
 }

const initialState = getDataFromLocal() || [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_APPOINTMENT":
            state = [...state, action.payload]
            localStorage.setItem('appointMentData', JSON.stringify(state))
            return state;
        case "EDIT_APPOINTMENT":
            const arr = state.map(itemState => {
                if (itemState.id === action.payload.id) {
                    itemState={...action.payload}
                }
                return itemState
            })
            state = [...arr]
            localStorage.setItem('appointMentData', JSON.stringify(state))
            return state;
        case "DELETE_APPOINTMENT":
            const arr2 = state.filter(itemState =>itemState.id!==action.payload)
            state = [...arr2]
            localStorage.setItem('appointMentData', JSON.stringify(state))
            return state;
        default:
            return state;
    }
}

export default reducer;