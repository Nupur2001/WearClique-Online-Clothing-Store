import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data); 
    };

    return (
        <>
            {/* Login Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <div
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-lg colorChange">Login</h3>
                        <br />

                        {/* Username/Email/Phone */}
                        <div className="mt-4 space-y-2">
                            <label>Username / Email / Phone</label>
                            <br />
                            <input
                                {...register("usernameOrEmailOrPhone", { required: true })}
                                type="text"
                                placeholder="Enter username, email, or phone"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.usernameOrEmailOrPhone && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label>Password</label>
                            <br />
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none p-3"
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btnColor text-white rounded-md px-4 py-2 duration-200 w-full border:none mt-4"
                        >
                            Login
                        </button>
                    </form>

                    {/* Signup Link */}
                    <div className="mt-4 text-gray-600">
                        <span>
                            Not registered?{" "}
                            <a
                                href="/signup"
                                className="underline text-blue-500 cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").close()}
                            >
                                Signup
                            </a>
                        </span>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Login;

