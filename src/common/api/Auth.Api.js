import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/Firebase";

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
                // console.log(""errorCode,errorMessage);
            });

    })
}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve,reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                console.log("asdfghjkl");
            } else {
                console.log("error");
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                resolve({ payload: "E-mail Or Password Is Wrong" });
            } else {
                reject({ payload: errorMessage });
            }
        });
    })
    

}