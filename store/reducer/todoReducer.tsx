interface Todo {
    id: number;
    title: string;
    content: string;
}

interface TodoState {
    todos: Todo[];
}

const initState: TodoState = {
    todos: [
        {
            id: 1,
            title: 'cv1',
            content: 'test',
        },
    ],
};

interface Action {
    type: string;
    payload: any;
};

const todoReducer = (state: TodoState = initState, action: Action): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default todoReducer;
