import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Todo {
    id: number,
    title: string,
    content: string
}
interface TodoItemProps {
    todo: Todo,
    deleteTodo: (id: number)=> void
}
const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
    return (
        <View style={styles.container} >
            <View style={{flexDirection: 'row', flexShrink: 1, justifyContent: 'space-between'}}>
                <Text style={styles.text}> {todo.title}: </Text>
                <Text style={styles.text}> {todo.content} </Text>
            </View>
            <TouchableOpacity style={styles.deleteBtn} onPress={()=> deleteTodo(todo.id)} >
                <Text>x</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 20
    },
    text: {
        fontSize: 20
    },
    deleteBtn: {
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10
    },
    image: {
        width: 50,
        height: 50
    }
})

export default TodoItem;
