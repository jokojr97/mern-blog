import Axios from "axios";

export const setDataBlog = () => {
    return (dispacth) => {
        Axios.get('http://localhost:4000/v1/blog/posts?page=1&perPage=5')
            .then(result => {
                const responseAPI = result.data;
                console.log("respons api data: ", responseAPI.data)
                dispacth({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}