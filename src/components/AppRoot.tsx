import * as React from 'react';

import { RecoilRoot, useRecoilValue } from 'recoil';

import { BrowserRouter } from 'react-router-dom';
import appState from '../appState/auth';
import firebase from 'firebase';
import { useRecoilState } from 'recoil';

const AppRoot = () => {
const [currentUser, setCurrentUser ] = useRecoilState(appState.atoms.currentUser);

    const { emailAtom, passwordAtom } = appState.atoms.loginPage;
    const [ email, setEmail ] = useRecoilState(emailAtom);
    const [ password, setPassword ] = useRecoilState(passwordAtom);
    firebase.auth().onAuthStateChanged(user => {
        console.log('in onAuthStateChanged');
        console.log(`user: ${user}`)
        setCurrentUser(user);
    });
    const isAuthenticated = useRecoilValue(appState.selectors.isAuthenticated)
    const onRun = (e: React.MouseEvent) => {
        e.preventDefault();
        alert(`email: ${email} password: ${password}`)
        alert(`isAuthenticated: ${isAuthenticated}`)
    }
    const onSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        const result = appState.funcs.createNewUser(email, password);
        result.then(console.log).then((x: any) => console.log(`isAuthenticated: ${isAuthenticated}`));
    }
    return (
        <div>
                <BrowserRouter>
                    <div>WELCOME!</div>
                    <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={onRun}>Run</button>
                    <button type="button" onClick={onSubmit}>Add User</button>
                </BrowserRouter>
        </div>
    )
}

const Root = () => {
    return <RecoilRoot>
        <AppRoot />
    </RecoilRoot>
}
export { AppRoot, Root };