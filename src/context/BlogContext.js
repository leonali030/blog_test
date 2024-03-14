import CreateDataContext from "./CreateDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            console.log('inside blogReducer_delete_blogpost')
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random()* 9999), 
                title: `Blog Post #${state.length + 1}`}];
    default: return state;
        }


}
const addBlogPost = dispatch=>{
    return () => {
        dispatch({type: 'add_blogpost'});
    }
};
const deteleBlogPost = dispatch=>{
    return id => {
        console.log('inside deteleBlogPost')
        dispatch({type: 'detele_blogpost', payload: id});
    }
};
export const {Context, Provider} = CreateDataContext(
    blogReducer, 
    {addBlogPost, deteleBlogPost},
    [])
