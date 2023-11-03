import axios from 'axios';
import { Dispatch } from 'redux';


type TodoAction = {
    type: string;
    payload: any;
};


export const addTodo = (todo: any): TodoAction => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};


export const deleteTodo = (id: number): TodoAction => {
    return {
        type: 'DELETE_TODO',
        payload: id
    };
};


export const addTodoAsync = () => async (dispatch: Dispatch<TodoAction>) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1');
        console.log(res.data.results);
        const pokemons = res.data.results.map((item: { name: string }) => {
            return {
                id: Math.random().toString(),
                title: item.name,
                content: 'add todo async'
            };
        });
        dispatch(addTodo(pokemons));
    } catch (error) {
        console.log(error);
    }
};
