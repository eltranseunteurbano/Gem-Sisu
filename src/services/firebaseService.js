import * as firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../assets/credentials/firebaseConfig';
import axios from 'axios';
firebase.initializeApp(firebaseConfig);

const USER_STORAGE_KEY = "userObject";

const URL_USER = "https://gemsisu.herokuapp.com/users";
const URL_COMMENTS = "https://gemsisu.herokuapp.com/comments";

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

export const createUser = (displayName, email, password) => {
    return new Promise((resolve, reject) => {
        axios.post(URL_USER, { displayName, email, password }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                localStorage.removeItem(USER_STORAGE_KEY);
                localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.data));
                resolve(response.data);
            }, (error) => {
                reject(JSON.parse(error.request.response));
            });
    });
};

export const getComments = () => {
    return new Promise((resolve, reject) => {
        axios.get(URL_COMMENTS)
            .then((response) => {
                resolve(response.data);
            }, (error) => {
                reject(JSON.parse(error.request.response));
            });
    });
};

export const makeComment = (name, date, comment) => {
    return new Promise((resolve, reject) => {
        axios.post(URL_COMMENTS, { name, date, comment }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                resolve(response.data);
            }, (error) => {
                reject(JSON.parse(error.request.response));
            });
    });
}

export const signOut = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
};

export const isUserAuthenticated = () => {
    return localStorage.getItem(USER_STORAGE_KEY) !== null ? true : false;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
};