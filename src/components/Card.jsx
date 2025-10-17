export default function Card({title, price, description, image, rating}) {

    return(
        <div>
            <img src={image} alt="" />
            <div>
                <h1>{title}</h1>
                <p>{price}</p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


