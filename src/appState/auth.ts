import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import firebase from 'firebase';

const currentUserAtom = atom({
    key: 'currentUser',
    default: firebase.auth().currentUser
});
const emailAtom = atom({
    key: 'email',
    default: ''
});
const passwordAtom = atom({
    key: 'password',
    default: ''
});
const atoms = {
    currentUser: currentUserAtom,
    loginPage: {
        emailAtom,
        passwordAtom
    }
}

const isAuthenticatedSelector = selector({
    key: 'isAuthenticated',
    get: ({ get }) => {
        const user = get(currentUserAtom);
        if (user == null) { return false; }
        return true;
    }
})

const selectors = {
    isAuthenticated: isAuthenticatedSelector
}
const createNewUser = async (email: string, password: string) => {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
    alert('user created');
    return result;
}

const appState = {
    atoms,
    selectors,
    funcs: {
        createNewUser
    }
}
export default appState;