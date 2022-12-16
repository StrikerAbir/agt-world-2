import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        toast.success("Welcome to T-Drawing.");
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          {/* form */}
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Login"
              />
            </div>
          </form>

          <p className="text-center">
            New Here?
            <Link className="text-green-500 font-bold ml-2" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;