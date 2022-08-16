import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

export function* RootSaga() {
    yield all ({
        authSaga
    })
}