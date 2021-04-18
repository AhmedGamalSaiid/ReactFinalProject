export const SignUpReducer = (state = { email: '', password: '', firstName: '', lastName: '', userType: 'client', authID: '', country: '', userName: '' }, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return action.payload
        default:
            return state;
    }
};