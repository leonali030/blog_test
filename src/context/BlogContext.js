import CreateDataContext from "./CreateDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            console.log('inside blogReducer_delete_blogpost')
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random()* 9999), 
                title: action.payload.title,
            content: action.payload.content}];
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
const addBlogPost = dispatch=>{
    return (title, content, callback) => {

        dispatch({type: 'add_blogpost', payload: {title, content}});
        if (callback) {
            callback();
        }
        
    }
};
const deteleBlogPost = dispatch=>{
    return id => {
        console.log('inside deteleBlogPost')
        dispatch({type: 'detele_blogpost', payload: id});
    }
};
const editBlogPost = dispatch=>{
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id, title,content}})
        if (callback) {
            callback();
        }
    }
}
export const {Context, Provider} = CreateDataContext(
    blogReducer, 
    {addBlogPost, deteleBlogPost, editBlogPost},
    [{title:'test post', content: 'test content', id: 1}])
