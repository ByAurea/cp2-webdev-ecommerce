export default function Card({title, price, description, image, rating}) {

    return(
        <div className="border-1 rounded-2xl p-2">
            <img src={image} alt="" className="border-b-1 pt-5 pb-5"/>
            <div>
                <h1 className="font-medium">{title}</h1>
                <p>{price}</p>
                <div>

                </div>
            </div>
        </div>
    )
}


