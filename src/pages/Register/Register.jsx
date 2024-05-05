import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";

/* eslint-disable react/no-unescaped-entities */
function Register() {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:flex-row justify-around w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-3xl font-bold text-center">Register!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Confirm Password</span>
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
              <button className="btn btn-error text-white">Register</button>
            </div>
            <p className="text-center">
              I have an account{" "}
              <Link className="link text-orange-600" to="/login">
                Login Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
