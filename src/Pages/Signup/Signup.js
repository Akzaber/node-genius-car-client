import React from "react";
import { Link } from "react-router-dom";
import logpic from "../../assets/images/login/login.svg";

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero my-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="w-9/12" src={logpic} alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <form onSubmit={handleSignup} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-orange-600 font-bold underline"
                    to="/login"
                  >
                    Login Now
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
