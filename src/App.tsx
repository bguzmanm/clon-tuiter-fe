import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Tuit from "./Tuit";


function CreateTuit() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:3000/tuits/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "user": user,
                    "message": message,
                    "email": email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setUser("");
                setEmail("");
                setMessage("");
            } else {
                console.log(`ha ocurrido un error ${res.status}` );
            }
            console.log(resJson);
        } catch (err) {
            console.log(`ERROR: ${err}`);
        }
    }

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Escribe tus pensamientos</h2>
                    <input className={'form user'} value={user} placeholder={'Nombre'} type={"text"} onChange={(e) => setUser(e.target.value)}/>
                    <input className={'form email'} value={email} placeholder={'nombre@email.com'} type={"email"} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea className="form mensaje" value={message} onChange={(e)=> setMessage(e.target.value)}> </textarea>
                </div>
                <div>
                    <button type={'submit'} className={'btn'}>Enviar!</button>
                </div>
            </form>

        </div>
    );
}

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tuitList, setTuitList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tuits/')
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setTuitList(data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
                console.error(err.message);
            })
    }, []);

    if (!isLoaded) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div>Cargando...</div>
            </div>);
    } else if (error) {
        return <div>ERROR!: {error}</div>;
    } else {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <CreateTuit></CreateTuit>
                <div className='container'>
                    <h1 className='titulo'>Últimos tuits</h1>
                    {tuitList.map(value => (
                        <Tuit user={value['user']} email={value['email']} message={value['message']}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
