import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logpic from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  const { logInUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMsg = error.message;
        setError(errorMsg);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/checkout/:id");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/checkout");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="w-9/12" src={logpic} alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Log in</h1>
          <form onSubmit={handleLogin} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="text-red-600 font-bold">{error}</p>
              </label>
              <label className="label">
                <p>
                  New in Genius Car?{" "}
                  <Link
                    className="text-orange-600 font-bold underline"
                    to="/signup"
                  >
                    Signup Now
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-danger bg-[#FF3811]"
                type="submit"
                value="Login"
              />
              <p className="mt-4 font-semibold">Or Sign In with</p>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="mt-4 mr-4  bg-[#FF3811] rounded-full p-4 text-white"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button className="mt-4 mr-4  bg-blue-600 rounded-full p-4 text-white">
                  <FaFacebook></FaFacebook>
                </button>
                <button
                  onClick={handleGithubSignIn}
                  className="mt-4  bg-black rounded-full p-4 text-white"
                >
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
