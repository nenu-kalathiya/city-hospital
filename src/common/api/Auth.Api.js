import { createUserWithEmailAndPassword, onAuthStateChanged,  sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const signUpApi = (data) => {
    console.log("signUpApi", data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user
                onAuthStateChanged(auth, (user) => {
                    console.log(user);
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "Check Your E-mail" });
                        })
                        .catch((e) => {
                            reject({ payload: e })
                        })
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    resolve({ payload: "This E-mail Is Already Restricted" });
                } else {
                    reject({ payload: errorMessage });
                }
            });
    })
}

export const signInApi = (data) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.emailVerified) {
                    resolve({ payload: user });
                } else {
                    reject({ payload: "error" })
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "You Are Login Successfully" });
                } else {
                    reject({ payload: errorMessage });
                }
            });
    })
}

export const googleSignInApi = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
    })
}