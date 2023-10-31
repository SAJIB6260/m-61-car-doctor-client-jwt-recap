import { Link, useLocation} from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import useAuth from "../../hook/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn} = useAuth();
    // const { signIn } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)

        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                <h1 className="text-3xl text-center font-bold ">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center text-lg font-semibold text-[#737373] mb-5"> New to car doctors <Link to='/signup' className="text-xl font-bold text-[#FF3811]">sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;