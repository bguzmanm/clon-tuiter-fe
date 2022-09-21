import React, {useEffect, useState} from "react";
import Tuit from "./Tuit";

function TuitList({}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [tuitList, setTuitList] = useState([]);
    // const [setUser] = useState('');

    // document.title = `Timeline de ${user}`;
    useEffect(()=> {
        fetch('http://localhost:3000/tuits/')
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setTuitList(data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
                // console.error(err.message);
            })
    })



    /*    useEffect(() => {
            document.title = `Timeline de ${user}`;
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
        }, []);*/
    if (!isLoaded) {
        return (
            <div className="container">
                {/*{user.trim() !== '' ? <h1 className='titulo'>{user}, mira los últimos twits</h1> : null}*/}
                <div>Cargando...</div>
            </div>);
    } else if (error) {
        return (<div className="container">
            {/*{user.trim() !== '' ? <h1 className='titulo'>{user}, mira los últimos twits</h1> : null}*/}
            <div>
                ERROR!: {error}
            </div>
        </div>);
    } else if (tuitList.length == 0){
        return <div></div>;
    } else {

        return (
            <div className='container'>
                {/*{user.trim() !== '' ? <h1 className='titulo'>{user}, mira los últimos twits</h1> : null}*/}
                {tuitList.map(value => (
                    <Tuit key={value['id']} user={value['user']} email={value['email']} message={value['message']}
                          // change={user.trim() !== ''}
                    />
                ))}
            </div>
        );
    }
}

export default TuitList;
