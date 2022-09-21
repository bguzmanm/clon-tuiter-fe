import './Tuit.css';

// function Tuit(props: { user: string; email: string; message: string; change: boolean}) {
function Tuit(props: { user: string; email: string; message: string}) {
    return (
        <div className={'tuit'}>
            {/*<input type={"text"} id={'changed'} value={String(props.change)}/>*/}
            <div className={'name'}>
                <h2>
                    <a href={`mailto: ${props.email}`}>{props.user}</a>
                </h2>
            </div>
            <div className={'message'}>{props.message}</div>
        </div>
    );
}

export default Tuit;