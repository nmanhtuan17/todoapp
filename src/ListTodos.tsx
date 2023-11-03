import { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem';
import { addTodo, deleteTodo, addTodoAsync } from '../store/action';

const ListTodos = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [isShow, setIsShow] = useState<boolean>(false)
    const todos = useSelector((state: any) => state.todos)
    const dispatch = useDispatch()
    const handleAddTodo = ():void => {
        let id = Math.random()
        if (title !== '' && content !== '') {
            dispatch(addTodo([{
                id: id,
                title: title,
                content: content
            }]))
        }
        // dispatch(addTodoAsync())
        setTitle('')
        setContent('')
        setIsShow(false)
    }
    const handleDeleteTodo = (id:number):void => {
        dispatch(deleteTodo(id))
    }
    return (
        <SafeAreaView>
            <FlatList
                data={todos}
                renderItem={({ item }) => (<TodoItem todo={item} deleteTodo={handleDeleteTodo} />)}
                keyExtractor={(item) => item.id}

            />
            {isShow && (

                <View style={styles.inputTodo}>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                        placeholder='Title'
                    />
                    <TextInput
                        value={content}
                        onChangeText={setContent}
                        style={styles.input}
                        placeholder='Content'
                    />
                </View>
            )}
            <TouchableOpacity onPress={() => {
                isShow === true ? handleAddTodo() : setIsShow(true)
            }} style={styles.addBtn}>
                <Text style={{ textAlign: 'center' }}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addBtn: {
        // position: 'absolute',
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 20,
        right: 0,
        alignContent: 'flex-end',
        marginTop: 10,
        marginHorizontal: 20
    },
    inputTodo: {
        marginHorizontal: 20,
    },
    input: {
        borderWidth: 0.5,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginTop: 20
    }
})

export default ListTodos;
