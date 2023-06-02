import { useRouteError } from "react-router-dom";
const Error = () => {
    const {status,statusText} = useRouteError();
    return (
        <div className="Error">
            <h1>{status}</h1>
            <h2>{statusText}</h2>
        </div>
    );
}

export default Error;