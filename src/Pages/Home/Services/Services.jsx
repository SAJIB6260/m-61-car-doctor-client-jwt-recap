// import { useEffect, useState } from "react";
import useServices from "../../../hook/useServices";
import ServiceCard from "./ServiceCard";

// DRY ---> Do not repeat yourself
const Services = () => {

    const services = useServices();

    // const [services, setServices] = useState([]);

    // useEffect( () =>{
    //     fetch('https://car-doctor-server-jwt-recap-sk-sajibs-projects.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])


    return (
       <div>
         <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">Service</h3>
            <h2 className="text-5xl font-bold">Our Service Area</h2>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
           {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
           }
        </div>
        <div className="text-center">
            <button className="px-6 py-4 text-[#FF3811] border-2 border-[#FF3811] text-lg font-semibold rounded-md">More Services</button>
        </div>
       </div>
    );
};

export default Services;