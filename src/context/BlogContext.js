import CreateDataContext from "./CreateDataContext";
import jsonServer from "../api/jsonServer";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogpost':
            return action.payload
        case 'delete_blogpost':
            console.log('inside blogReducer_delete_blogpost')
            return state.filter((blogPost)=>blogPost.id!==action.payload);
       
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                if (blogPost.id===action.payload.id){
                    return action.payload
                } else {
                    return blogPost
                }
            })
    default: return state;
        }


}
const getBlogPost = dispatch =>{
    return async () =>{
        const response = await jsonServer.get('/blogpost')
        dispatch({type:'get_blogpost', payload: response.data})
    }
}

const addBlogPost = dispatch=>{
    return async (title, content, callback) => {
        await jsonServer.post('/blogpost',{title, content})
            if (callback) {
            callback();
        }
        
    }
};

const deteleBlogPost = dispatch=>{
    return async id => {
        await jsonServer.delete(`/blogpost/${id}`);
        // console.log('inside deteleBlogPost')
        dispatch({type: 'detele_blogpost', payload: id});
    }
};
const editBlogPost = dispatch=>{
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogpost/${id}`, {title, content})
        dispatch({type: 'edit_blogpost', payload: {id, title,content}})
        if (callback) {
            callback();
        }
    }
}
export const {Context, Provider} = CreateDataContext(
    blogReducer, 
    {addBlogPost, deteleBlogPost, editBlogPost, getBlogPost},
    [])
