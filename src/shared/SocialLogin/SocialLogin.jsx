import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(async (result) => {
                const user = result?.user;
                const email = user?.email;
                const name = user?.displayName;
                const role = "user";
                const userInfo = { email, name, role }
                const res = await axiosSecure.post("/user", userInfo);
                console.log(res?.data);
                toast.success("Google Log in Successful");
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error?.message);
            })
    }

    return (
        <div>
            <h1 onClick={handleGoogleLogin} className="flex justify-center items-center gap-6 border py-2 rounded hover:text-[#b63327] hover:border-[#b63327] font-bold"><FcGoogle />Sign Up with Google</h1>
        </div>
    );
};

export default SocialLogin;