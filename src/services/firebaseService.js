import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../assets/credentials/firebaseConfig';
import axios from 'axios';
firebase.initializeApp(firebaseConfig);

const USER_STORAGE_KEY = "user";

// const URL_HELLOWORLD = "https://us-central1-gemsisu.cloudfunctions.net/api";
const URL_USER = "https://us-central1-gemsisu.cloudfunctions.net/api/users";

export const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (snapshot) => {
                    const user = snapshot.user.toJSON();
                    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
                    resolve(user);
                }
                , (error) => {
                    reject(error)
                }
            );
    });
};

export const createUser = async (displayName, email, password) => {
    const response = await axios.post(URL_USER, { displayName, email, password }, { headers: { 'Content-Type': 'application/json' } });
    return response;
};

export const signOut = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
};

export const userIsAuthenticated = () => {
    return localStorage.getItem(USER_STORAGE_KEY) ? JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) : null;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
};