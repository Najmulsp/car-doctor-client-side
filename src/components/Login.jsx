import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../public/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    const result = await loginUser(email, password);
    // get access token
    const { data } = await axios.post(
      `http://localhost:5000/jwt`,
      { email: result?.user?.email },
      { withCredentials: true }
    )
      .then((result) => {
        // const loggedInUser = result.user;
        // console.log(loggedInUser);
        // const user = { email };
        console.log(result.user)

        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .then((error) => console.log(error));
  };

  return (
    <section className=" mt-10">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
        <div className="flex lg:w-1/2 items-center justify-center p-6 mt-8 lg:mt-0  h-full">
          <img src={loginImg} alt="" className="object-contain h-4/5" />
        </div>
        {/* log in form */}
        <div className="lg:w-1/2 lg:max-w-md p-10 space-y-3 rounded-xl   lg:mr-16 border">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form noValidate="" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="User Email"
                className="w-full px-4 py-3 rounded-md border"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border"
              />
              <div className="flex justify-end text-xs ">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="btn block w-full p-3 text-center rounded-md bg-orange-500">
              Sign in
            </button>
          </form>

          <p className="text-xl text-center sm:px-6 py-6 dark:text-gray-600">
            Do not have an account?
            <Link to="/register" className="underline text-orange-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
