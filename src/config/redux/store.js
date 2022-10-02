const { createStore } = require("redux")

const initialState = {
    dataBlogs: [],
    name: "joko"
}
const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_DATA_BLOG") {
        return {
            ...state,
            dataBlogs: action.payload
        }
    } else if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Riyadi"
        }
    }
    return state;
}
const store = createStore(reducer);

export default store;
