const initialState = {
    dataBlog: [],
    name: "joko"
}
const globalReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_DATA_BLOG") {
        return {
            ...state,
            dataBlog: action.payload
        }
    } else if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Riyadi"
        }
    }
    return state;
}

export default globalReducer