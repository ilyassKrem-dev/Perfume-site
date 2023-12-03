import Signin from "./Signin"
import Registre from "./Registre"


export default function Sr(props:any) {


    return (
        <>
            {props.state === "signin"&&<Signin />}
            {props.state === "registre"&&<Registre />}
        </>
    )
}