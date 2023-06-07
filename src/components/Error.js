import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="Error">
            <h1>{error.statusText || error.messag}</h1>
            <h2>{error.message}</h2>
        </div>
    );
}

export default Error;