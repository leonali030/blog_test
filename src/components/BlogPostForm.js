import React, {useContext, useState} from "react";
import {View, Text,TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext'

const BlogPostForm = ({onSubmit, initalValues}) => {
    const {state} = useContext(Context)
    const [title, setTitle] = useState(initalValues.title)
    const [content, setContent] = useState(initalValues.content)
    return <View>
        <Text>Edit Title:</Text>
        <TextInput style = {styles.input} value={title} onChangeText={setTitle}/>
        <Text>Edit Content:</Text>
        <TextInput style = {styles.input} value={content} onChangeText={setContent}/>
    <Button 
    title='Save Blog Post' 
    onPress={()=>onSubmit(title,content)}
    />
    </View>
}
BlogPostForm.defaultProps = {
    initalValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        borderWidth: '1px',
        fontSize: 18,
        margin: 5,
        padding: 5,
    }
});

export default BlogPostForm;