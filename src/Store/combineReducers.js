import { combineReducers } from 'redux';
import { SignUpReducer } from './reducers/signUp';

export default combineReducers({
    //The Key is your type;
    //the value is reducer you will import
    // count:counterReducer,import { SignUpReducer } from './reducers/signUp';

    signUpData: SignUpReducer

})