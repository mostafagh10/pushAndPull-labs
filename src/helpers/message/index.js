
export function Errormessage(props){
    return(
        <div className="alert alert-danger">
            {props.message}
        </div>
    )
}

export function Successmessage(props){
    return(
        <div className="alert alert-success">
            {props.message}
        </div>
    )
}