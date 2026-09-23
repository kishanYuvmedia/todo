function  Card(props) {
    return(
        <div className="box">
                <h1>{props.title}</h1>
                {props.children}
        </div>
    )
}
export default Card;