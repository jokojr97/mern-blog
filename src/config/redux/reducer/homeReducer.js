const initialState = {
    dataBlogs: [],
    name: "joko"
}
const homeReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Riyadi"
        }
    }
    return state;
}

export default homeReducer