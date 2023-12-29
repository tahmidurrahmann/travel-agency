import Lottie from "lottie-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import animation from "../../assets/Animation - 1703827244779.json"
import "./Register.css"
import { Helmet } from "react-helmet-async";

const Register = () => {

    const [seePassword, setSeePassword] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        const name = data?.name;
        const photo = data?.photo;
        console.log(email, password, name, photo);
    }


    return (
        <div className="bg-gradient-to-b from-black via-black to-[#b63327]">
            <Helmet>
                <title>Register | Altair</title>
            </Helmet>
            <div className="flex max-w-screen-2xl mx-auto justify-center lg:justify-start pt-3 md:pt-6">
                <img className="w-[70px] md:w-[100px]" src="https://themes.themegoods.com/altair/demo/wp-content/themes/altair/images/logo@2x_white.png" alt="" />
            </div>
            <div className="flex flex-col-reverse xl:flex-row items-center  px-4 pb-8 lg:pb-0 md:px-0 min-h-screen xl:-mt-[72px] max-w-screen-2xl mx-auto">
                <div className="mx-auto space-y-8 rounded-lg p-5 md:p-12 xl:p-20 glass">
                    <div>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome!</h1>
                        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Register your account</p>
                    </div>
                    <div className="pt-4 form-container w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
                            <input {...register("name", { required: true })} placeholder="Enter Your Name Here" className="input w-full" type="text" />
                            {errors.name?.type === 'required' && <p className="text-red-600">Name is required</p>}
                            <input {...register("email", { required: true })} placeholder="Enter Your Email Address" className="input w-full" type="email" />
                            {errors.email?.type === 'required' && <p className="text-red-600">Email is required</p>}
                            <span className="relative">
                                <input {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/ })} placeholder="Enter Your Password" className="input w-full mt-4" type={seePassword ? "password" : "text"} />
                                <p className="absolute right-4 top-1" onClick={() => setSeePassword(!seePassword)}>{seePassword ? <FaEyeSlash /> : <FaEye />}</p>
                            </span>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Your Password should not more than 20 characters.</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Your Password should more or equal to 8 characters.</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Your Password should have one uppercase, one lowercase, one special character & One digit.</p>}
                            <div className="input-div">
                                <input {...register("photo", { required: true })} className="inputu" type="file" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                            </div>
                            <input className="text-white font-semibold w-full bg-[#b63327] py-1 lg:py-1.5 rounded-md uppercase hover:text-[rgb(182,51,39)] hover:bg-[#212121] hover:border hover:border-[#b63327]" type="submit" value="register" />
                        </form>
                        <p>Already Have an account? <Link className="text-[#b63327] font-bold" to='/login'>Log in.</Link></p>
                    </div>
                </div>
                <div className="md:w-3/4 lg:w-1/2">
                    <Lottie animationData={animation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;