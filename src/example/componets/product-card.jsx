const ProductCard=(props)=>{
    console.log("productcard",props.data.title)
    return(
       <>
        <div className="box">
                <div className="box-image">
                    <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" alt="image" />
                </div>
                <div className="box-details">
                    <div className="details-title">
                            <h2>{props.data.title}</h2>
                    </div>
                    <div className="details-descritpion">
                            <p>
                               {props.data.details}
                            </p>
                    </div>
                    <div className="details-button">
                         <button style={{}}>View More.</button>
                    </div>
                </div>
        </div>
       </> 
    )
}
export default ProductCard;