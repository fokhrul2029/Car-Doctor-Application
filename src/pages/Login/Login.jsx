/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { logIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        // alert("User Login Success!");
        const user = { email };
        axios
          .post("http://localhost:3000/jwt", user , {withCredentials:true})
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:flex-row justify-around w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-error text-white">
                Login
              </button>
            </div>
            <p className="text-center">
              I don't have any account{" "}
              <Link className="link text-orange-600" to="/register">
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
