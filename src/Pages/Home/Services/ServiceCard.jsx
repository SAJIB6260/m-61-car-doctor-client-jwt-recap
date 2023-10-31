import { Link } from 'react-router-dom';
import frame from '../../../assets/Frame.png'

const ServiceCard = ({ service }) => {

    const { _id, title, img, price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="service" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl text-[#444444] font-bold">{title}</h2>
                
                <div className="card-actions flex justify-between">
                <p className="text-xl text-[#FF3811] font-semibold">Price: ${price}</p>
                    <Link to={`/book/${_id}`}>
                    <button className="">
                        <img src={frame} alt="" />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;