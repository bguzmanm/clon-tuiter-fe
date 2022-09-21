import React, {useState} from "react";

// @ts-ignore
export default function TuitCreate({ onChange }) {
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
                /*setUser("");
                setEmail("");*/
                setMessage("");
            } else {
                console.log(`ha ocurrido un error ${res.status}`);
            }
            console.log(resJson);
        } catch (err) {
            console.log(`ERROR: ${err}`);
        }
        onChange(user);
    };

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Escribe tus pensamientos</h2>
                    <input className={'form user'} value={user} placeholder={'Nombre'} type={"text"}
                           onChange={(e) => setUser(e.target.value)}/>
                    <input className={'form email'} value={email} placeholder={'nombre@email.com'} type={"email"}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <textarea className="form mensaje" value={message}
                              onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <button type={'submit'} className={'btn'}>Enviar!</button>
                </div>
            </form>
        </div>
    );
}

