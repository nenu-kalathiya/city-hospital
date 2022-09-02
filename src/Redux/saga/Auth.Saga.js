import { call, takeEvery, takeLatest, all, put } from 'redux-saga/effects'
import * as ActionTypes from "../ActionTypes";
import { signInApi, signUpApi } from '../../common/api/Auth.Api';
import { SetAlert } from '../action/AlertAction';

function* signUp(action) {
  try {
    const user = yield call(signUpApi, action.payload);
    // console.log(user)
    yield put(SetAlert({ text: user.payload, color: "success" }));
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
    yield put(SetAlert({ text: e.payload, color: "error" }));
  }
}

function* signIn(action) {
  try {
    const user = yield call(signInApi, action.payload);
    // console.log(user);
    yield put(SetAlert({ text: "Login Successfully", color: "success" }));
  } catch (e) {
    yield put(SetAlert({ text: e.payload, color: "error" }));
  }
}

function* googleSignIn(action) {
  try {
    const user = yield call()
  } catch (e) {
    
  }
}

export function* watchSignUp() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUp);
}

export function* watchSignIn() {
  yield takeEvery(ActionTypes.SIGNIN_USER, signIn)
}

export function* watchGoogleSignIn() {
  yield takeEvery(ActionTypes.GOOGLE_SIGNIN_ACTION, googleSignIn)
}

export function* authSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchGoogleSignIn()
  ])
}