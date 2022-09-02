import './Tuit.css';
function Tuit(props: { user: string; email: string; message: string }){
    return (
        <div className={'tuit'}>
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