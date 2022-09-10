export const initialStore = null

export const formReducer = (state, action) => {

    switch (action.type) {
        case 'ACTUALIZAR_FORM':
            return {
                ...state,
                data: action.payload
            }
            break;

        default:
            return state
            break;
    }
}
