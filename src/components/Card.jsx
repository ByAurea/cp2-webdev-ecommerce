import { FaStar } from 'react-icons/fa6';
export default function Card({title, price, description, image, rating}) {

    return(
        <div className="border-1 rounded-2xl p-2 hover:scale-104 transition ease-in h-115 w-70 flex flex-col bg-neutral-800">
            <img src={image} alt="" className="h-60 w-50 object-contain drop-shadow-[0_0_10px_black] pt-5 pb-5 mx-auto"/>
            <div className="flex-grow">
                <h1 className="font-bold text-red-800">{title}</h1>
                <p className="text-yellow-500 font-bold pt-5 pl-3">R$ {price}</p>
                <div className='flex'>
                    <p className="text-yellow-500 font-bold flex pt-1 pr-1 pl-3 pb-5"> <FaStar /> </p>
                    <p className="text-yellow-500 font-bold flex"> {rating.rate} ({rating.count} reviews)</p>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <button className='bg-red-700 p-1 rounded hover:bg-red-800 hover:cursor-pointer pr-18 pl-18 pt-2 pb-2 drop-shadow-[0_0_5px_black] hover:drop-shadow-[0_0_10px_black] transition mb-2'>
                    <p className='font-bold'>Ver Produto</p>
                </button>
            </div>
        </div>
    )
}


