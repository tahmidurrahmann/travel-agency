import "./Login.css"

const Login = () => {
    return (
        <div>
            <div className="flex items-center min-h-screen bg-gradient-to-b from-black to-blue-900 px-4 md:px-0 -mt-28">
                <div className="mx-auto space-y-8 rounded-lg p-5 md:p-12 xl:p-24 glass">
                    <div>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Welcome!</h1>
                        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Log in to Altair</p>
                    </div>
                    <div className="pt-4 form-container">
                        <form className="space-y-4 text-white">
                            <input placeholder="Enter Your Email Address" className="input w-full" name="text" type="email"></input>
                            <input placeholder="Enter Your Password" className="input w-full" name="text" type="password"></input>
                            <input className="text-white font-semibold w-full bg-[#b63327] py-1 lg:py-1.5 rounded-md uppercase hover:text-[#b63327] hover:bg-[#212121] hover:border hover:border-[#b63327]" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;