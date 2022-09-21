import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TuitList from './TuitList';
import TuitCreate from "./TuitCreate";

function App() {
    const [user, setUser] = useState("");
    const handleUserOnChange = (u: React.SetStateAction<string>) => {
        setUser(u);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            {user!= '' ? <div>Hola otra ves {user}</div> : ''}
            {/*{console.log('cucui')}*/}
            <TuitCreate onChange={handleUserOnChange}></TuitCreate>
            {/*<TuitList user={user}></TuitList>*/}
            <TuitList></TuitList>
        </div>
    );
}

export default App;
