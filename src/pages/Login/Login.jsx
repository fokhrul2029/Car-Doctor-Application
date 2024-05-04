/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

function Login() {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:flex-row justify-around w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-3xl font-bold text-center">Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error text-white">Login</button>
            </div>
            <p className="text-center">
              I don't have any account{" "}
              <Link className="link" to="/register">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
