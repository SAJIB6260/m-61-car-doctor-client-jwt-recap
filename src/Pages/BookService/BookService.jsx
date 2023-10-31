import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'


const BookService = () => {

    const service = useLoaderData();

    const { title, _id, price, img} = service;

    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.name.value;
        const email = user?.email;
        const booking = {
            coustomerName : name,
            img: img,
            email,
            date,
            service: title,
            service_id:_id,
            price:price
        }
        console.log(booking)

        fetch('https://car-doctor-server-jwt-recap-sk-sajibs-projects.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire({
                title: 'Service book successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        });
    }

    return (
        <div>
            <h2 className="text-center text-3xl">book services: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$'+price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;