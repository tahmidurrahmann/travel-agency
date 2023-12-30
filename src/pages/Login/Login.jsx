import "./Login.css"
import Lottie from "lottie-react";
import animation from "../../assets/Animation - 1703827244779.json"
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {

    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        loginUser(email, password)
            .then(() => {
                toast.success("Log in SuccessFul")
            })
            .catch(error => {
                toast.error(error?.message);
            })
    }


    const [seePassword, setSeePassword] = useState(true);

    return (
        <div>
            <Helmet>
                <title>Login | Altair</title>
            </Helmet>
            <div className="bg-black max-w-screen-2xl mx-auto flex justify-center lg:justify-start pt-3 md:pt-6">
                <img className="w-[70px] md:w-[100px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
            </div>
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center bg-gradient-to-b from-black via-black to-[#b63327] px-4 pb-8 lg:pb-0 md:px-0 min-h-screen -mt-16 lg:-mt-28">
                <div className="mx-auto space-y-8 rounded-lg p-5 md:p-12 xl:p-24 glass">
                    <div>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome!</h1>
                        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Log in your account</p>
                    </div>
                    <div className="pt-4 form-container w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
                            <input {...register("email", { required: true })} placeholder="Enter Your Email Address" className="input w-full" type="email" />
                            {errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>}
                            <span className="relative">
                                <input {...register("password", { required: true })} placeholder="Enter Your Password" className="input w-full mt-4" type={seePassword ? "password" : "text"} />
                                <p className="absolute right-4 top-1" onClick={() => setSeePassword(!seePassword)}>{seePassword ? <FaEyeSlash /> : <FaEye />}</p>
                            </span>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            <input className="text-white font-semibold w-full bg-[#b63327] py-1 lg:py-1.5 rounded-md uppercase hover:text-[#b63327] hover:bg-[#212121] hover:border hover:border-[#b63327]" type="submit" value="Login" />
                        </form>
                        <p>Don't Have any account? <Link className="text-[#b63327] font-bold" to='/register'>Register.</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                <div className="md:w-3/4 lg:w-1/2">
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;