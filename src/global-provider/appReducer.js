
export default (state, action) => {
    console.log(state.currentTodo)
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]

            }
        case "SET_TODO":
            return {
                ...state,
                currentTodo: action.payload,
            };

        case "UPDATE_TODO":
            return {
                ...state,
                transactions: state.transactions.map((todo) =>
                    todo.id === action.payload.id ? action.payload : todo,

                ),
                currentTodo: null
            };
        case 'Delete_TRANSACTIONS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }


        default:
            return state
    }

}