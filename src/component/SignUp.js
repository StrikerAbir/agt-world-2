import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [uname, setUname] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userC = { name, email };
    
    fetch(`https://agt-serverside.vercel.app/user?name=${name}`)
      .then(res=>res.json()).then(data=> setUname(data.available));
    if (uname === false) {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          handleUpdateProfile(name);
          fetch("https://agt-serverside.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userC),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              form.reset();
              navigate("/");
              toast.success("Sign in successful.");
            });

          console.log(user);
        })
        .catch((err) => toast.error(err.message));
        const handleUpdateProfile = (name) => {
          const profile = { displayName: name };
          updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.error("error", error));
        }
    } else {
      toast.error('User name already used');
    }


  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="card py-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          {/* form */}
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                name="name"
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-green-500 hover:bg-green-400 border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className="text-center">
            Already have an account?
            <Link className="text-green-500 font-bold ml-2" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
