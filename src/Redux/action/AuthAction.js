import * as ActionTypes from "../ActionTypes";

export const signUpAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:values})
}

export const signInAction = (values) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNIN_USER, payload:values})
}

export const googleSignInAction = () => (dispatch) => {
    dispatch({type: ActionTypes.GOOGLE_SIGNIN_ACTION})
}